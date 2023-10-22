import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { AppContextProvider } from './shared/components/context/AppContext';
import './tailwind.css'
import Routes from './shared/routes/routes';
import Register from './shared/pages/register/Register';

function App() {
  return (

      <AppContextProvider>
      <RouterProvider router={Routes} />
      
      </AppContextProvider>

  );
}

export default App;
