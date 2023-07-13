import React from 'react';
import {TbStereoGlasses} from 'react-icons/tb'

const Hero = () => {
  return (
    <div>
  
      <div className='bg-gray-950  h-screen flex justify-center items-center text-white'>
      <div className='absolute top-0 left-0 ml-4 mt-4 text-center'>
  <h1 className='pt-2 pb-2 text-4xl font-extrabold pl-8 sm:pl-0'>
    <TbStereoGlasses className='inline mr-2 pb-1 text-white' />Pr
    <span className='bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text'>abu</span> <span className='bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text'>opt</span>icals
  </h1>
</div>


        <div className='text-center'>
          <h1 className='text-4xl sm:text-6xl font-bold mb-4'>Eyewear Redefined</h1>
          <h1 className='text-4xl sm:text-6xl font-bold mb-8'>Vision Elevated</h1>
          <p className='text-xl mb-8'>
            Experience the perfect blend of <span style={{ color: 'yellow' }}>style and</span>  <span style={{ color: 'yellow' }}>clarity</span>. Discover eyewear that speaks volumes.
          </p>
          <div>
            <button className='px-4 py-2 mr-4 mb-4 sm:mb-0 bg-violet-800 text-white rounded'>Contact Us</button>
            <button className='px-4 py-2 mr-4 mb-4 sm:mb-0 bg-violet-800 text-white rounded'>Locate Us</button>
            <button className='px-4 py-2 bg-violet-800 text-white rounded'>Shop Now </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
