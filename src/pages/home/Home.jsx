import React from 'react'
import './home.css'
import SideBar from '../../components/sidebar/SideBar'

const Home = ({sidebar}) => {
    return (
        <>
            <SideBar sidebar ={sidebar}/>
        </>
    )
}

export default Home
