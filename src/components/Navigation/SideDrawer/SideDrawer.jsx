import React from 'react'

// import logo from '../../../assets/images/burger-logo.png'
import NavigationItems from '../NavigationItems/NavigationItems'
import './SideDrawer.scss'

const SideDrawer = () => {
  return (
    <div className="SideDrawer Open">
      {/* <img src={logo} className={classes.DrawerLogo} alt="logo" /> */}
      <nav>
        <NavigationItems />
      </nav>
    </div>
  )
}

export default SideDrawer
