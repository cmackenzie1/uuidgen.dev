import { Router } from 'itty-router';
import { CORS_HEADERS } from './constants';
import { AnalyticsEngine, AppEnv } from './types/env';
import { ErrorObject, serializeError } from 'serialize-error';

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

router.head('/', () => new Response());
router.get('/', (request: Request, env: AppEnv) => {
  env.stats.writeDataPoint({ doubles: [1] });
  return new Response(crypto.randomUUID(), {
    status: 200,
    headers: { ...CORS_HEADERS },
  });
});

router.head('/bulk', () => new Response());
router.get('/bulk', (request: Request, env: AppEnv) => {
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
  env.stats.writeDataPoint({ doubles: [count] });
  return new Response(`${data.join('\n')}`, {
    status: 200,
    headers: { ...CORS_HEADERS },
  });
});

router.all('*', (request: Request, env: AppEnv) => {
  const { url, method } = request;
  env.logs.writeDataPoint({
    blobs: [
      'NotFound',
      `${request.method} ${request.url}`,
      '',
      '',
      JSON.stringify({
        url,
        method,
        headers: Object.fromEntries(request.headers),
      }),
    ],
  });
  return new Response('Not Found.', { status: 404 });
});

export default {
  async fetch(request: Request, env: AppEnv, ctx: ExecutionContext) {
    try {
      const resp = router.handle(request, env, ctx);
      checkResponse(resp);
      logRequest(env, request, resp);
      return resp;
    } catch (e) {
      const err: ErrorObject = serializeError(e);
      const resp = new Response('Internal Server Error.', { status: 500 });
      logRequest(env, request, resp, err);
      return resp;
    }
  },
};

const checkResponse = (resp: Response | undefined) => {
  if (resp === undefined) throw Error('UndefinedResponse');
};

const logRequest = (
  env: AppEnv,
  request: Request,
  response: Response,
  err?: ErrorObject,
) => {
  const { method, url, cf, headers } = request;
  const { status, statusText } = response;
  env.requests.writeDataPoint({
    blobs: [
      method,
      url,
      statusText,
      cf?.colo || '',
      cf?.country || '',
      cf?.region || '',
      cf?.city || '',
      cf?.latitude || '',
      cf?.longitude || '',
      headers.get('user-agent') || '',
    ],
    doubles: [status, cf?.clientTcpRtt || 0],
  });
  if (err)
    env.logs.writeDataPoint({
      blobs: [
        err?.name || 'unknown',
        err?.message || '',
        err?.code || '',
        err?.stack || '',
        JSON.stringify(err),
      ],
    });
};
