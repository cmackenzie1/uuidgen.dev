import { createFileRoute } from '@tanstack/react-router';
import { v4 as uuidv4, v7 as uuidv7 } from 'uuid';

function generateUuid(kind: string) {
  switch (kind) {
    case 'v4':
      return uuidv4();
    case 'v7':
      return uuidv7();
    default:
      return uuidv4();
  }
}

function isNumeric(value: string) {
  return /^-?\d+$/.test(value);
}

export const Route = createFileRoute('/api/$slug')({
  server: {
    handlers: {
      GET: async ({ request, params }): Promise<Response> => {
        const slug = params.slug;
        const n = new URL(request.url).searchParams.get('n');

        if (n && isNumeric(n)) {
          const count = Number.parseInt(n, 10);
          if (count > 0 && count <= 10000) {
            const uuids = Array.from({ length: count }, () => generateUuid(slug));
            return new Response(uuids.join('\n'));
          }
          return new Response('Invalid parameter n. Value must be between 1 and 10000.', { status: 400 });
        }

        return new Response(generateUuid(slug));
      },
    },
  },
});
