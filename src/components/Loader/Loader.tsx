import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Loader = () => {
  return (
    <div className="loader">
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </div>
  );
};
