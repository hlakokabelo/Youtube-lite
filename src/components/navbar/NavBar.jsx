import React from 'react'
import './navBar.css'
import { assests } from '../../assets/assets'

const NavBar = () => {
    return (
        <nav className='flex-div'>
            <div className="nav-left flex-div">
                <img className='menu-icon' src={assests.menu_icon} alt="" />
                <img className='logo' src={assests.logo} alt="" />
            </div>

            <div className="nave-middle flex-div">
                <div className="search-box flex-div">
                    <input type="text" placeholder='search' name="" id="" />
                    <img src={assests.search} alt="" />
                </div>
            </div>

            <div className="nav-right  flex-div">
                <img src={assests.upload} alt="" />
                <img src={assests.more} alt="" />
                <img src={assests.notification} alt="" />
                <img className='user-icon' src={assests.profile_icon} alt="" />
            </div>
        </nav>
    )
}

export default NavBar
