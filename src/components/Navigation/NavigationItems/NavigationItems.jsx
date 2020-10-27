import React from 'react'
import { NavLink } from 'react-router-dom'

import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import ClassIcon from '@material-ui/icons/Class';

import './NavigationItems.scss'

const NavigationItem = (props) => {
  return (
    <ListItem button className='NavigationItem'>
      <NavLink
        exact={props.exact}
        to={props.link}
        activeClassName='active'
      >
        <ListItemIcon>
          {props.icon}
        </ListItemIcon>
        <ListItemText primary={props.children}/>
      </NavLink>
    </ListItem>
  )
}

const navigationItems = (props) => {
  return (
    <List className=''>
      <NavigationItem link='/' exact icon={<DashboardIcon />}>Dashboard</NavigationItem>
      <NavigationItem link='/classes' icon={<ClassIcon />}>Classes</NavigationItem>
      <NavigationItem link='/sessions' icon={<AssignmentTurnedInIcon />}>Sessions</NavigationItem>
      <NavigationItem link='/students' icon={<PeopleIcon />}>Students</NavigationItem>
      <NavigationItem link='/reports' icon={<BarChartIcon />}>Reports</NavigationItem>
    </List>
  )
}

export default navigationItems
