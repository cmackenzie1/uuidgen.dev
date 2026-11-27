# uuidgen.dev app

A [TanStack Start](https://tanstack.com/start) app (React + Vite) that generates UUIDs in the browser and serves them
from an API. It is deployed to [Cloudflare Workers](https://workers.cloudflare.com/).

## Scripts

Run these from `app/` (or with `pnpm --filter app <script>` from the repo root):

- `pnpm dev` – start the dev server
- `pnpm build` – build the Worker and assets into `dist/`
- `pnpm preview` – run the built Worker locally
- `pnpm deploy` – build and deploy with Wrangler
- `pnpm cf-typegen` – regenerate `env.d.ts` from `wrangler.toml`
