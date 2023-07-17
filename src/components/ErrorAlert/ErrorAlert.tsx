import * as React from 'react';
import Alert from '@mui/material/Alert';
import { FC } from 'react';
import { Snackbar } from '@mui/material';
import { useDropbox } from '../../providers/DropboxContext';

export const ErrorAlert: FC = () => {
  const { isError, setIsError, errorMessage } = useDropbox();
  const handleClose = () => setIsError(false);

  return (
    <Snackbar
      open={isError}
      onClose={handleClose}
      autoHideDuration={6000}
    >
      <Alert severity="error">{errorMessage}</Alert>
    </Snackbar>
  );
};
