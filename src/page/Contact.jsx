import React from 'react';
import Title from '../component/Title'; // Ensure you import Title if it's used

const Contact = () => {
  return (
    <div className='px-4 py-8'>
      <div className='pt-4 text-center border-t border-gray-300'>
        <Title text1='CONTACT' text2='US' />
      </div>
      <div className='flex flex-col gap-8 my-10 md:flex-row'>
        <div className='flex-1'>
          <h2 className='mb-4 text-2xl font-semibold text-gray-800'>Get in Touch</h2>
          <p className='mb-6 text-lg text-gray-600'>
            Have any questions or need assistance with your floral needs? Feel free to reach out to us using the form below, and we will respond as soon as possible. Your inquiries and feedback are valuable to us!
          </p>
          <form className='space-y-6'>
            <div>
              <label htmlFor='name' className='block mb-2 text-lg font-medium text-gray-700'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Your Name'
                className='block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500'
                required
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-lg font-medium text-gray-700'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Your Email'
                className='block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500'
                required
              />
            </div>
            <div>
              <label htmlFor='message' className='block mb-2 text-lg font-medium text-gray-700'>Message</label>
              <textarea
                id='message'
                name='message'
                placeholder='Your Message'
                rows='4'
                className='block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500'
                required
              />
            </div>
            <button
              type='submit'
              className='w-full px-4 py-3 text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500'>
              Send Message
            </button>
          </form>
        </div>
        <div className='flex-1'>
          <h2 className='mb-4 text-2xl font-semibold text-gray-800'>Contact Information</h2>
          <p className='mb-6 text-lg text-gray-600'>
            You can also reach us through the following methods:
          </p>
          <ul className='space-y-4'>
            <li className='flex items-center text-gray-600'>
              <svg className='w-6 h-6 mr-3 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 10h1.586A2 2 0 016 7.586L10.414 3H21v18H3V10z'></path></svg>
              <span>1234 Blossom Street, Garden City, SriLanka</span>
            </li>
            <li className='flex items-center text-gray-600'>
              <svg className='w-6 h-6 mr-3 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2H4z'></path></svg>
              <span>blossomhaven@gmail.com</span>
            </li>
            <li className='flex items-center text-gray-600'>
              <svg className='w-6 h-6 mr-3 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2H4z'></path></svg>
              <span>+97 74 567 778</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;

