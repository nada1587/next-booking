import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/styles/theme';
import GlobalStyle from 'src/styles/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
