import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../component/Title';
import { assets } from '../assets/assets';
import CartTotal from '../component/CartTotal';

const Cart = () => {
  const { products, currency, cartItems,updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='border-t pt-14'>
      <div className='mb-3 text-2xl'>
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);
            return (
              <div key={index} className='grid py-4 text-gray-700 border border-t-b grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img className='w-16 sm:w-20' src={productData.image[0]} alt={productData.name} />
                  <div>
                    <p className='text-xs font-medium sm:text-lg'>{productData.name}</p>
                  <div className='flex items-center gap-5 mt-2'> 
                    <p>
                      {currency}{productData.price}
                    </p>
                    <p className='px-2 py-1 border border-gray-300 rounded'>
  {item.size}
</p>

                  </div>
                  </div>
                </div>
                <input className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"type="number" min={1} defaultValue={item.quantity}/>
              <img onClick={()=>updateQuantity(item._id,item.size,0)}className='w-5 h-5 cursor-pointer' src={assets.bin}/>
              </div>
            )
          })
        }
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
        </div>
      </div>
    </div>
  )
}

export default Cart;
