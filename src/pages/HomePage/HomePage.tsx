import React, {
  FC,
  useEffect,
  useState,
} from 'react';

import { useLocation } from 'react-router-dom';
import { FilesTable } from '../../components/FilesTable';
import { FolderBreadcrumbs } from '../../components/FolderBreadcrumbs';

import { FileErrorMessages } from '../../types/FileErrorMessages';
import { File } from '../../types/File';
import { ErrorAlert } from '../../components/ErrorAlert';
import { Toolbar } from '../../components/Toolbar';
// eslint-disable-next-line import/no-unresolved,import/extensions
import { Thumbnail } from '../../file.js';
import { useDropbox } from '../../providers/DropboxContext';

export const HomePage:FC = () => {
  const [filesToDelete, setFilesToDelete] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { pathname = '' } = useLocation();
  const hasFilesToDelete = filesToDelete.length > 0;

  const {
    setIsError,
    setErrorMessage,
    dropbox,
    files,
    setFiles,
    // setDeletedFiles,
  } = useDropbox();

  const getPath = () => {
    return pathname === '/' ? '' : pathname;
  };

  const loadFiles = async () => {
    try {
      setIsLoading(true);
      const dropboxResponse = await dropbox.filesListFolder({ path: getPath() });
      const filesList = dropboxResponse.result.entries as File[];
      const paths: Thumbnail[] = filesList.filter(file => file['.tag'] === 'file')
        .map(file => ({
          path: file.path_lower,
          format: 'jpeg',
          size: 'w32h32',
        }));

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
      setErrorMessage(FileErrorMessages.LOAD_FILES);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteFiles = async () => {
    try {
      await Promise.all(filesToDelete.map(path => (
        dropbox.filesDeleteV2({ path })
      )));
    } catch {
      setErrorMessage(FileErrorMessages.DELETE_FILES);
      setIsError(true);
    }

    setFilesToDelete([]);
    loadFiles();
  };

  useEffect(() => {
    loadFiles();
  }, [pathname]);

  return (
    <>
      <FolderBreadcrumbs />

      <Toolbar
        hasFilesToDelete={hasFilesToDelete}
        onDelete={deleteFiles}
      />

      <FilesTable
        filesToShow={files}
        filesToDelete={filesToDelete}
        onDelete={setFilesToDelete}
        isLoading={isLoading}
      />

      <ErrorAlert />
    </>
  );
};
