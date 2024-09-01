import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../component/Title';
import ProductItem from '../component/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [Category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant'); // Fixed typo from 'relevent' to 'relevant'

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory(prev => 
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory(prev => 
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
  
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    if (Category.length > 0) {
      productsCopy = productsCopy.filter(item => 
        Category.includes(item.category)
      );
    }
  
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => 
        subCategory.includes(item.subCategory)
      );
    }
  
    setFilterProducts(productsCopy);
  };
  
  const sortProducts = () => {
    let productsToSort = [...filterProducts];
    switch (sortType) {
      case 'low-high':
        productsToSort.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        productsToSort.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilterProducts(productsToSort);
  };

  useEffect(() => {
    applyFilter();
  }, [Category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProducts();
  }, [sortType, filterProducts]); // Include filterProducts in dependencies to sort after filtering

  return (
    <div className='flex flex-col gap-1 pt-10 border sm:flex-row sm:gap-10'>
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)}
          className='flex items-center gap-10 my-2 text-xl cursor-pointer'>
          FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown} alt="Dropdown"/>
        </p>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>OCCASION</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Birthday" onChange={toggleCategory} /> Birthday
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Anniversary" onChange={toggleCategory} /> Anniversary
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Graduation " onChange={toggleCategory} /> Graduation 
            </p>
          </div>
        </div>
        <div className={`border border-gray-300 pl-5 py-3 mt-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>VARIATIONS</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Rose" onChange={toggleSubCategory} /> Rose
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Lily" onChange={toggleSubCategory} /> Lily
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Mix" onChange={toggleSubCategory} /> Mix
            </p>
          </div>
        </div>
      </div>

      <div className='flex-1'>
        <div className='flex justify-between mb-4 text-base sm:text-2xl'>
          <Title text1={'ALL'} text2={'COLLECTION'} />
          <select onChange={(e) => setSortType(e.target.value)} className='px-2 text-sm border-2 border-gray-300'>
            <option value='relevant'>Sort by: Relevant</option>
            <option value='low-high'>Sort by: Low to High</option>
            <option value='high-low'>Sort by: High to Low</option>
          </select>
        </div>
        <div className='grid gap-4 grid-cols md:grid-cols-3 lg:grid-cols-4 gap-y-6'>
          {
            filterProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Collection;










// import React, { useContext } from 'react';
// import { ShopContext } from '../context/ShopContext';

// const Collection = () => {
//   const { products } = useContext(ShopContext);

//   return (
//     <div className='flex flex-col gap-4 pt-10 border sm:flex-row sm:gap-10'>
//       {/* Filter Section */}
//       <div className='min-w-[200px]'>
//         <p className='flex items-center gap-2 my-2 text-xl font-semibold cursor-pointer'>
//           FILTERS
//         </p>
//         {/* Add your filter options here */}
//         <div className='mt-4'>
//           {/* Example filter options */}
//           <p className='text-lg font-medium'>Category</p>
//           <ul className='pl-5 list-disc'>
//             <li><button className='text-blue-500 hover:underline'>Category 1</button></li>
//             <li><button className='text-blue-500 hover:underline'>Category 2</button></li>
//             <li><button className='text-blue-500 hover:underline'>Category 3</button></li>
//           </ul>
//         </div>
//         {/* Add more filter sections as needed */}
//       </div>

//       {/* Products Section */}
//       <div className='flex-1'>
//         <p className='mb-4 text-2xl font-bold'>Products</p>
//         {/* Render products here */}
//         {products.length > 0 ? (
//           <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
//             {products.map(product => (
//               <div key={product.id} className='p-4 border rounded-lg'>
//                 <img src={product.image} alt={product.name} className='object-cover w-full h-40 mb-4'/>
//                 <h3 className='text-xl font-semibold'>{product.name}</h3>
//                 <p className='text-gray-600'>{product.price}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No products available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Collection;
