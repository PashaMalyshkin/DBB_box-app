import React from 'react';
import { BsCloudUpload } from 'react-icons/bs';
import { useDropbox } from '../../providers/DropboxContext';

export const Uploader = () => {
  const { uploadFile } = useDropbox();

  return (
    <div className="uploader">
      <form
        className="uploader__form"
      >
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */}
        <label
          htmlFor="uploader"
          className="uploader__label"
        >
          <BsCloudUpload color="#1475cf" size={60} />
        </label>
        <input
          id="uploader"
          name="uploader"
          type="file"
          onChange={uploadFile}
          className="uploader__input"
        />
      </form>
    </div>
  );
};
