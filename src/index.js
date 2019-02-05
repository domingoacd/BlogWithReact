import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import AppRoutes from './Routes';

import './index.css';

ReactDOM.render(
    <Router>
        <AppRoutes />
    </Router>,
    document.getElementById('root')
);

