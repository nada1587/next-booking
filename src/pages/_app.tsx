import type { AppContext, AppInitialProps, AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import wrapper from '@store/index';
import { theme } from '@styles/theme';
import GlobalStyle from '@styles/GlobalStyle';
import { Head } from '@components/common/Head';
import { ThemeProvider } from 'styled-components';

function App({ Component, ...rest }: AppProps) {
  // next-redux-wrapper 버전업에 따른 useWrapperedStore 사용
  const { store, props } = wrapper.useWrappedStore(rest);

  // react-query 설정
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {process.env.NODE_ENV !== 'production' ? (
        <ReactQueryDevtools initialIsOpen={false} />
      ) : null}
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Head />
          <Component {...props.pageProps} />
          <div id="root-modal" />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
}

App.getInitialProps = async ({
  Component,
  ctx,
}: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

/* 
wrapper 로 App 컴포넌트를 감싸주면 브라우저의 redux 상태 동기화는 물론, Provider store 까지 알아서 주입해줌
*/
export default App;
