import {
  ChakraProvider,
  ColorModeScript,
  theme as darkmode,
} from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { SWRConfig } from 'swr';

import App from './App';
import './index.css';
import AxiosInstance from './utils/axiosInstance';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <SWRConfig
        value={{
          fetcher: (url) => AxiosInstance.get(url).then((res) => res.data),
        }}
      >
        <ColorModeScript initialColorMode={darkmode.config.initialColorMode} />
        <App />
      </SWRConfig>
    </ChakraProvider>
  </React.StrictMode>
);
