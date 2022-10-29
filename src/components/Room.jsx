import React from 'react'
import { Link } from 'react-router-dom'
import './room.css'

export default function Room({ roomName, roomColor, id, deleteRoom }) {
    return (
        <div className='room' style={{ backgroundColor: roomColor }}>
            <button className='room-btn' onClick={() => { deleteRoom(id) }}>X</button>

            <Link className='link' to={`/room/${id}`}>
                <h4 className='room-name'>{roomName}</h4>
            </Link>

        </div>
    )
}
