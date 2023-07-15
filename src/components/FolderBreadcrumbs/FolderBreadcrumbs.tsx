import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export const FolderBreadcrumbs = () => {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: '30px ' }}>
        <Link underline="hover" color="inherit" href="/">
          Dropbox
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>
    </div>
  );
};
