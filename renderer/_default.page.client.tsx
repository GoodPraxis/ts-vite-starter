import React from 'react';
import { hydrateRoot, createRoot, Root } from 'react-dom/client';
import PageShell from './PageShell';
import { DEFAULT_TITLE, MAIN_CONTAINER_ID } from '../constants';
import type { PageContextClient } from './types';

export const clientRouting = true;
export const hydrationCanBeAborted = true;

let root: Root;
async function render(pageContext: PageContextClient) {
  const { Page, pageProps, exports } = pageContext;
  if (!Page) {
    throw new Error('Client-side render() hook expects pageContext.Page to be defined');
  }
  const page = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  const container = document.getElementById(MAIN_CONTAINER_ID)!;

  if (pageContext.isHydration) {
    root = hydrateRoot(container, page);
  } else {
    if (!root) {
      root = createRoot(container);
    }
    root.render(page);
  }

  document.title = exports.documentProps?.title || DEFAULT_TITLE;
}

export { render };
