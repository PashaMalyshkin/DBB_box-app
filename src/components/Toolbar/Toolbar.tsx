import React, { FC } from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { BsFolderPlus } from 'react-icons/bs';
import Typography from '@mui/material/Typography';
import { useDropbox } from '../../providers/DropboxContext';

interface Props {
  onDelete: () => void;
  hasFilesToDelete: boolean;
}

export const Toolbar: FC<Props> = ({
  onDelete,
  hasFilesToDelete,
}) => {
  const { setIsModalActive, uploadFile } = useDropbox();
  const handleOpen = () => setIsModalActive(true);

  return (
    <div className="toolbar">
      <Button
        variant="contained"
        onClick={onDelete}
      >
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */}
        <label
          htmlFor="file"
          className="toolbar__label"
        >
          Upload
        </label>
        <input
          id="file"
          className="toolbar__input-file"
          type="file"
          onChange={uploadFile}
        />

      </Button>

      <Button
        variant="contained"
        onClick={handleOpen}
      >
        <BsFolderPlus size={20} />
        <Typography sx={{ fontSize: '0.875rem', marginLeft: '10px' }}>
          Create Folder
        </Typography>
      </Button>

      {hasFilesToDelete && (
        <Button
          variant="outlined"
          onClick={onDelete}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      )}
    </div>
  );
};
