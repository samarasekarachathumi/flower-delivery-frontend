import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='py-12 bg-gray-100'>
      <div className='container px-4 mx-auto'>
        <div className='grid grid-cols-1 gap-12 sm:grid-cols-3'>
          
          {/* Logo and Description */}
          <div className='flex flex-col items-start'>
            <img className='w-40 mb-4' src={assets.logo} alt='Company Logo' />
            <p className='text-gray-700'>
            Discover perfect blooms for every occasion at Blossom Haven. Our exquisite arrangements are crafted with care and fresh flowers, creating stunning displays that celebrate life's moments. Experience nature's beauty with every bouquet, bringing joy to your celebrations.
            </p>
          </div>
          
          {/* Centered Company Info */}
          <div className='flex flex-col items-center'>
            <p className='mb-4 text-xl font-semibold text-gray-800'>Company</p>
            <ul className='space-y-2 text-center'>
              <li><a href="#" className='text-gray-600 transition duration-300 hover:text-gray-900'>Home</a></li>
              <li><a href="#" className='text-gray-600 transition duration-300 hover:text-gray-900'>About Us</a></li>
              <li><a href="#" className='text-gray-600 transition duration-300 hover:text-gray-900'>Delivery</a></li>
              <li><a href="#" className='text-gray-600 transition duration-300 hover:text-gray-900'>Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Get In Touch */}
          <div className='flex flex-col items-start'>
            <p className='mb-4 text-xl font-semibold text-gray-800'>Get In Touch</p>
            <ul className='space-y-2 text-gray-600'>
              <li>+97 74 567 778</li>
              <li><a href="mailto:blossomhaven@gmail.com" className='transition duration-300 hover:text-gray-900'>blossomhaven@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className='mt-10 text-center text-gray-500'>
          <p>&copy; {new Date().getFullYear()} Blossom Haven. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;




