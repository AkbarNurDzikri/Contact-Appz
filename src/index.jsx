import React from 'react';
import ReactDom from 'react-dom/client';
import ContactApp from './components/ContactApp';

// mengimport berkas css sebagai module
import './styles/style.css';

const element = <h1>Hello, world !</h1>

ReactDom.createRoot(document.getElementById("root")).render(<ContactApp />);