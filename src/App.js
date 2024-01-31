import React from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import DashboardPage from './pages/Dashboard'
import WatchlistPage from './pages/Watchlist'
import CoinPage from './pages/CoinPage'
import Compare from './pages/Compare'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  
  return (
    <div className='app' data-theme="light">
      <ToastContainer/>
      <Router>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/dashboard'element={<DashboardPage/>}/>
          <Route path='/coin/:id' element={<CoinPage/>}/>
          <Route path='/compare' element={<Compare/>}/>
          <Route path='/watchlist' element={<WatchlistPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

