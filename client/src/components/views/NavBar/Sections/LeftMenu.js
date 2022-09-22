import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';


function LeftMenu(props) {
  return (
    <Menu style={{background:"#ffffff00"}} mode={props.mode}>
    <Menu.Item key="mail">
      <NavLink style={{color:'red'}} to="/">Home</NavLink>
    </Menu.Item>
    <Menu.Item key="subscription">
      <NavLink  style={{color:'red'}} to="/subscription">Subscription</NavLink>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu