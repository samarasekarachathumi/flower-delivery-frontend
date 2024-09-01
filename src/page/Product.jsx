import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Product = () => {
  const { productId } = useParams();

  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    const foundProduct = products.find(item => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className='pt-10 transition-opacity duration-500 ease-in border-t opacity-100'>
      <div className='flex flex-col gap-12 sm:gap-12 sm:flex-row'>
        <div className='flex flex-col-reverse flex-1 gap-3 sm:flex-row'>
          <div className='flex justify-between overflow-x-auto sm:flex-col sm:overflow-y-scroll sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                alt={productData.name}
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img
              className='h-75 w-75'
              src={image}
              alt={productData.name}
            />
          </div>
        </div>

        <div className='flex-1'>
          <h1 className='mt-2 text-2xl font-medium'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star} alt="Star" className="w-3.5" />
            <img src={assets.star} alt="Star" className="w-3.5" />
            <img src={assets.star} alt="Star" className="w-3.5" />
            <img src={assets.star} alt="Star" className="w-3.5" />
            <img src={assets.startd} alt="Star Empty" className="w-3.5" />
            <p className='pl-2 '>(122)</p>
          </div>

          <p className='mt-5 text-3xl font-medium'>
            {currency}{productData.price}
          </p>

          <p className='mt-5 text-gray-500 md:w-4/5'>
            {productData.description}
          </p>

          <div className='flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-slate-100 ${item === size ? 'border-orange-400' : ''}`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id,size)}
            className='px-8 py-3 text-sm text-white bg-black active:bg-gray-700'
          >
            ADD TO CART
          </button>
          <hr className='mt-8 sm:w-4/5' />
          <div className="mt-8 text-sm text-gray-600">
            <ul className="pl-5 space-y-2 list-disc">
              <li><span className="font-semibold">100%</span> Fresh and Beautiful Blooms</li>
              <li><span className="font-semibold">Locally Sourced</span> and Vibrant</li>
              <li>Delivery available for all orders</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className='opacity-0'> </div>
  );
}

export default Product;



