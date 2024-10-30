import React from 'react';
import { Routes, Route } from 'react-router-dom';

import QrCodeGenerator from './QrCodeGenerator'
import QrCodeScanner from './QrCodeScanner'
import Navigation from './Navigation';


export default function Layout() {
  return (
    <div>
     <Navigation />
      <Routes>
        <Route path='/generate' element={<QrCodeGenerator />} />
        <Route path='/scan' element={<QrCodeScanner />} />
        <Route />
      </Routes>
    </div>
  )
}
