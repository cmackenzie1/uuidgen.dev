import { getReasonPhrase, StatusCodes } from 'http-status-codes';
import { generateUUIDs } from './uuid';
import { prepareResponse, renderError } from './render';
import { AppEnv } from './types/env';

const MAX_UUID_LIMIT = 1000;

export const handleUUID = (
  request: RouterRequest,
  env: AppEnv,
  runtime: ExecutionContext,
) => {
  const { headers } = request;
  const accept = headers.get('accept') || 'text/plain';

  if (accept.includes('text/html')) {
    return fetch(request);
  }

  const uuids = generateUUIDs(1);

  const id = env.DURABLE_COUNTER.idFromName('v4');
  const durableCounter = env.DURABLE_COUNTER.get(id);
  const countRequest = new Request('/stats', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ total: uuids.length }),
  });
  runtime.waitUntil(durableCounter.fetch(countRequest));

  return prepareResponse(accept, uuids);
};

interface RouterRequest extends Request {
  query: { [key: string]: string };
}

export const handleBulkUUID = (
  request: RouterRequest,
  env: AppEnv,
  runtime: ExecutionContext,
) => {
  const { query, headers } = request;
  const limit = Number(query?.limit) || undefined;

  if (!limit) {
    const errorMessage = "Query parameter 'limit' must be provided.";
    return renderError(errorMessage, 400);
  }

  if (limit < 0 || limit > MAX_UUID_LIMIT) {
    const errorMessage = `Query parameter 'limit' must be in range of 1-${MAX_UUID_LIMIT}.`;
    return renderError(errorMessage, 400);
  }

  const uuids = generateUUIDs(limit);
  const accept = headers.get('accept') || 'text/plain';

  const id = env.DURABLE_COUNTER.idFromName('v4');
  const durableCounter = env.DURABLE_COUNTER.get(id);
  const countRequest = new Request('/stats', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ total: uuids.length }),
  });
  runtime.waitUntil(durableCounter.fetch(countRequest));

  return prepareResponse(accept, uuids);
};

export const handleStats = (request: Request, env: AppEnv) => {
  const id = env.DURABLE_COUNTER.idFromName('v4');
  const durableCounter = env.DURABLE_COUNTER.get(id);
  return durableCounter.fetch('/stats');
};

export const handleAll = (request: Request) => {
  return fetch(request);
};

export const handleHead = () => {
  return new Response(null, {
    status: StatusCodes.OK,
    statusText: getReasonPhrase(StatusCodes.OK),
  });
};
