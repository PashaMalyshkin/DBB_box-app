import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Button, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { FormEvent, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDropbox } from '../../providers/DropboxContext';
import { dropbox } from '../../utils/createDropbox';
import { FileErrorMessages } from '../../types/FileErrorMessages';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 300,
  maxWidth: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const CreateFolderModal = () => {
  const [folderName, setFolderName] = useState('');
  const {
    isModalActive,
    setIsModalActive,
    setErrorMessage,
    setIsError,
  } = useDropbox();
  const { pathname } = useLocation();

  const handleClose = () => setIsModalActive(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const folderPath = pathname === '/'
      ? `${pathname}${folderName}`
      : `${pathname}/${folderName}`;

    try {
      await dropbox.filesCreateFolderV2({
        path: folderPath,
        autorename: true,
      });
    } catch {
      setErrorMessage(FileErrorMessages.CREATE_FOLDER);
      setIsError(true);
    }

    window.location.reload();
  };

  return (
    <div>
      <Modal
        className="modal"
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isModalActive}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isModalActive}>
          <Box sx={style}>
            <Typography sx={{ marginBottom: '16px ' }}>Create Folder</Typography>
            <form
              className="modal__form"
              onSubmit={handleSubmit}
            >
              <TextField
                id="outlined-basic"
                label="Folder Name"
                variant="outlined"
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                className="modal__button"
              >
                Create
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
