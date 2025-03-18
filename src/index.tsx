import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App, type AppProps } from './App.tsx';

export type ChatbotWidgetOptions = {
  rootElement: HTMLElement;
  ui: AppProps;
};

export class ChatbotWidget {
  constructor(private options: ChatbotWidgetOptions) {}

  render() {
    createRoot(this.options.rootElement).render(
      <StrictMode>
        <App {...this.options.ui} />
      </StrictMode>
    );
  }
}
