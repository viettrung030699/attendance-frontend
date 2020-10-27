import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'

// import logo from '../../../assets/images/burger-logo.png'
import NavigationItems from '../NavigationItems/NavigationItems'
import './SideDrawer.scss'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }
}))

const SideDrawer = (props) => {
  const classes = useStyles();
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
      open
    >
      <NavigationItems />
    </Drawer>
  )
}

export default SideDrawer
