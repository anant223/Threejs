import { current } from '@reduxjs/toolkit'
import React from 'react'

const ProductShape = ({product, position}) => {
    const w = product.width / 1000
    const h = product.height / 1000
    const d = product.length / 1000
    const [x, y, z] = position;

  return (
    <mesh position={[x, y, z]}>
        <boxGeometry args={[w, h,d]}/>
        <meshStandardMaterial color={product?.color}/>
    </mesh>
  )
}

export default ProductShape