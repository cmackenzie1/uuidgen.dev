'use client';

import { Text, Stack, Group, NumberInput, Center, ScrollArea, NativeSelect, Fieldset } from '@mantine/core';
import { CodeHighlight } from '@mantine/code-highlight';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { Button } from '@mantine/core';
import { v4 as uuidv4, v7 as uuidv7 } from 'uuid';

export default function UuidGenerator() {
  const [uuid, setUuid] = useState('');

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      count: 1,
      kind: 'v4',
    },
  });

  type FormValues = typeof form.values;

  const generateUuid = () => {
    switch (form.getValues().kind) {
      case 'v4':
        return uuidv4();
      case 'v7':
        return uuidv7();
    }
  };

  const handleSubmit = (values: FormValues) => {
    const uuids = Array.from({ length: values.count }, generateUuid);
    setUuid(uuids.join('\n'));
  };

  return (
    <Stack mx={'md'} mt="md">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Fieldset legend="UUID Generator">
          <NumberInput
            label="Count"
            description="How many UUIDs to generate"
            min={1}
            max={10000}
            key={form.key('count')}
            {...form.getInputProps('count')}
          />

          <NativeSelect
            mt="md"
            label="Version"
            data={[
              { value: 'v4', label: 'Version 4 (random)' },
              { value: 'v7', label: 'Version 7 (timestamp and random)' },
            ]}
            key={form.key('kind')}
            {...form.getInputProps('kind')}
          />
        </Fieldset>

        <Group justify={'flex-end'} mt="md">
          <Button type="submit">Generate</Button>
        </Group>
      </form>
      <ScrollArea.Autosize mah={300} maw={'100%'}>
        <Center>{uuid === '' && <Text c="dimmed">Click "Generate" to create UUIDs</Text>}</Center>
        {uuid && <CodeHighlight code={uuid} language="plaintext" copyLabel="Copy button code" copiedLabel="Copied!" />}
      </ScrollArea.Autosize>
    </Stack>
  );
}
