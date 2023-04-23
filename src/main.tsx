import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  ChakraProvider,
  ColorModeScript,
  theme as darkmode,
} from '@chakra-ui/react';
import theme from '@/utils/theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={darkmode.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
