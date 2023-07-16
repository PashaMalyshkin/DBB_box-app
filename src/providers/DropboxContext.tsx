import { createContext, FC, useContext } from 'react';
import * as React from 'react';

interface DropboxContextValue {
  isModalActive: boolean,
  setIsModalActive: (value: boolean) => void;
}

export const DropboxContext = createContext<DropboxContextValue>({
  isModalActive: false,
  setIsModalActive: () => {},
});

export const DropboxContextProvider: FC = ({ children }) => {
  const [isModalActive, setIsModalActive] = React.useState(false);

  const contextValue: DropboxContextValue = {
    isModalActive,
    setIsModalActive,
  };

  return (
    <DropboxContext.Provider value={contextValue}>
      {children}
    </DropboxContext.Provider>
  );
};

export const useDropbox = () => {
  const context = useContext(DropboxContext);

  if (!context) {
    throw new Error(
      'useDropbox must be used within a DropboxContextValue',
    );
  }

  return context;
};
