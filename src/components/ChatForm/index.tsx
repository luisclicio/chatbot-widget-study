import { useListState, randomId } from '@mantine/hooks';
import {
  ActionIcon,
  Group,
  Paper,
  ScrollArea,
  Stack,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconSend } from '@tabler/icons-react';

export type Message = {
  id: string;
  from: 'user' | 'bot';
  type: 'text' | 'image' | 'video' | 'audio' | 'file';
  content: string;
  timestamp: number;
};

export function ChatForm() {
  const [messages, messagesHandlers] = useListState<Message>([
    {
      id: randomId(),
      from: 'bot',
      type: 'text',
      content: 'Hello! How can I help you today?',
      timestamp: Date.now(),
    },
  ]);
  const form = useForm({
    initialValues: {
      message: '',
    },

    transformValues: (values) => ({
      message: values.message.trim(),
    }),
  });

  async function handleSubmit() {
    const values = form.getTransformedValues();

    if (!values.message) {
      return;
    }

    messagesHandlers.append({
      id: randomId(),
      from: 'user',
      type: 'text',
      content: values.message,
      timestamp: Date.now(),
    });

    form.reset();

    // Simulate bot response
    setTimeout(() => {
      messagesHandlers.append({
        id: randomId(),
        from: 'bot',
        type: 'text',
        content: 'I am a bot',
        timestamp: Date.now(),
      });
    }, 1000);
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <ScrollArea h={400}>
          <Stack gap={4}>
            {messages.map((message) => (
              <Paper
                key={message.id}
                p="sm"
                bg={message.from === 'user' ? 'blue' : 'gray'}
                maw="80%"
                style={{
                  alignSelf:
                    message.from === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                {message.content}
              </Paper>
            ))}
          </Stack>
        </ScrollArea>

        <Group wrap="nowrap" gap="xs">
          <TextInput
            placeholder="Type your message..."
            size="sm"
            style={{ flexGrow: 1 }}
            key={form.key('message')}
            {...form.getInputProps('message')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                handleSubmit();
              }
            }}
          />

          <ActionIcon
            type="submit"
            size="lg"
            variant="light"
            aria-label="Send message"
          >
            <IconSend />
          </ActionIcon>
        </Group>
      </Stack>
    </form>
  );
}
