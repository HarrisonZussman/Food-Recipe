//rfec (tab)
import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'

function pages() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default pages