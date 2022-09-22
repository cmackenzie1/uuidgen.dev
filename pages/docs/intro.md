---
sidebar_position: 1
description: Getting started is as easy as running curl https://uuidgen.dev!
---

# API

The API supports any client, platform, tool, and programming language that can make HTTP requests to the following
endpoint.

## Getting Started

Generate a single UUID using `curl` on the command line.

```bash
curl https://uuidgen.dev
```

Or generate a bunch at once with the bulk endpoint `/bulk`. It accepts a multiple different query parameters for the
number of UUIDs to generate.

```bash
curl https://uuidgen.dev/bulk?n=5
curl https://uuidgen.dev/bulk?limit=5
curl https://uuidgen.dev/bulk?count=5
```
