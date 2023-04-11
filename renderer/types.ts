import type {
  PageContextBuiltIn,
  PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient,
} from 'vite-plugin-ssr/types';

export type PageContextCustom = {
  readonly Page: React.FC
  readonly urlPathname: string
  readonly pageProps: {},
  readonly exports: {
    documentProps?: {
      title?: string
      description?: string
    }
  }
}

type PageContextServer = PageContextBuiltIn<React.FC> & PageContextCustom
type PageContextClient = PageContextBuiltInClient<React.FC> & PageContextCustom

type PageContext = PageContextClient | PageContextServer

export type { PageContextServer };
export type { PageContextClient };
export type { PageContext };
