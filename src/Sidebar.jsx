import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar } from '@material-ui/core';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import './Sidebar.css';
import SidebarChat from './SidebarChat'
import { SearchOutlined } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar_header">
         <Avatar/>
         <div className="sidebar_headerRight">
             <IconButton>
             <DonutLargeIcon />
             </IconButton>
             <IconButton>
             <ChatIcon/>
             </IconButton>
             <IconButton>
             <MoreVertIcon/>
             </IconButton>
         </div>
        </div>

        <div className="sidebar_search">
            <div className="sidebar_searchContainer">
            <SearchOutlined/>
       <input placeholder="Search or start new chat" type="text"/>
            </div>
      
        </div>

        <div className="sidebar_chats">
           <SidebarChat  addNewChat/>
           <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
           
        </div>
       
        
        </div>
  )
}
