import React from 'react'

const ProductCard = ({img, title, price, quantity, inc, dec, index, removeProduct}) => {
  return (
    <div style={{display:"flex", justifyContent:"space-between"}}>

        <img style={{width:"100px", margin:"1rem"}} src={img} />

        <div>
            <h3>{title}</h3>
            <p>$ {price}</p>
            <button onClick={() => removeProduct(index)}>Remove</button>
        </div>
        <div style={{display:"flex", gap:"1rem", alignItems:"center"}}>
            <button onClick={() => inc(index)}>+</button>
        <p>{quantity}</p>
        <button onClick={() => dec(index)}>-</button>
        </div>
    </div>
  );
}

export default ProductCard