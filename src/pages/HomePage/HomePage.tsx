import React, {
  ChangeEvent,
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
import { dropbox } from '../../utils/createDropbox';
// eslint-disable-next-line import/no-unresolved,import/extensions
import { Thumbnail } from '../../file.js';
import { useDropbox } from '../../providers/DropboxContext';

export const HomePage:FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [filesToDelete, setFilesToDelete] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { setIsError, setErrorMessage } = useDropbox();
  const { pathname = '' } = useLocation();
  const hasFilesToDelete = filesToDelete.length > 0;

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
    loadFiles();
  }, [pathname]);

  return (
    <>
      <FolderBreadcrumbs />

      <Toolbar
        hasFilesToDelete={hasFilesToDelete}
        onDelete={deleteFiles}
        onAdd={uploadFile}
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
