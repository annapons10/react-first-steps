// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
/* import { BrowserRouter } from 'react-router-dom'; // Para el enrutamiento <BrowserRouter>  Usamos BrowserRouter para manejar el enrutamiento */
import { App } from './App.jsx'; // Importamos el componente App

// Definir un tema personalizado para Chakra UI (SI LO REQUIERE).

// Aquí se renderiza la aplicación envolviéndola con ChakraProvider y BrowserRouter
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <ChakraProvider > {/* Proveemos el tema a ChakraProvider */}
        <App /> {/* Componente principal de la aplicación */}
      </ChakraProvider>
  </React.StrictMode>
);
