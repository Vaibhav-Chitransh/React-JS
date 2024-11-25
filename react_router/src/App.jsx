import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import './App.css';

const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <AppLayout />,
            children: [
                {
                    path: '/',
                    element: <h1>Home Page</h1>
                },
                {
                    path: '/about',
                    element: <h1>About Page</h1>
                },
                {
                    path: '/contact',
                    element: <h1>Contact Page</h1>
                },
                {
                    path: '/movie',
                    element: <h1>Movie Page</h1>
                }
            ]
        }
    ])

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
