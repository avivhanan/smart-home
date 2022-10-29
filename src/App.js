import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import AddRoom from './components/AddRoom';
import { useState } from 'react';
import RoomPage from './components/RoomPage';

function App() {
  const [rooms, setRooms] = useState(JSON.parse(localStorage.getItem('rooms')) || [])
  console.log(rooms)

  const onCreate = (roomName, selectRoom, roomColor) => {
    if (roomName != '' && selectRoom != '') {
      const newRooms = [...rooms, { name: roomName, type: selectRoom, color: roomColor, productsList: [] }];
      setRooms(newRooms);
      localStorage.setItem('rooms', JSON.stringify(newRooms));
    }
    else {
      alert('error')
    }
  }

  const deleteRoom = (id) => {
    let newRooms = [...rooms]
    newRooms.splice(id, 1)
    setRooms(newRooms)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage rooms={rooms} deleteRoom={deleteRoom} />} />
          <Route path='/addroom' element={<AddRoom onCreate={onCreate} />} />
          <Route path='/room/:id' element={<RoomPage rooms={rooms} setRooms={setRooms} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
