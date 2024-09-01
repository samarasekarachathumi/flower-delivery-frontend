import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const Searchbar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible,setVisible]=useState(false)
  const location =useLocation ();
  
  useEffect(()=>{
    if(location.pathname.includes('collection') ){
        setVisible(true);
        
    }
    else{
        setVisible(false)
    }
  },[location])
  return showSearch && visible ? (
    <div className='text-center border-t border-b bg-gray-50'>
      <div className='inline-flex items-center justify-center w-3/4 px-5 py-2 mx-3 my-5 border border-gray-400 rounded-full sm:w-1/2'>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='flex-1 text-sm bg-transparent outline-none'
          type='text'
          placeholder='Search'
        />
        <img
          className='w-4 h-4 ml-2 cursor-pointer'
          src={assets.search}
          alt="Search Icon"
          onClick={() => setShowSearch(false)}
        />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className='inline w-5 h-5 ml-5 cursor-pointer'
        src={assets.cross}
        alt="Close Icon"
      />
    </div>
  ) : null;
};

export default Searchbar;
