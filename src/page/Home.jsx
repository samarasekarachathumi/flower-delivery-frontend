import React from 'react';
import Heven from '../component/Heven';
import LatestCollection from '../component/LatestCollection';
import BestSeller from '../component/BestSeller';
import OurPolicy from '../component/OurPolicy';
import NewsLetterBox from '../component/NewsLetterBox';

const Home = () => {
  return (
    <div>
      <Heven/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <br/><br/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home