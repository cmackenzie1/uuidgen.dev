# `uuidgen.dev`

UUID-as-a-Service, built using [Cloudflare Workers](https://workers.cloudflare.com/)

## Usage

```bash
# get a uuid
curl https://uuidgen.dev/

# get N uuids
curl https://uuidgen.dev/bulk?limit=5


# get uuids as JSON
curl https://uuidgen.dev/bulk?limit=5 -H 'Accept: application/json'`
```

NOTE: You can request up to `1000` UUID's in each bulk request.

## Deployment

```bash
wrangler publish

# production
wrangler publish --env productiong
```