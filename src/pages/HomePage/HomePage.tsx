import React, {
  FC,
  useEffect,
  useState,
} from 'react';

import { Dropbox } from 'dropbox';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import ThumbnailArg from 'files';

import { useLocation } from 'react-router-dom';
import { Header } from '../../components/Header';
import { FilesTable } from '../../components/FilesTable';
import { FolderBreadcrumbs } from '../../components/FolderBreadcrumbs';

import { FileErrorMessages } from '../../types/FileErrorMessages';
import { File } from '../../types/File';

export const HomePage:FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { pathname = '' } = useLocation();
  const token = process.env.REACT_APP_ACCESS_TOKEN;

  const dropbox = new Dropbox({
    accessToken: token,
  });
  const getPath = () => {
    return pathname === '/' ? '' : pathname;
  };

  const loadFiles = async () => {
    try {
      setIsLoading(true);
      const dropboxResponse = await dropbox.filesListFolder({ path: getPath() });
      const filesList = dropboxResponse.result.entries as File[];
      const paths = filesList.filter(file => file['.tag'] === 'file')
        .map(file => ({
          path: file.path_lower,
          format: 'jpeg',
          size: 'w32h32',
        })) as unknown as ThumbnailArg[];

      const thumbnails = await dropbox.filesGetThumbnailBatch({
        entries: paths,
      });

      thumbnails.result.entries.forEach(file => {
        if ('metadata' in file) {
          const indexToUpdate = filesList.findIndex(currentFile => (
            file.metadata.path_lower === currentFile.path_lower
          ));

          filesList[indexToUpdate] = {
            ...filesList[indexToUpdate],
            thumbnail: file.thumbnail,
          };
        }
      });

      setFiles(filesList);
    } catch {
      throw new Error(FileErrorMessages.LOAD_FILES);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadFiles();
  }, [pathname]);

  return (
    <>
      <Header />
      <div className="container">
        <FolderBreadcrumbs />
        <FilesTable
          filesToShow={files}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};
