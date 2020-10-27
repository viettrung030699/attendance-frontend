import React from 'react'

import logo from '../../../assets/images/logo.svg'
import './Navbar.scss'

const Navbar = (props) => {
  return (
    <header className={"ToolbarHeader"}>
      <div className={"DrawerToggle"} onClick={props.toggleSideDrawer}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <img src={logo} className={"ToolbarLogo"} alt="logo" />
      <h3>Quiz Dance</h3>
    </header>
  )
}

export default Navbar
