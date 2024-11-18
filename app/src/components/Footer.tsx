import { Anchor, Center, Group, Text } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <Group wrap="nowrap" align="center" justify="space-evenly" h="70px" p="md">
      <Center>
        <Anchor href="https://github.com/cmackenzie1/uuidgen.dev" target="_blank" component={Link} underline="never">
          <Group gap="xs">
            <Text c={'dimmed'}>A project by @cmackenzie1</Text>
            <IconBrandGithub stroke={1.5} />
          </Group>
        </Anchor>
      </Center>
    </Group>
  );
}
