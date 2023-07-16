import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';

export const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
};
