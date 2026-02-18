import React from 'react'
import './home.css'
import SideBar from '../../components/sidebar/SideBar'
import Feed from '../../components/feed/feed'

const Home = ({ sidebar }) => {
    return (
        <>
            <SideBar sidebar={sidebar} />
            <div className={`container ${sidebar ? '' : 'large-container'}`}>
                <Feed />
            </div>
        </>
    )
}

export default Home
