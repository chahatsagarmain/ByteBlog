import './App.css';
import Layout from './Components/Layout';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Card from './Components/Card';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import { UserContext } from './context /UserContext';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import CreatePost from './Components/CreatePost';

const cards = [<Card />, <Card />];

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <div><h1>Error 404 not found</h1></div>,
      children: [
        {
          //used for nested routes , This is replacing the outlet with cards component
          path: "/",
          element: cards
        },
        {
          path: "/login",
          element: <LoginPage />
        },

        {
          path: "/register",
          element: <RegisterPage />
        },
        {
          path: "/post",
          element: <CreatePost />
        }

      ]
    }
  ]
)

function App() {

  const [username, setUsername] = useState("");
  const [post , setPost] = useState(
    {
      title : "",
      summary : "",
      image : "",
      description : ""
    }
  )
  const [credential, setcredential] = useState([{
    email: "",
    password: "",
    username: "",
    confirmpassword: ""
  }]);


  return (
    <React.StrictMode>
      <UserContext.Provider value={{ credential, setcredential ,username, setUsername , post , setPost}}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </React.StrictMode>
  );
}

export default App;
