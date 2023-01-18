import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import wrapper from '@store/index';
import { theme } from '@styles/theme';
import GlobalStyle from '@styles/GlobalStyle';
import { Head } from '@components/common/Head';
import { ThemeProvider } from 'styled-components';

function App({ Component, ...rest }: AppProps) {
  // next-redux-wrapper 버전업에 따른 useWrapperedStore 사용
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Head />
        <Component {...props.pageProps} />
        <div id="root-modal" />
      </ThemeProvider>
    </Provider>
  );
}

/* 
wrapper 로 App 컴포넌트를 감싸주면 브라우저의 redux 상태 동기화는 물론, Provider store 까지 알아서 주입해줌
*/
export default App;
