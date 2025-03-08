import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <div className='max-w-screen-xl overflow-hidden mx-auto'>
        <RouterProvider router={router} />
      </div>
      </AuthProvider>
  </React.StrictMode>
)
