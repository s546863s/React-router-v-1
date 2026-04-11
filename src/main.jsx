import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainPage from './components/MainPage/MainPage.jsx';
import Users from './components/Users/Users.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetles from './components/PostDetles/PostDetles.jsx';


const router = createBrowserRouter([
 {
    Component: MainPage,
    children: [
      {index: true, Component: App},
      {path: 'about', Component: () => <h1>About</h1>},
      {path: 'contact', Component: () => <h1>Contact</h1>},
      {
        path:'users',


        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users
        
       
      },

      {
        path: 'posts',
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Posts></Posts>
      },
      {
        path: '/posts/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetles></PostDetles>
      }



    ]
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
