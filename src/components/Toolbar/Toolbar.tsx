import React, { ChangeEvent, FC } from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDropbox } from '../../providers/DropboxContext';

interface Props {
  onDelete: () => void;
  hasFilesToDelete: boolean;
  onAdd: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
}

export const Toolbar: FC<Props> = ({
  onDelete,
  hasFilesToDelete,
  onAdd,
}) => {
  const { setIsModalActive } = useDropbox();
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
          onChange={onAdd}
        />

      </Button>

      <Button
        variant="contained"
        onClick={handleOpen}
      >
        Create Folder
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
