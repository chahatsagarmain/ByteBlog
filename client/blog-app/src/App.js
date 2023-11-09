import './App.css';
import Layout from './Components/Layout';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import { UserContext } from './context /UserContext';
import { useState } from 'react';
import CreatePost from './Components/CreatePost';
import Post from './Components/Post';
import MainPage from './Components/MainPage';


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
          element: <MainPage />
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
          path: "/createpost",
          element: <CreatePost />
        },
        {
          path: "/post/:id",
          element: <Post />
        }

      ]
    }
  ]
)

function App() {

  const [username, setUsername] = useState("");
  const [posts , setPosts] = useState([{}]);
  const [post , setPost] = useState(
    {
      title : "",
      summary : "",
      file : null,
      description : "",
    }
  )
  const [credential, setcredential] = useState([{
    email: "",
    password: "",
    username: "",
    confirmpassword: ""
  }]);

  const [isDark , setDark] = useState(false);


  return (
    <React.StrictMode>
      <UserContext.Provider value={{ credential, setcredential ,username, setUsername , post , setPost , isDark , setDark , posts , setPosts}}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </React.StrictMode>
  );
}

export default App;
