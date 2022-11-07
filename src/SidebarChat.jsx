import { Avatar } from '@mui/material'
import React, { useState,useEffect } from 'react'
import './SidebarChat.css'
const SidebarChat = ({addNewChat}) => {
    const [seed,setSeed]=useState('')
    
    const [seriesroom,setSeriesroom]=useState([])
    useEffect(() => {
      setSeed(Math.floor(Math.random()*5000));
    
     
    }, [])
    
   
    const createChat=()=>{
    const roomname=prompt("Please enter your name for chat");
    if(roomname)
    {
        setSeriesroom([...seriesroom,roomname])
   
    }
    }
    return !addNewChat?(
        <div>
                    <div className='sidebarChat'>
            <Avatar src="https://thumbs.dreamstime.com/b/businessman-profile-cartoon-glasses-round-icon-vector-illustration-graphic-design-135443413.jpg"/>
            <div className="sidebarChat_info">
                <h2>Room</h2>
                <p>lastmessage ..</p>
            </div>
           
        </div>
       

       </div>
    ):
    (
    <div>
        <div onClick={createChat} className="sidebarChat">
        <h2>Add New Chat</h2>
        </div>
        {
            seriesroom.map((item)=>(
                <div className='sidebarChat'>
                <Avatar src="https://thumbs.dreamstime.com/b/businessman-profile-cartoon-glasses-round-icon-vector-illustration-graphic-design-135443413.jpg"/>
                <div className="sidebarChat_info">
                    <h2>{item}</h2>
                    <p>lastmessage ..</p>
                </div>
               
               </div>
            ))
        }

    </div>
       
         
   
    )
}

export default SidebarChat