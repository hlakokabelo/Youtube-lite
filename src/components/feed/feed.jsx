import React from 'react'
import './feed.css'
import { assests } from '../../assets/assets'
const Feed = () => {

    const vid = {
        title: 'This is a title',
        channel_name: 'Channel Name',
        total_views: '15k',
        upload_time: '2 days ago'
    }
    const cards = [
        {
            img: assests.thumbnail1,
            id: 1
        },
        { img: assests.thumbnail2, id: 2 },
        { img: assests.thumbnail3, id: 3 },
        { img: assests.thumbnail4, id: 4 },
        { img: assests.thumbnail5, id: 5 },
        { img: assests.thumbnail6, id: 6 },
        { img: assests.thumbnail7, id: 7 },
        { img: assests.thumbnail8, id: 8 },
    ]

    return (
        <div className='feed'>
            {cards.map(card => (
                <div key={card.id} className='card'>
                    <img src={card.img} alt="" />
                    <h2>{vid.title}</h2>
                    <h3>{vid.channel_name}</h3>
                    <p>{vid.total_views} views &bull; {vid.upload_time}</p>
                </div>
            ))}
              {cards.map(card => (
                <div key={card.id} className='card'>
                    <img src={card.img} alt="" />
                    <h2>{vid.title}</h2>
                    <h3>{vid.channel_name}</h3>
                    <p>{vid.total_views} views &bull; {vid.upload_time}</p>
                </div>
            ))}
        </div>
    )
}

export default Feed
