import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import Product from './Product';
import AddProduct from './AddProduct';
import './roomPage.css'

export default function RoomPage({ rooms, setRooms }) {
    const [showAddProduct, setShowAddProduct] = useState(false)
    const { id } = useParams();
    const room = rooms[id];
    console.log(room)

    const addProduct = (product) => {
        console.log({ room, product });
        if (!product) {
            alert('You must sewlect product first!')
        }
        else if (room.productsList.length > 4) {
            alert('error')
        }
        else if (room.productsList.some((p) => p.name === 'stereo-system') && product === 'stereo-system') {
            alert('stereo-syste already exist!!!')
        }
        else if (room.type != 'bathroom' && product == 'water-heater') {
            alert('error2')
        }
        else {
            const products = [...room.productsList, { name: product, on: false }];
            const coppyofRooms = [...rooms]
            coppyofRooms[id].productsList = products
            localStorage.setItem('rooms', JSON.stringify(coppyofRooms));
            setRooms(coppyofRooms)
            setShowAddProduct(false)
        }
    }

    const updateProduct = (productId, product) => {
        let coppyOfRooms = [...rooms]
        coppyOfRooms[id].productsList[productId] = product
        setRooms(coppyOfRooms)
        localStorage.setItem('rooms', JSON.stringify(coppyOfRooms))
    }

    if (!room) {
        return (
            <div>
                <div>No room found</div>
                <Link to='/'><button>Back</button></Link>
            </div>
        )
    }
    return (
        <div className='room-page'>
            <h2>Smart house</h2>
            <div className='room-page-txt'>
                <div>room name: {room.name}</div>
                <div>room type: {room.type}</div>
            </div>
            {rooms[id].productsList.map((product, i) => {
                return <Product key={i} productId={i} product={product} updateProduct={updateProduct} />
            })}
            <button className='room-page-btn' onClick={() => { setShowAddProduct(!showAddProduct) }}>add product</button>
            {showAddProduct ? <AddProduct addProduct={addProduct} /> : null}
        </div>
    )
}
