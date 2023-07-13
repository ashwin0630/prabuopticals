import React, { useState } from 'react';
import image from '../assets/image.jpg';
import { GiRoundStar } from 'react-icons/gi';
import {IoMdContacts} from 'react-icons/io'
import {MdOutlineReviews} from 'react-icons/md'
import {FaGlasses} from 'react-icons/fa'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const About = () => {
    const [counters,setcounters]=useState(false);

  return (
    <section>
      <div className="" style={{ backgroundImage: 'linear-gradient(to right bottom, #000204, #000619, #000728, #000635, #03013f)' }}>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img src={image} alt="img" className='object-cover h-full w-[400px] pl-5  md:mx-auto lg:mx-0 rounded-2xl' />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col text-white">
              <h2 className='text-3xl pt-5 pb-5  lg:text-4xl font-medium lg:font-extrabold'>About us</h2>
              <div className='w-[120px]  md:w-[120px] rounded-2xl h-[10px] bg-indigo-600 mb-4 md:mb-5 mx-auto md:mx-0'></div>
              <p className='text-white text-md mb-6 font-bold mr-15 text-center  '><GiRoundStar size={30} className='inline mr-2 pb-1' />Lorem ipsum dolor sit amet consectetur adipisicing elit. Et perspiciatis eos, dolorum est tempore ab, tenetur laudantium itaque consectetur iste, deserunt pariatur at minus illo maxime modi rerum. Fugiat, officia.</p>
              <p className='text-white text-md mb-6 font-bold mr-15 text-center '><GiRoundStar size={30} className='inline mr-2 pb-1' />Lorem ipsum dolor sit amet consectetur adipisicing elit. Et perspiciatis eos, dolorum est tempore ab, tenetur laudantium itaque consectetur iste, deserunt pariatur at minus illo maxime modi rerum. Fugiat, officia.</p>
              <p className='text-white text-md mb-6 font-bold mr-15 text-center  '><GiRoundStar size={30} className='inline mr-2 pb-1' />Lorem ipsum dolor sit amet consectetur adipisicing elit. Et perspiciatis eos, dolorum est tempore ab, tenetur laudantium itaque consectetur iste, deserunt pariatur at minus illo maxime modi rerum. Fugiat, officia.</p>
              <p className='text-white text-md mb-6 font-bold mr-15 text-center '><GiRoundStar size={30} className='inline mr-2 pb-1' />Lorem ipsum dolor sit amet consectetur adipisicing elit. Et perspiciatis eos, dolorum est tempore ab, tenetur laudantium itaque consectetur iste, deserunt pariatur at minus illo maxime modi rerum. Fugiat, officia.</p>
             </div>
          </div>
        </div>
        <div className='text-white  items-center text-center lg:items-start ml-5 mt-5 mr-5 lg:text-left'>
            <h2 className='text-3xl pt-5 pb-5  lg:text-4xl font-medium lg:font-extrabold'>Numbers speak</h2>
            <div className='w-[120px]  md:w-[180px] rounded-2xl h-[10px] bg-indigo-600 mb-6 md:mb-5 mx-auto md:mx-0'></div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='flex flex-col  justify-center  rounded-2xl bg-transparent border-2 border-radius border-slate-800 shadow-black h-60 mb-9 p-4  items-center text-center' style={{ backgroundImage: 'linear-gradient(to right bottom, #021122, #001232, #001242, #000f50, #07045a)'}} >
                <div className='bg-purple-500 p-3 rounded-full'>
                <IoMdContacts size={35}/>
                </div>
                <h2 className='text-3xl pt-4 font-medium lg:font-extrabold'>
                    <ScrollTrigger onEnter={()=>setcounters(true)} onExit={()=>setcounters(false)}>
                        {counters&&<CountUp start={5000} end={10000} duration={2} delay={0}/>}+
                    </ScrollTrigger>
                </h2>
                <h2 className='text-3xl pt-5 pb-5  font-medium lg:font-extrabold'>Customers</h2>
            </div>
            <div className='flex flex-col  justify-center  rounded-2xl border-2 border-radius border-slate-800 shadow-black h-60 mb-9 p-4  items-center text-center' style={{ backgroundImage: 'linear-gradient(to right bottom, #021122, #001232, #001242, #000f50, #07045a)'}}  >
                <div className='bg-purple-500 p-3 rounded-full'>
                    <MdOutlineReviews size={35}/>
                </div>
                <h2 className='text-3xl pt-4 font-medium lg:font-extrabold'>
                    <ScrollTrigger onEnter={()=>setcounters(true)} onExit={()=>setcounters(false)}>
                        {counters&&<CountUp start={2500} end={5000} duration={2} delay={0}/>}+
                    </ScrollTrigger>
                </h2>
                <h2 className='text-3xl pt-5 pb-5  font-medium lg:font-extrabold'>Review</h2>
            </div>
            <div className='flex flex-col  justify-center  rounded-2xl  border-2 border-radius border-slate-800  h-60 mb-9 p-4  items-center text-center' style={{ backgroundImage: 'linear-gradient(to right bottom, #03152a, #00163d, #00154e, #00115e, #07036a)'}}  >
                    <div className='bg-purple-500 p-3 rounded-full'>
                    <FaGlasses size={35}/>
                </div>
                <h2 className='text-3xl pt-4 font-medium lg:font-extrabold'>
                    <ScrollTrigger onEnter={()=>setcounters(true)} onExit={()=>setcounters(false)}>
                        {counters&&<CountUp start={0} end={500} duration={2} delay={0}/>}+
                    </ScrollTrigger>
                </h2>
                <h2 className='text-3xl pt-5 pb-5  font-medium lg:font-extrabold'>Brands</h2>
            </div>
            </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
