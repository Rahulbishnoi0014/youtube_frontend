import React from 'react'
import "./navbar.css"
import yt from "../youtube.png";
import SearchBar from './SearchBar/SearchBar';
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";

const Navbar = () => {
    const userpresent=1;
    const user = {
        name: "Rahul",
        email: "rahulbhadu14@gmail.com"
    }
    return (
        <div className='navbar_container'>
            <div className='logo_navbar'>
                <div className='burger'>
                    <p></p>
                    <p></p>
                    <p></p>

                </div>
                <div className='logo_div_bar'>
                    <img className='yt_logo' src={yt}></img>
                    <p className='yt_title'>YouTube</p>

                </div>


            </div>
            <SearchBar />
            <RiVideoAddLine size={22} className={"vid_bell_navbar"} />
            <div className='apps_box'>
                <p className='appbox'></p>
                <p className='appbox'></p>
                <p className='appbox'></p>
                <p className='appbox'></p>
                <p className='appbox'></p>
                <p className='appbox'></p>
                <p className='appbox'></p>
                <p className='appbox'></p>
                <p className='appbox'></p>

            </div>
            <IoMdNotificationsOutline size={22} className='bellicon_searchbar' />


            {userpresent ? <>

                <div className='channeluser'>
                    <p>{user.name?user.name.charAt(0).toLowerCase():user.email.charAt(0).toLowerCase()}</p>
                </div>

            </> : <>
                <div className='auth_cont_navbar'>
                    <p className='auth_btn'>
                        <BiUserCircle size={22} />
                        <b > Sign in</b>
                    </p>
                </div>
            </>}


        </div>
    )
}

export default Navbar