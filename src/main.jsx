import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import routes from './routes/Routes';
import Authprovider from './provider/Authprovider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={routes} />
    </Authprovider>
  </React.StrictMode>,
)
