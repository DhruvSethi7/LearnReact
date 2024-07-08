import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './layout';
import About from './components/About/about';
import Home from './components/Home/home';
import Contact from './components/Contact/contact';
import Github, { githubloader } from './components/Github/github';
import User from './components/User/user';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {path:"",
      element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        loader:githubloader,
        path:"github",
        element:<Github/>
      },
      {
        path:"user/:input",
        element:<User/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
