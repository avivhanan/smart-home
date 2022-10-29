import React, { useState } from 'react'
import './addProduct.css'

export default function AddProduct({ addProduct }) {
    const [product, setProduct] = useState()
    return (
        <div className='add-product'>
            <select defaultValue='' onChange={(e) => { setProduct(e.target.value) }}>
                <option value='' disabled hidden>Choose product</option>
                <option value='air-condition'>Air-Conditioner</option>
                <option value='water-heater'>Water-Heater</option>
                <option value='stereo-system'>stereo-system</option>
            </select>
            <button onClick={() => { addProduct(product) }} className='add-product-btn'>Add</button>
        </div>
    )
}
