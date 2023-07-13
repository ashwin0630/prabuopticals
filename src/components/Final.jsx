import React from 'react';
import { GiRoundStar } from 'react-icons/gi';
const Final = () => {
  return (
    <div className='bg-gray-950 text-white  pb-3 md:h-screen '>
      <div className='ml-5 text-center lg:text-left'>
        <h2 className='text-3xl pt-5 pb-5 lg:text-4xl font-medium lg:font-extrabold'>Top Picks</h2>
        <div className='w-[120px] md:w-[120px] rounded-2xl h-[10px] bg-indigo-600 mb-4 md:mb-5 mx-auto md:mx-0'></div>
      </div>
      <div className='flex flex-col   md:flex-row m-5 justify-center items-center'>
        <div className='h-[500px] p-3 w-full  md:w-[450px] mb-5 md:mb-0 bg-white/10 backdrop-blur-xl rounded-xl md:mr-10'>
          <h1 className='text-3xl pt-5 pb-2 lg:text-4xl font-medium lg:font-extrabold'>Frames</h1>
          <div className='w-[80px] md:w-[120px] rounded-2xl h-[10px] bg-blue-400 mb-4 md:mb-5 '></div>
          <p className='text-white text-md mb-10 pt-5 font-bold mr-15 text-left'><GiRoundStar size={30} color='blue' className='inline mr-2 pb-1' />Ray-Ban</p>
          <p className='text-white text-md mb-10 font-bold mr-15 text-left'><GiRoundStar size={30} color='blue' className='inline mr-2 pb-1' />Tommy Hilfiger</p>
          <p className='text-white text-md mb-10 font-bold mr-15 text-left'><GiRoundStar size={30}  color='blue' className='inline mr-2 pb-1' />Titan eye+</p>
          <p className='text-white text-md mb-10 font-bold mr-15 text-left'><GiRoundStar size={30} color='blue' className='inline mr-2 pb-1' />Oakley</p>
          <p className='text-white text-md mb-10 font-bold mr-15 text-left'><GiRoundStar size={30} color='blue' className='inline mr-2 pb-1' />Fastrack</p>
          

        </div>
        <div className='h-[500px] p-3 w-full md:w-[450px] bg-white/10 backdrop-blur-lg rounded-xl bg-white'>
          <h1 className='text-3xl pt-5 pb-2 lg:text-4xl font-medium lg:font-extrabold'>Lens</h1>
          <div className='w-[60px] md:w-[80px] rounded-2xl h-[10px] bg-blue-400 mb-4 md:mb-5 '></div>
          <p className='text-white text-md mb-10 pt-5 font-bold mr-15 text-left'><GiRoundStar size={30} color='blue' className='inline mr-2 pb-1' />Zeiss</p>
          <p className='text-white text-md mb-10 font-bold mr-15 text-left'><GiRoundStar size={30} color='blue' className='inline mr-2 pb-1' />Nikon</p>
          <p className='text-white text-md mb-10 font-bold mr-15 text-left'><GiRoundStar size={30} color='blue' className='inline mr-2 pb-1' />Kodak</p>
          <p className='text-white text-md mb-10 font-bold mr-15 text-left'><GiRoundStar size={30} color='blue' className='inline mr-2 pb-1' />Essilor</p>
          <p className='text-white text-md mb-10 font-bold mr-15 text-left'><GiRoundStar size={30} color='blue' className='inline mr-2 pb-1' />Hoya</p>
          

        </div>
      </div>
    </div>
  );
};

export default Final;
