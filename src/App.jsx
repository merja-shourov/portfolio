import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Loyout from './pages/Loyout'
import About from './pages/About'
import Works from "./pages/Works"
import Contacts from './pages/Contacts'
import Home from './pages/Home'


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <Loyout />} >
        <Route index element={<Home />}/>
        <Route path='about' element= {<About/> } />
        <Route path='works' element={ <Works /> }/>
        <Route path='contact' element={<Contacts />}/>
      </Route>
    )
  );
  return (
    <RouterProvider router={router} ></RouterProvider>
  )
}

export default App