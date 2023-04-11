import React from 'react';
import logo from './logo.svg';
import { PageContextProvider } from './PageContext';
import type { PageContext } from './types';
import { createSimpleWrapper } from '../utils/wrapper';
import './PageShell.scss';

interface PageShellProps {
  children: React.ReactNode;
  pageContext: PageContext;
}

const Layout = createSimpleWrapper('layout');
const Sidebar = createSimpleWrapper('sidebar');
const Content = createSimpleWrapper('content');

function Logo() {
  return (
    <div className="logo">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
    </div>
  );
}

function PageShell({ children, pageContext }: PageShellProps) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          <Sidebar>
            <Logo />
            <a className="navitem" href="/">
              Home
            </a>
            <a className="navitem" href="/about">
              About
            </a>
          </Sidebar>
          <Content>{children}</Content>
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  );
}

export default PageShell;
