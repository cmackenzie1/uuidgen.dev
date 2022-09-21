# JavaScript / TypeScript

## [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

### Async/Await

```typescript
const resp = await fetch("https://uuidgen.dev/");
console.log(await resp.text());
```

### Promises

```typescript
fetch("https://uuidgen.dev")
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
```