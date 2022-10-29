import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './addRoom.css'

export default function AddRoom({ onCreate }) {
    const [roomName, setRoomName] = useState('')
    const [selectRoom, setSelectRoom] = useState('')
    const [roomColor, setRoomColor] = useState()

    return (
        <div className='add-room'>
            <h2>Smart House</h2>
            <select className='add-room-input' defaultValue='' onChange={(e) => { setSelectRoom(e.target.value) }} name='rooms'>
                <option value='' disabled hidden>Choose New Room</option>
                <option value='bedroom'>bedroom</option>
                <option value='bathroom'>bathroom</option>
                <option value='kitchen'>kitchen</option>
            </select>
            <input className='add-room-input' onChange={(e) => { setRoomName(e.target.value) }} type='text' placeholder='room name' maxLength={5} />
            <input className='add-room-input' onChange={(e) => { setRoomColor(e.target.value) }} type='text' placeholder='room color' />
            <Link to='/'><button className='add-room-btn' onClick={() => onCreate(roomName, selectRoom, roomColor)}>Create</button></Link>
        </div>
    )
}
