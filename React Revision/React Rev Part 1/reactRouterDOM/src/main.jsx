import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/AboutUs.jsx'
import Contact from './components/ContactUs.jsx'
import User from './components/User.jsx'
import Github from './components/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user/:id" element={<User />} />
        <Route path="github" element={<Github />} />
    </Route>
    // correct syntax for path params - user/:id ( jo :__ underscore mein likha hona chaiye jo us component mein le rhe ho input)
    // loader as well 
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
