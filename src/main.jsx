import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import routes from './routes/Routes';
import Authprovider from './provider/Authprovider';
import ScrollToTop from "react-scroll-to-top";
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Authprovider>
          <RouterProvider router={routes} />
        </Authprovider>
      </HelmetProvider>
      <ScrollToTop smooth width='20px' height='20px' color='#ffffff' style={{ backgroundColor: '#FA2371', padding: '11px 10px' }} />
    </QueryClientProvider>
  </React.StrictMode>,
)
