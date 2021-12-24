import React from 'react';
import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className="logo">Friendzap</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className='searchIcon'/>
                    <input placeholder="Search for friend,post" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">
                            1
                        </span>
                        <Chat />
                        <span className="topbarIconBadge">
                            3
                        </span>
                        <Notifications />
                        <span className="topbarIconBadge">
                            9
                        </span>
                    </div>
                </div>
                <img src="assets/person/asset-profile-1.jpeg" alt="" className="topbarImg" />
            </div>
        </div>
    )
}
