import React, { FC } from 'react';
import { DropboxContextProvider } from './DropboxContext';

export const Provider: FC = ({ children }) => {
  return (
    <DropboxContextProvider>
      {children}
    </DropboxContextProvider>
  );
};
