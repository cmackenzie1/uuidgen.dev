import { Group, Center, Title, Anchor } from '@mantine/core';
import Link from 'next/link';

export default function Header() {
  return (
    <Group grow wrap={'nowrap'} align={'center'} justify={'space-evenly'} h={'70px'} p="md">
      <Center>
        <Anchor component={Link} href={'/'} underline="never">
          <Title order={1}>uuidgen.dev</Title>
        </Anchor>
      </Center>
    </Group>
  );
}
