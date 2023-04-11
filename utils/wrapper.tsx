import React from 'react';

export function createSimpleWrapper<T extends React.ReactNode>(
  className: string,
) : React.FC<{ children: T }> {
  return function Wrapper({ children }: { children: T }) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  };
}
