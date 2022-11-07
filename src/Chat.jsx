import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import './Chat.css';
import { AttachFile, InsertEmoticon } from '@mui/icons-material';
import { SearchOutlined } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import { Mic } from '@mui/icons-material';
function Chat() {
   const [input,setInput]=useState()
   const [serieschat,setSerieschat]=useState([])
   
   const sendMessage=(e)=>{
    e.preventDefault()
      if(input.length)
      {
        var today = new Date(),

        time = today.toLocaleString('ist', { hour: 'numeric', minute:'numeric' ,hour12: true })
        const item={
          chat:input,
          time:time
        }        
        setSerieschat([...serieschat,item])
        setInput("")
      }
      
   
    
   }





  
  return (
    <div className='chat'>
       <div className="chat_header">
        <Avatar src="https://thumbs.dreamstime.com/b/businessman-profile-cartoon-glasses-round-icon-vector-illustration-graphic-design-135443413.jpg"/>
         <div className="chat_headerInfo">
             <h3>
                 Room name
             </h3>
             <p>
                 last seen at...
             </p>
         </div>
         <div className="chat_headerRight">
         <IconButton>
             <SearchOutlined />
             </IconButton>
             <IconButton>
             <AttachFile/>
             </IconButton>
             <IconButton>
             <MoreVertIcon/>
             </IconButton>
         </div>
       </div>
       <div className="chat_body">
        <p className={`chat_message
        ${true && "chat_receiver"}`}>
        
          <span className='chat_name'>Manoj Badiger</span>
          hey guys
          <span className='chat_timestamp'>
            3:24pm
          </span>
        </p>
        <p className={`chat_message
        ${false && "chat_receiver"}`}>
        
          <span className='chat_name'>Manoj Badiger</span>
          hey guys
          <span className='chat_timestamp'>
            3:24pm
          </span>
        </p>
        {
        
          serieschat.map((item)=>(
    <div>
      <br />
  
            <p className={`chat_message
            ${true && "chat_receiver"}`}>
            
              <span className='chat_name'>Manoj Badiger</span>
             {item.chat}
              <span className='chat_timestamp'>
               {item.time}
              </span>
            </p>
            
            </div>
          ))
        }
       
       </div>
       <div className="chat_footer">
       <InsertEmoticon/>
      <form>
        <input value={input} 
        onChange={e=>setInput(e.target.value)}
        type="text"/>
        <button
        type="submit"
        onClick={sendMessage}
        >Send a message</button>
      </form>
       <Mic/>
       </div>
    </div>
  )
}

export default Chat