import * as React from 'react';
import Alert from '@mui/material/Alert';
import { FC } from 'react';
import { Snackbar } from '@mui/material';

interface Props {
  text: string;
  isOpen: boolean,
  handleClose: () => void;
}

export const ErrorAlert: FC<Props> = ({
  text,
  isOpen,
  handleClose,
}) => {
  return (
    <Snackbar
      open={isOpen}
      onClose={handleClose}
      autoHideDuration={6000}
    >
      <Alert severity="error">{text}</Alert>
    </Snackbar>
  );
};
