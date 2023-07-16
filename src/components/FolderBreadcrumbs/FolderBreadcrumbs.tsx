import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useLocation, useNavigate } from 'react-router-dom';
import { CSSProperties, useEffect, useState } from 'react';

export const FolderBreadcrumbs = () => {
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const pathnameToBreadcrumbs = pathname
      .split('/')
      .filter(breadcrumb => breadcrumb);

    setBreadcrumbs(pathnameToBreadcrumbs);
  }, [pathname]);

  const getActiveBreadcrumb = (index = -1) => {
    const breadcrumbActiveStyles = {
      color: '#736c64',
      pointerEvents: 'auto',
    } as CSSProperties;

    if (index === breadcrumbs.length - 1 || pathname === '/') {
      breadcrumbActiveStyles.color = '#000';
      breadcrumbActiveStyles.pointerEvents = 'none';
    }

    return breadcrumbActiveStyles;
  };

  const handleClick = (path: string) => {
    const indexToSlice = breadcrumbs.findIndex(breadcrumb => (
      breadcrumb === path
    ));

    const updatedPath = breadcrumbs
      .slice(0, indexToSlice + 1)
      .join('/');

    navigate(updatedPath);
  };

  return (
    <div
      role="presentation"
      className="breadcrumbs"
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          href="/"
          underline="none"
          color="inherit"
          style={getActiveBreadcrumb()}
        >
          Dropbox
        </Link>

        {breadcrumbs.map((path, index) => (
          <button
            key={path}
            type="button"
            className="breadcrumbs__button"
            onClick={() => handleClick(path)}
            style={getActiveBreadcrumb(index)}
          >
            {path}
          </button>
        ))}
      </Breadcrumbs>
    </div>
  );
};
