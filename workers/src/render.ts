import { getReasonPhrase, StatusCodes } from 'http-status-codes';

export const prepareResponse = (accept: string, uuids: string[]) => {
  switch (accept.toLowerCase()) {
    case 'application/json':
      return renderJSON(JSON.stringify(uuids), StatusCodes.OK);
    case 'text/plain':
      return renderText(uuids.join('\n'), StatusCodes.OK);
    default:
      return renderText(uuids.join('\n'), StatusCodes.OK);
  }
};

export const renderJSON = (json: string, status: number) => {
  return new Response(json, {
    headers: { 'content-type': 'application/json' },
    status,
    statusText: getReasonPhrase(status),
  });
};

export const renderText = (text: string, status: number) => {
  return new Response(`${text}\n`, {
    headers: { 'content-type': 'text/plain' },
    status,
    statusText: getReasonPhrase(status),
  });
};

export const renderError = (msg: string, status: number) => {
  return new Response(`${msg}\n`, {
    headers: { 'content-type': 'text/plain' },
    status,
    statusText: getReasonPhrase(status),
  });
};
