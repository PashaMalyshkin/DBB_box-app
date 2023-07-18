import {
  ChangeEvent,
  createContext,
  FC,
  useContext, useEffect,
  useState,
} from 'react';
import * as React from 'react';

import { Dropbox } from 'dropbox';
import { useLocation } from 'react-router-dom';
import { File } from '../types/File';
import { FileErrorMessages } from '../types/FileErrorMessages';
import { getBearerToken } from '../api/getToken';

interface DropboxContextValue {
  dropbox: Dropbox;
  isModalActive: boolean;
  isUploaderActive: boolean;
  errorMessage: string;
  isError: boolean;
  files: File[];
  setIsModalActive: (modalStatus: boolean) => void;
  setErrorMessage: (errorMessage: string) => void;
  setIsError: (errorStatus: boolean) => void;
  setFiles: (files: File[]) => void;
  uploadFile: (event: ChangeEvent<HTMLInputElement>) => void;
  loadToken: () => void;
}

export const DropboxContext = createContext<DropboxContextValue>({
  dropbox: new Dropbox(),
  isModalActive: false,
  isUploaderActive: false,
  errorMessage: '',
  isError: false,
  files: [],
  setFiles: () => {},
  setIsModalActive: () => {},
  setIsError: () => {},
  setErrorMessage: () => {},
  uploadFile: () => {},
  loadToken: () => {},
});

export const DropboxContextProvider: FC = ({ children }) => {
  const [isModalActive, setIsModalActive] = React.useState(false);
  const [isUploaderActive, setIsUploaderActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const { pathname } = useLocation();

  const loadToken = async () => {
    const searchParams = new URLSearchParams(window.location.search);

    const codeParam = searchParams.get('code');

    if (codeParam) {
      const response = await getBearerToken(codeParam);

      sessionStorage.setItem('accessToken', response.access_token);
    }

    searchParams.delete('code');
  };

  const dropbox = new Dropbox({
    accessToken: sessionStorage.getItem('accessToken') || '',
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

  useEffect(() => {
    if (!sessionStorage.getItem('accessToken')) {
      loadToken();
    }
  }, []);

  useEffect(() => {
    if (files.length === 0) {
      setIsUploaderActive(true);
    } else {
      setIsUploaderActive(false);
    }
  }, [files]);

  const contextValue: DropboxContextValue = {
    dropbox,
    errorMessage,
    isError,
    isModalActive,
    isUploaderActive,
    files,
    setFiles,
    setErrorMessage,
    setIsError,
    setIsModalActive,
    uploadFile,
    loadToken,
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
