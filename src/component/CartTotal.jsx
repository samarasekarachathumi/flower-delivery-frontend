import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
    
    const subtotal = getCartAmount();
    const total = subtotal + delivery_fee;

    return (
        <div className='w-full p-4 bg-white rounded-md shadow-md'>
            <Title text1={'CART'} text2={'TOTALS'} />
            <div className='mt-4 text-sm'>
                <div className='flex justify-between py-2 border-b border-gray-200'>
                    <p className='font-semibold'>Subtotal</p>
                    <p>{currency}{subtotal.toFixed(2)}</p>
                </div>
                <div className='flex justify-between py-2 border-b border-gray-200'>
                    <p className='font-semibold'>Delivery Fee</p>
                    <p>{currency}{delivery_fee.toFixed(2)}</p>
                </div>
                <div className='flex justify-between py-2 text-lg font-bold'>
                    <p>Total</p>
                    <p>{currency}{total.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;
