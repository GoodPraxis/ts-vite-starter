import React from 'react';
import './code.scss';

export function Page() {
  return (
    <>
      <h1>About</h1>
      <p>
        Example of using
        {' '}
        <code>vite-plugin-ssr</code>
        .
      </p>
    </>
  );
}

export const documentProps = {
  title: 'About',
  description: 'About page',
};
