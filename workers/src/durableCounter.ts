import { AppEnv } from './types/env';
import { StatusCodes } from 'http-status-codes';

interface Counts {
  total: number;
}

export class DurableCounter {
  state: DurableObjectState;

  env: AppEnv;

  constructor(state: DurableObjectState, env: AppEnv) {
    this.state = state;
    this.env = env;
  }

  async fetch(request: Request) {
    const { method } = request;
    const total = Number(await this.state.storage.get('total')) || 0;

    switch (method.toUpperCase()) {
      case 'POST': {
        const created = ((await request.json()) as Counts) || { total: 0 };
        const newTotal = total + created.total;
        await this.state.storage.put('total', newTotal);
        return new Response(JSON.stringify({ total: newTotal }), {
          headers: { 'content-type': 'application/json' },
        });
      }
      case 'GET': {
        return new Response(JSON.stringify({ total }), {
          headers: { 'content-type': 'application/json' },
        });
      }
      default: {
        return new Response(null, { status: StatusCodes.BAD_REQUEST });
      }
    }
  }
}
