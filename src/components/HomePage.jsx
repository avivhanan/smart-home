import React from 'react'
import { Link } from 'react-router-dom'
import Room from './Room'
import './homePage.css'

export default function HomePage({ rooms, deleteRoom }) {
    return (
        <div className='home'>
            <h2>Smart House</h2>
            <div className='rooms'>
                {rooms.map((val, i) => {
                    return <Room key={i} roomName={val.name} roomColor={val.color} id={i} deleteRoom={deleteRoom} />
                })}
            </div>
            <Link to='/addroom'><button className='home-page-btn'>+</button></Link>
        </div>
    )
}
