import {
  createContext,
  FC,
  useContext,
  useState,
} from 'react';
import * as React from 'react';

interface DropboxContextValue {
  isModalActive: boolean;
  errorMessage: string;
  isError: boolean;
  setIsModalActive: (modalStatus: boolean) => void;
  setErrorMessage: (errorMessage: string) => void;
  setIsError: (errorStatus: boolean) => void;
}

export const DropboxContext = createContext<DropboxContextValue>({
  isModalActive: false,
  errorMessage: '',
  isError: false,
  setIsModalActive: () => {},
  setIsError: () => {},
  setErrorMessage: () => {},
});

export const DropboxContextProvider: FC = ({ children }) => {
  const [isModalActive, setIsModalActive] = React.useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const contextValue: DropboxContextValue = {
    isModalActive,
    setIsModalActive,
    errorMessage,
    isError,
    setErrorMessage,
    setIsError,
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
