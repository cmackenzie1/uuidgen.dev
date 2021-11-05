import { Router } from 'itty-router';
import { AppEnv } from './types/env';
import { generateUUIDs } from './uuid';
import { renderText, renderJSON, renderError } from './render';

const MAX_UUID_LIMIT = 1000;

const router = Router();

interface RouterRequest extends Request {
  query: { [key: string]: string };
}

router.head('/', (request: RouterRequest, env: AppEnv) => {
  return new Response(null, { status: 200, statusText: 'OK.' });
});

router.get('/', async (request: RouterRequest, env: AppEnv) => {
  const { headers, url } = request;
  const accept = headers.get('accept') || 'text/plain';

  if (accept.includes('text/html')) {
    const { url } = request;
    return new Response(null, {
      headers: { location: 'https://www.uuidgen.dev/' },
      status: 301,
    });
  }

  const uuids = generateUUIDs(1);
  const body = uuids.join('\n');
  switch (accept.toLowerCase()) {
    case 'application/json':
      return renderJSON(uuids);
    case 'text/plain':
      return renderText(uuids);
    default:
      return renderText(uuids);
  }
});

router.get('/bulk?', (request: RouterRequest, env: AppEnv) => {
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
  const body = uuids.join('\n');
  const accept = headers.get('accept') || 'text/plain';
  switch (accept.toLowerCase()) {
    case 'application/json':
      return renderJSON(uuids);
    case 'text/plain':
      return renderText(uuids);
    default:
      return renderText(uuids);
  }
});

export default {
  fetch: router.handle, // yep, it's this easy.
};
