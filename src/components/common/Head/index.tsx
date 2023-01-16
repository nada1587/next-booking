import React from 'react';
// 특정 페이지에서만 사용되는 경우 next/head 사용
import NextHead from 'next/head';

export const Head = () => {
  return (
    <NextHead>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </NextHead>
  );
};
