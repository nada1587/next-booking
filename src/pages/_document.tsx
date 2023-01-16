// ssr 방식에서 css 미리 적용
import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    // ssr을 통해 미리 prerender시 styled시트 생성
    const sheet = new ServerStyleSheet();

    const originalRenderPage = ctx.renderPage;

    try {
      // sheet을 사용해 정의된 모든 스타일을 수집(페이지 구성요소에서 스타일 검색)
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      // Documents의 initial props
      const initialProps = await Document.getInitialProps(ctx);

      // props와 styles를 <style>태그로 반환
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
