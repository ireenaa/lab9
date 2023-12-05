import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null);

const getDefaulCart = ()=>{ 
    let cart ={};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
        
    }
    return cart;
}
const ShopContext = (props) => {
    const [cartItems, setCartItems] = useState(getDefaulCart());
    const contextValue ={all_product, cartItems};

    console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
        {props.catalog}
    </ShopContext.Provider>
  )
}

export default ShopContext