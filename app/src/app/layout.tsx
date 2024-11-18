import '@mantine/core/styles.css';
import '@mantine/code-highlight/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'uuidgen.dev',
  description:
    'Free online UUID generator tool. Generate secure Version 4 or Version 7 UUIDs instantly. Perfect for developers needing unique identifiers for databases, testing, and applications.',
  keywords: 'UUID generator, GUID generator, unique identifier, UUID v4, random UUID, online UUID tool',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark">{children}</MantineProvider>
      </body>
    </html>
  );
}
