import { Group, Box, Center, Title } from '@mantine/core';

export default function Header() {
  return (
    <Group grow wrap={'nowrap'} align={'center'} justify={'space-evenly'} h={'70px'} p="md">
      <Center>
        <Box>
          <Title order={1}>uuidgen.dev</Title>
        </Box>
      </Center>
    </Group>
  );
}
