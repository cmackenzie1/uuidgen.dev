import { Anchor, Center, Group, Title } from '@mantine/core';
import { Link } from '@tanstack/react-router';

export default function Header() {
  return (
    <Group grow wrap={'nowrap'} align={'center'} justify={'space-evenly'} h={'70px'} p="md">
      <Center>
        <Anchor component={Link} to="/" underline="never">
          <Title order={1}>uuidgen.dev</Title>
        </Anchor>
      </Center>
    </Group>
  );
}
