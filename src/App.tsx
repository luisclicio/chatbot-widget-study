import './styles/index.css';

import { MantineProvider } from '@mantine/core';

import { FloatChat, type FloatButtonProps } from './components/FloatChat';

export type AppProps = FloatButtonProps;

export function App({ width, position }: AppProps) {
  return (
    <MantineProvider>
      <FloatChat width={width} position={position} />
    </MantineProvider>
  );
}
