import React from 'react';

const NewsLetterBox = () => {
    const onSubmitHandler=(event)=>{
        event.preventDefault();
        
    }
  return (
    <div>
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>
        Subscribe Now & get 20% off
      </p>
      <p className='mt-3 text-gray-400'>
      Beautiful blooms arranged with care, freshly picked daily for every special occasion.
      </p>
      <form onSubmit={onSubmitHandler} className='flex items-center w-full gap-3 pl-3 mx-auto my-6 border rounded-md sm:w-1/2'>
        <input
          className='w-full outline-none sm:flex-1'
          type='email'
          placeholder='Enter Your Email'
          required
        />
        <button
          className='px-10 py-4 text-xs text-white bg-black rounded-md'
          type='submit'
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
    </div>
  );
};

export default NewsLetterBox;
