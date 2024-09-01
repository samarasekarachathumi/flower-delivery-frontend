import React from 'react';
import { assets } from '../assets/assets';
import Title from '../component/Title'; // Ensure you import Title if it's used

const About = () => {
  return (
    <div className='px-4 py-8'>
      <div className='pt-4 text-2xl text-center border-t border-gray-300'>
        <Title text1='ABOUT' text2='US' />
      </div>
      <div className='flex flex-col gap-6 my-10 md:flex-row'>
        <img 
          className='object-cover w-3/4 max-w-xs border border-gray-200 rounded-lg shadow-lg md:w-1/3'
          src={assets.b_img2} 
          alt='About Blossom Haven' 
        />
        <div className='flex flex-col justify-center gap-6 text-gray-600 md:w-2/3'>
          <p className='text-lg font-medium leading-relaxed'>
            Welcome to Blossom Haven, where nature's beauty meets artistry. We are a passionate team dedicated to crafting stunning floral arrangements that bring joy and elegance to every occasion. Our commitment to quality and creativity ensures that each bouquet tells a unique story, tailored to your desires.
          </p>
          <div className='py-4 border-t border-gray-300'>
            <h2 className='mb-2 text-xl font-semibold text-gray-800'>OUR MISSION</h2>
            <p className='text-lg font-medium leading-relaxed'>
              At Blossom Haven, our mission is to inspire and uplift through the beauty of flowers. We strive to create memorable experiences by delivering exquisite arrangements that capture the essence of every moment. Our dedication to excellence, innovation, and personalized service is at the heart of everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;




