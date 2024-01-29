import React from 'react'
import "./styles.css"
import { Link,NavLink } from 'react-router-dom'
import TemporaryDrawer from './drawer'
import Button from '../Button'
function Header() {
  return (
    <div className='navbar'>
        <h1 className='logo'>CryptoTracker<span style={{color:"var(--blue)"}}>.</span></h1>
        <div className='links'>
            <NavLink to="/">
                <p className='link'>Home</p>
            </NavLink>
            <NavLink to='/compare'>
                <p className='link'>Compare</p>
            </NavLink>
            <NavLink to="/watchlist">
                <p className='link'>Watchlist</p>
            </NavLink>
            <NavLink to="/dashboard">
                <Button text={"Dashboard"} outlined={true} onClick={()=>console.log("Btn clicked")}/>
            </NavLink> 
            
        </div>

        <div className='mobile-drawer'>
            <TemporaryDrawer/>
        </div>
    </div>
  )
}

export default Header