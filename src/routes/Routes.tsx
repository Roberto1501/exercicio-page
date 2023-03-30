/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Photos from '../pages/photos';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/photos" element={<Photos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
