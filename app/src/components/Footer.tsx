import { Group, Box, Center, Text, ActionIcon, Button } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';

export default function Footer() {
  return (
    <Group wrap="nowrap" align="center" justify="space-evenly" h="70px" p="md">
      <Center>
        <Box>
          <Button variant="link" color="gray" size="xs" component="a" href="https://github.com/cmackenzie1/uuidgen.dev">
            <ActionIcon size="xs" style={{ marginRight: 5 }}>
              <IconBrandGithub />
            </ActionIcon>
            <Text size="xs">GitHub</Text>
          </Button>
        </Box>
      </Center>
    </Group>
  );
}
