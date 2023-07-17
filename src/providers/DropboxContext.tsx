import {
  ChangeEvent,
  createContext,
  FC,
  useContext,
  useState,
} from 'react';
import * as React from 'react';

import { Dropbox } from 'dropbox';
import { useLocation } from 'react-router-dom';
import { File } from '../types/File';
import { FileErrorMessages } from '../types/FileErrorMessages';

interface DropboxContextValue {
  dropbox: Dropbox;
  isModalActive: boolean;
  errorMessage: string;
  isError: boolean;
  files: File[];
  setIsModalActive: (modalStatus: boolean) => void;
  setErrorMessage: (errorMessage: string) => void;
  setIsError: (errorStatus: boolean) => void;
  setFiles: (files: File[]) => void;
  uploadFile: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const DropboxContext = createContext<DropboxContextValue>({
  dropbox: new Dropbox(),
  isModalActive: false,
  errorMessage: '',
  isError: false,
  files: [],
  setFiles: () => {},
  setIsModalActive: () => {},
  setIsError: () => {},
  setErrorMessage: () => {},
  uploadFile: () => {},
});

export const DropboxContextProvider: FC = ({ children }) => {
  const [isModalActive, setIsModalActive] = React.useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const { pathname } = useLocation();

  const token = process.env.REACT_APP_ACCESS_TOKEN;

  const dropbox = new Dropbox({
    accessToken: token,
  });

  const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const filePath = pathname === '/'
      ? `${pathname}${file.name}`
      : `${pathname}/${file.name}`;

    try {
      await dropbox.filesUpload({
        path: filePath,
        contents: file,
        autorename: true,
      });
    } catch {
      setErrorMessage(FileErrorMessages.UPLOAD_FILE);
      setIsError(true);
    }

    window.location.reload();
  };

  const contextValue: DropboxContextValue = {
    dropbox,
    errorMessage,
    isError,
    isModalActive,
    files,
    setFiles,
    setErrorMessage,
    setIsError,
    setIsModalActive,
    uploadFile,
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
