import { Router } from 'itty-router';
import { CORS_HEADERS } from './constants';

const router = Router();

router.options('*', () => {
  return new Response(null, {
    headers: {
      ...CORS_HEADERS,
      'Access-Control-Max-Age': '1',
      'Content-Type': 'text/plain',
    },
  });
});

router.get('/', (request: Request) => {
  return new Response(crypto.randomUUID(), { headers: { ...CORS_HEADERS } });
});

router.get('/bulk', (request: Request) => {
  const { searchParams } = new URL(request.url);
  const count: number = parseInt(
    searchParams.get('n') ||
      searchParams.get('limit') ||
      searchParams.get('count') ||
      '1',
    10,
  );
  const data = Array(count)
    .fill(0)
    .map(() => crypto.randomUUID());
  return new Response(`${data.join('\n')}`, { headers: { ...CORS_HEADERS } });
});

export default {
  fetch: router.handle, // yep, it's this easy.
};
