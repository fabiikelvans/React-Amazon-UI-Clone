import { GridView, HelpOutlined, Logout, Percent } from '@mui/icons-material'
import React from 'react'
import Categories from './Categories'
import SidebarLink from './SidebarLink'

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarLink active Icon={GridView} title={'Categories'}/>
        <Categories/>
        
        <SidebarLink Icon={Percent} title={'Sell on Amazon'}/>
        <SidebarLink Icon={HelpOutlined} title={'Help'}/>
        <br/>
        <SidebarLink Icon={Logout} title={'Log Out'}/>
    </div>
  )
}

export default Sidebar