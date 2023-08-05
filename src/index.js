import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById("root"))
