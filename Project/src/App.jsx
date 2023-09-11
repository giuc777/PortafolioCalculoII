import { useState } from 'react'

import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Page from './componets/PageTopic'


import Home from './componets/Home'
function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/tema/:numero' Component={Page}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
