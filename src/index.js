import React from 'react';
import ReactDOM from 'react-dom';

import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContextProvider } from './context/AuthContext';
import Layout from './components/layout/Layout'

document.title ='e-HMS' 

 ReactDOM.render(
  <React.StrictMode>
    
    <AuthContextProvider>
        <Layout />
    </AuthContextProvider> 
    
  </React.StrictMode>,
  document.getElementById('root')
);



