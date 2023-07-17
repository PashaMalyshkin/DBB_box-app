import React, { FC } from 'react';
import { PageList } from './components/PageList';
import { CreateFolderModal } from './components/CreateFolderModal';
import { HomePage } from './pages/HomePage';

export const App: FC = () => {
  return (
    <>
      <PageList />

      <div className="container">
        <HomePage />

        <CreateFolderModal />
      </div>
    </>
  );
};
