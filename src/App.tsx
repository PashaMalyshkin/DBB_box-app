import React, {
  FC,
  useEffect,
  useState,
} from 'react';

import { Dropbox } from 'dropbox';
// eslint-disable-next-line import/no-unresolved,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import ThumbnailArg from 'files';

import { Header } from './components/Header';
import { FilesTable } from './components/FilesTable';
import { FolderBreadcrumbs } from './components/FolderBreadcrumbs';

import { FileErrorMessages } from './types/FileErrorMessages';
import { File } from './types/File';

export const App: FC = () => {
  const [filesToShow, setFiles] = useState<File[]>([]);
  const [path, setPath] = useState('');
  const token = process.env.REACT_APP_ACCESS_TOKEN;

  const dropbox = new Dropbox({
    accessToken: token,
  });

  const loadFiles = async () => {
    const dropboxResponse = await dropbox.filesListFolder({ path });
    const filesList = dropboxResponse.result.entries as File[];

    const paths = filesList.filter(file => file['.tag'] === 'file')
      .map(file => ({
        path: file.path_lower,
        format: 'jpeg',
        size: 'w32h32',
      })) as unknown as ThumbnailArg[];

    try {
      const thumbnails = await dropbox.filesGetThumbnailBatch({
        entries: paths,
      });

      thumbnails.result.entries.forEach(file => {
        if ('metadata' in file) {
          const indexToUpdate = filesList.findIndex(stateFile => (
            file.metadata.path_lower === stateFile.path_lower
          ));

          filesList[indexToUpdate] = {
            ...filesList[indexToUpdate],
            thumbnail: file.thumbnail,
          };
        }
      });

      setFiles(filesList);
    } catch {
      throw new Error(FileErrorMessages.LOAD_THUMBNAILS);
    }
  };

  useEffect(() => {
    loadFiles();
  }, [path]);

  return (
    <>
      <Header />
      <div className="container">
        <FolderBreadcrumbs />
        <FilesTable
          filesToShow={filesToShow}
          onChangePath={setPath}
        />
      </div>
    </>
  );
};
