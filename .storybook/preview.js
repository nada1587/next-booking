import * as NextImage from 'next/image';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import GlobalStyle from '../src/styles/GlobalStyle';
import { DocsContainer, DocsPage } from '@storybook/addon-docs';

addDecorator((stories) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {stories()}
  </ThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'gray',
        value: '#F3F5FB',
      },
      {
        name: 'white',
        value: '#FFFFFF',
      },
      {
        name: 'black',
        value: '#000000',
      },
      {
        name: 'blue',
        value: '#2E48A0',
      },
    ],
  },
};

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
