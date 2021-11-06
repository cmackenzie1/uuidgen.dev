import { getReasonPhrase, StatusCodes } from 'http-status-codes';
import { generateUUIDs } from './uuid';
import { prepareResponse, renderError } from './render';

const MAX_UUID_LIMIT = 1000;

export const handleUUID = (request: Request) => {
  const { headers } = request;
  const accept = headers.get('accept') || 'text/plain';

  if (accept.includes('text/html')) {
    return fetch(request);
  }

  const uuids = generateUUIDs(1);
  return prepareResponse(accept, uuids);
};

interface RouterRequest extends Request {
  query: { [key: string]: string };
}

export const handleBulkUUID = (request: RouterRequest) => {
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
  return prepareResponse(accept, uuids);
};

export const handleNotFound = () => {
  return new Response(null, {
    status: StatusCodes.NOT_FOUND,
    statusText: getReasonPhrase(StatusCodes.NOT_FOUND),
  });
};

export const handleHead = () => {
  return new Response(null, {
    status: StatusCodes.OK,
    statusText: getReasonPhrase(StatusCodes.OK),
  });
};
