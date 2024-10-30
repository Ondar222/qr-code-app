import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout'
import QrCodeGenerator from './QrCodeGenerator'
import QrCodeScanner from './QrCodeScanner'
import Navigation from './Navigation';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />
  },
  {
    path: "/generate",
    element: <QrCodeGenerator />,
  },
  {
    path: "/scan",
    element: <QrCodeScanner />,
  },
]);



createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </React.StrictMode>
);
