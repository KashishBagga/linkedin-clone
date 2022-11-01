import { Avatar } from '@mui/material';
import React from 'react'
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="" alt="" />
            <Avatar className="sidebar__avatar"/>
            <h2>Kashish Bagga</h2>
            <h4>baggakashish4@gmail.com</h4>
        </div>
        <div className='sidebar__stats'>
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statnumber">2,543</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on Post</p>
                <p className="sidebar__statnumber">2,448</p>
            </div>

        </div>
    </div>
  )
}

export default Sidebar