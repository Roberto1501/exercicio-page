/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Photos from '../pages/photos';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
