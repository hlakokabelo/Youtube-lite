import React from 'react'
import './sidebar.css'
import { assests } from '../../assets/assets'
const SideBar = ({sidebar}) => {
    return (
        <div className={`sidebar ${sidebar?'':'small-sidebar'}`}>
            <div className="shortcut-links">
                <dive className="side-link">
                    <img src={assests.home} alt="" />
                    <p>Home</p>
                </dive>
                <dive className="side-link">
                    <img src={assests.game_icon} alt="" />
                    <p>Gaming</p>
                </dive>
                <dive className="side-link">
                    <img src={assests.automobiles} alt="" />
                    <p>Automobiles</p>
                </dive>
                <dive className="side-link">
                    <img src={assests.sports} alt="" />
                    <p>Sports</p>
                </dive>
                <dive className="side-link">
                    <img src={assests.entertainment} alt="" />
                    <p>Entertainment</p>
                </dive>
                <dive className="side-link">
                    <img src={assests.tech} alt="" />
                    <p>Technology</p>
                </dive>
                <dive className="side-link">
                    <img src={assests.music} alt="" />
                    <p>Music</p>
                </dive>
                <dive className="side-link">
                    <img src={assests.blogs} alt="" />
                    <p>Blogs</p>
                </dive>
                <hr />
            </div>
            <div className="subscribed-list">
                <h3>Subscibed</h3>
                <div className="side-link">
                    <img src={assests.profile_icon} alt="" />
                    <p>PewDiePie</p>
                </div>
                <div className="side-link">
                    <img src={assests.simon} alt="" />
                    <p>Mr Beast</p>
                </div>
                <div className="side-link">
                    <img src={assests.tom} alt="" />
                    <p>Justin Bieber</p>
                </div>
                <div className="side-link">
                    <img src={assests.megan} alt="" />
                    <p>Five-minutes-crafts</p>
                </div>
                <div className="side-link">
                    <img src={assests.cameron} alt="" />
                    <p>Nas Daily</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar
