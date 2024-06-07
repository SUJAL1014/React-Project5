import React from 'react'
import { BrowserRouter as GrandParent, Routes as Parent, Route as Child, } from 'react-router-dom'
import Home from './Page/Home'
import Login from './Page/Login'
import Register from './Page/Register'
import NotFound from './Page/NotFound'

export default function App() {
  return (
     <GrandParent>
          <Parent>
                <Child path='/' element={<Home/>}></Child>
                <Child path='/login'  element={<Login/>}></Child>
                <Child path='/register'  element={<Register/>}></Child>
                <Child path='*' element={<NotFound/>}></Child>
          </Parent>
     </GrandParent>
  )
}