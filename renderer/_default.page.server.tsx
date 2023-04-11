import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import PageShell from './PageShell';
import logoUrl from './logo.svg';
import { DEFAULT_TITLE, DEFAULT_DESCRIPTION, MAIN_CONTAINER_ID } from '../constants';
import type { PageContextServer } from './types';

export const passToClient = ['pageProps'];

async function render(pageContext: PageContextServer) {
  const { Page, pageProps, exports: { documentProps } } = pageContext;
  if (!Page) {
    throw new Error('render() hook expects pageContext.Page to be defined');
  }
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>,
  );

  const title = documentProps?.title || DEFAULT_TITLE;
  const desc = documentProps?.description || DEFAULT_DESCRIPTION;

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="${MAIN_CONTAINER_ID}">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
  };
}

export { render };
