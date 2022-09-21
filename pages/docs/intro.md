---
sidebar_position: 1
---

# API

The API supports any client, platform, tool, and programming language that can make HTTP requests to the following
endpoint.

## Getting Started

Generate a single UUID using `curl` on the command line.

```bash
curl https://uuidgen.dev
```

Or generate up to 1,000 at once with the bulk endpoint `/bulk?limit=5`

```bash
curl https://uuidgen.dev/bulk?limit=5
```
