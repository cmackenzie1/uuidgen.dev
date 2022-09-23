# `uuidgen.dev`

UUID-as-a-Service, built using [Cloudflare Workers](https://workers.cloudflare.com/)

## Usage

```bash
# get a uuid
curl https://uuidgen.dev/

# get N uuids
curl https://uuidgen.dev/bulk?limit=5
```

## Deployment

```bash
npm run deploy
```
