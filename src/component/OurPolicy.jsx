import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col justify-around gap-12 py-2 text-xs text-center text-gray-700 sm:flex-row sm:gap-20 sm:text-sm md:text-base'>
      <div>
        <img src={assets.delivery} alt="Timely Delivery" className='w-12 m-auto mb-5' />
        <p className='font-semibold'>Timely Delivery Promise</p>
        <p className='text-gray-400'>
          Your bouquet will be delivered fresh and on time. If not, we’ll offer a refund or a fresh replacement.
        </p>
      </div>
      <div>
        <img src={assets.satisfaction} alt="Freshness Guarantee" className='w-12 m-auto mb-5' />
        <p className='font-semibold'>Freshness Guarantee</p>
        <p className='text-gray-400'>
          We guarantee the freshest blooms. If you're not satisfied, we'll replace them at no cost.
        </p>
      </div>
      <div>
        <img src={assets.suport} alt="Floral Support 24/7" className='w-12 m-auto mb-5' />
        <p className='font-semibold'>Floral Support 24/7</p>
        <p className='text-gray-400'>
          Our team is here around the clock to ensure your floral experience is always delightful.
        </p>
      </div>
    </div>
  )
}

export default OurPolicy

