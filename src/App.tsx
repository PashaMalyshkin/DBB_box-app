import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageList } from './components/PageList';
import { CreateFolderModal } from './components/CreateFolderModal';
import { HomePage } from './pages/HomePage';
import { PhotosPage } from './pages/PhotosPage';

export const App: FC = () => {
  return (
    <>
      <PageList />

      <div className="container">
        <HomePage />
        <Routes>
          <Route path="/photos" element={<PhotosPage />} />
        </Routes>

        <CreateFolderModal />
      </div>
    </>
  );
};
