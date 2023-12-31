import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import RouteController from './routeController.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteController/>
  </React.StrictMode>
);


