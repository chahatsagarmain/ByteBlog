import './App.css';
import Layout from './Components/Layout';
import React from 'react';
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import Card from './Components/Card';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';

const cards = [<Card /> , <Card />];

const router = createBrowserRouter(
  [
    {
      path : "/",
      element : <Layout />,
      errorElement : <div><h1>Error 404 not found</h1></div>,
      children : [
        {
          //used for nested routes , This is replacing the outlet with cards component
          path : "/",
          element : cards
        },
        {
          path : "/login",
          element : <LoginPage />
        },

        {
          path : "/register",
          element : <RegisterPage />
        }

      ]
    }
  ]
)

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
