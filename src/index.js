import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './styles/global.css';

import Layout from './Layout';

ReactDOM.createRoot(document.querySelector('#root')).render(<Layout />);