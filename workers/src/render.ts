export const renderJSON = (uuids: string[]) => {
  return new Response(JSON.stringify(uuids), {
    headers: { 'content-type': 'application/json' },
  });
};

export const renderText = (uuids: string[]) => {
  return new Response(`${uuids.join('\n')}\n`, {
    headers: { 'content-type': 'text/plain' },
  });
};

export const renderError = (msg: string, status: number) => {
  return new Response(`${msg}\n`, {
    headers: { 'content-type': 'text/plain' },
    status: status,
    statusText: msg
  }, );
};
