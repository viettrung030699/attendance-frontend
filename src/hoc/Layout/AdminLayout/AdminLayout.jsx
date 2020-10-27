import React from 'react'

import Navbar from '../../../components/Navigation/Navbar/Navbar'
import SideDrawer from '../../../components/Navigation/SideDrawer/SideDrawer'

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <main
        style={{
          display: "flex",
          margin: "auto -1rem 1rem"
        }}
      >
        <SideDrawer />
        {props.children}
      </main>
    </div>
  )
}

export default Layout