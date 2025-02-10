import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchExample from './componenti/ChiamateHttp/FetchExample'
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom'; 

import AsyncAwaitExample from './componenti/ChiamateHttp/AsyncAwaitExample'
import AxiosExample from './componenti/ChiamateHttp/AxiosExample'
import PostExample from './componenti/ChiamateHttp/PostExample'
import PostExampleAxios from './componenti/ChiamateHttp/PostExampleAxios'

function App() {
  

  return (
    <>
  <PostExampleAxios></PostExampleAxios>
      </>
  )
}

export default App
