+++
title = "Hello"
date = "2021-11-04T23:15:57-07:00"
author = "Cole MacKenzie"
authorTwitter = "Cole_MacKenzie" #do not include @
cover = ""
tags = ["uuid", "workers", "cloudflare"]
keywords = ["uuid", "workers", "typescript", "javascript", "cloudflare", "guid", "online", "generator"]
description = "Introducing UUID's as a Service!"
showFullContent = true
readingTime = false
+++

# ✨ Introduction ✨

As a proof-of-concept, and to show how incredibly fast ⚡ (and easy) it is to deploy a service WORLDWIDE 🌎 using [Cloudflare Workers](https://workers.cloudflare.com/), I created `uuidgen.dev`!

`uuidgen.dev` is self-proclaiming itself as its very own UUID-as-a-Service offering, because, y'know, why not?

## Getting Started

### Bash

```bash
# just one UUID pls
curl 'https://uuidgen.dev'
0d3ff6fd-592d-44a2-9380-5b81f8b07b51

# or request up to 1000 at a time!
curl 'https://uuidgen.dev/bulk?limit=5'
bd2dbebe-b777-4465-a336-4c94f795613e
0598d28a-2e98-4d3b-9e7c-e855dbd1df8c
cc740352-e3b4-48e5-8ddf-1d886a3c7dee
0290489d-f66f-40b0-b5a8-4662291cb080
f5f07070-f0f0-4227-adaa-b1d939aadf09
```

### Python

```python
>>> import requests
>>> print(requests.get("https://uuidgen.dev/").text)
221636d2-0044-4f9e-a06b-138ff00ec487
```

### Javascript (`fetch`)

```js
// async/await
const resp = await fetch("https://uuidgen.dev");
console.log(await resp.text());

// promise based
fetch("https://uuidgen.dev")
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
```

You get the idea...

Enjoy :)

# Learn More

`uuidgen.dev` is 100% open-source at available on GitHub at [cmackenzie1/uuidgen.dev](https://github.com/cmackenzie1/uuidgen.dev)

All UUID's generated are Version 4, as described in [rfc4122](https://datatracker.ietf.org/doc/html/rfc4122).
