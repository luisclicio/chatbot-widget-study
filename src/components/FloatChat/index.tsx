import { ActionIcon, Affix, Popover } from '@mantine/core';
import { IconRobotFace } from '@tabler/icons-react';

import { ChatForm } from '../ChatForm';

export type FloatButtonProps = {
  width?: number;
  position?: {
    top?: (string & {}) | number;
    left?: (string & {}) | number;
    bottom?: (string & {}) | number;
    right?: (string & {}) | number;
  };
};

export function FloatChat({
  width = 340,
  position = { bottom: 16, right: 16 },
}: FloatButtonProps) {
  return (
    <>
      <Popover width={width} withArrow shadow="md">
        <Popover.Target>
          <Affix position={position}>
            <ActionIcon
              variant="filled"
              size="xl"
              radius="xl"
              aria-label="Chat with us"
            >
              <IconRobotFace
                style={{ width: '70%', height: '70%' }}
                stroke={1.5}
              />
            </ActionIcon>
          </Affix>
        </Popover.Target>

        <Popover.Dropdown p="xs">
          <ChatForm />
        </Popover.Dropdown>
      </Popover>
    </>
  );
}
