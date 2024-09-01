// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from './Title';
// import ProductItem from './ProductItem';

// const LatestCollection = () => {
//     const { products } = useContext(ShopContext);
//     const [latestProducts, setLatestProducts] = useState([]);

//     useEffect(() => {
//         setLatestProducts(products.slice(0, 10)); // Corrected slice syntax
//     }, [products]); // Added products to the dependency array

//     return (
//         <div className='my-10'>
//             <div className='py-8 text-3xl text-center'>
//                 <Title text1={'LATEST'} text2={'COLLECTION'} />
//                 <p className='w-3/4 m-auto text-xs sm:text-sm md:text'>
//                     "Pastry Text is simply sweet filler for the baking world. It adds flavor to every design, from cupcakes to layered cakes, creating visual delight."
//                 </p>
//             </div>
//             <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 mdd:grid-cols-4 lg:grid-cols-5 gap-y-6'>
//                 {latestProducts.map((item, index) => (
//                     <ProductItem key={index} id={item._id} name={item.name} price={item.price} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default LatestCollection;

import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10)); // Corrected slice syntax
    }, [products]); // Added products to the dependency array

    return (
        <div className='my-10'>
            <div className='py-8 text-3xl text-center'>
                <Title text1={'LATEST'} text2={'COLLECTION'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text'>
                "Floral Text is the elegant filler of the botanical world. It adds beauty to every arrangement, from delicate bouquets to grand floral displays, creating a visual symphony in every bloom."
                </p>
            </div>
            <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 mdd:grid-cols-4 lg:grid-cols-5 gap-y-6'>
                {latestProducts.map((item, index) => (
                    <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                ))}
            </div>
        </div>
    );
};

export default LatestCollection;




