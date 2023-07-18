import React, { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Checkbox } from '@mui/material';
import { FolderIcon } from '../FolderIcon';
import { Loader } from '../Loader';

import { File } from '../../types/File';
import { formatDate } from '../../utils/formatDate';
import { parseThumbnail } from '../../utils/parseThumbnail';
import { Uploader } from '../Uploader';
import { useDropbox } from '../../providers/DropboxContext';

interface Props {
  filesToShow: File[];
  filesToDelete: string[],
  onDelete: (paths: string[]) => void;
  isLoading: boolean;
}

export const FilesTable: FC<Props> = ({
  filesToShow,
  isLoading,
  filesToDelete,
  onDelete,
}) => {
  const checkIsFolder = (fileTag: string) => fileTag === 'folder';
  const { pathname } = useLocation();
  const { isUploaderActive } = useDropbox();
  const navigate = useNavigate();

  const handleChangePath = (fileTag: string, path = '') => {
    if (checkIsFolder(fileTag)) {
      navigate(path);
    }
  };

  const handleDeleteFiles = (path: string) => {
    if (filesToDelete.includes(path)) {
      const filteredFiles = filesToDelete.filter(filePath => filePath !== path);

      onDelete(filteredFiles);
    } else {
      onDelete([...filesToDelete, path]);
    }
  };

  useEffect(() => {
    onDelete([]);
  }, [pathname]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {isUploaderActive ? (
            <Uploader />
          ) : (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Files</TableCell>
                    <TableCell align="right">Modified</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filesToShow.map(file => (
                    <TableRow key={file.id}>
                      <TableCell
                        component="th"
                        scope="row"
                      >
                        <div className="files-table__cell-content">
                          <Checkbox
                            onChange={() => handleDeleteFiles(file.path_display)}
                            inputProps={{ 'aria-label': 'controlled' }}
                          />
                          <div className="files-table__cell-image">
                            {!file.thumbnail ? (
                              <FolderIcon />
                            ) : (
                              <img src={parseThumbnail(file.thumbnail)} alt={file.name} />
                            )}
                          </div>

                          <button
                            className="files-table__button"
                            type="button"
                            onClick={() => handleChangePath(file['.tag'], file.path_lower)}
                          >
                            {file.name}
                          </button>
                        </div>
                      </TableCell>

                      <TableCell align="right">
                        {file.client_modified && (
                          formatDate(new Date(file.client_modified))
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </>
      )}
    </>
  );
};
