import Footer from '@/components/Footer';
import Header from '@/components/Header';
import UuidGenerator from '@/components/UuidGenerator';
import { Box, Container, List, ListItem, Space, Stack, Text, Title } from '@mantine/core';

export default function Home() {
  return (
    <Box>
      <Header />
      <Container size="md" mt="xl" mb={'xl'}>
        <Stack gap="xl">
          {/* Main content */}
          <Stack gap="md">
            <Title order={1}>UUID Generator</Title>
            <Text size="lg">Generate secure Version 4 or Version 7 UUIDs instantly.</Text>

            <UuidGenerator />

            <Space h="md" />

            <Title order={2}>What is a UUID?</Title>
            <Text>
              A UUID (Universally Unique Identifier) is a 128-bit identifier that's guaranteed to be unique across space
              and time. Version 4 UUIDs are generated using random or pseudo-random numbers, making them ideal for
              distributed systems where uniqueness is crucial. Version 7 UUIDs are generated using a combination of
              timestamp and random numbers, which make them suitable for use in distributed systems where time-based
              ordering is important.
            </Text>

            <Space h="md" />

            <Title order={2}>Features</Title>
            <List
              spacing="sm"
              size="md"
              icon={
                <Box
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                  }}
                  bg="blue.5"
                />
              }
            >
              <ListItem>Generates cryptographically secure Version 4 or Version 7 UUIDs</ListItem>
              <ListItem>Works offline - all generation happens in your browser</ListItem>
              <ListItem>No data collection or tracking</ListItem>
              <ListItem>Free to use</ListItem>
            </List>
          </Stack>
        </Stack>
      </Container>
      <Footer />
    </Box>
  );
}
