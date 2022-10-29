import React from 'react'
import './product.css'

export default function Product({ productId, product, updateProduct }) {
    return (
        <div className='product' onClick={() => updateProduct(productId, { ...product, on: !product.on })} style={{ background: product.on ? 'green' : 'red' }}>
            <div>{product.name}: {product.on ? 'on' : 'off'}</div>
        </div>
    )
}
