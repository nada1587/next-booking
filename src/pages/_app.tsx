import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/styles/theme';
import GlobalStyle from 'src/styles/GlobalStyle';
import { Head } from 'src/components/common/Head';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Head />
        <Component {...pageProps} />
        <div id="root-modal" />
      </ThemeProvider>
    </>
  );
}

export default App;
