import React from 'react';
import {TbStereoGlasses} from 'react-icons/tb'

const Hero = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+919500478961';
    const message = 'Hello, I would like to get in touch about my specs!';
    const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
      phoneNumber
    )}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div>
  
      <div className='bg-gray-950  h-screen flex justify-center items-center text-white'>
      <div className='absolute top-0 left-0 ml-4 mt-4 text-center'>
      <h1 className='pt-2 pb-2 text-4xl font-extrabold  sm:pl-0'>
  <TbStereoGlasses color='#F97316' className='fill-blue-600 inline mr-2 pb-1 text-white' />
  <span className='bg-gradient-to-br from-orange-500 to-blue-600 text-transparent bg-clip-text'>
    Prabhu Opticals
  </span>
</h1>

</div>


        <div className='text-center'>
          <h1 className='text-4xl sm:text-6xl font-bold mb-4'>Eyewear Redefined</h1>
          <h1 className='text-4xl sm:text-6xl font-bold mb-8'>Vision Elevated</h1>
          <p className='text-xl mb-8'>
            Experience the perfect blend of <span style={{ color: 'yellow' }}>style and</span>  <span style={{ color: 'yellow' }}>clarity</span>. Discover eyewear that speaks volumes.
          </p>
          <div>
            <a href="https://www.google.com/maps/place/PRABHU+OPTICALS/@11.0422457,76.9483391,16.88z/data=!4m6!3m5!1s0x3ba859f14e0acf27:0xb7f142191e029f39!8m2!3d11.0422745!4d76.9487018!16s%2Fg%2F11jk46fm4p?entry=ttu">
            <button className='px-4 py-2 mr-4 mb-4 sm:mb-0 bg-violet-800 text-white rounded'>Koundampalayam</button>
            
            </a>
            <button onClick={handleWhatsAppClick} className='px-4 py-2 mr-4 mb-4 sm:mb-0 bg-violet-800 text-white rounded'>Contact Us</button>
            <a href="
            https://www.google.com/maps/place/PRABHU+OPTICALS/@10.9023296,76.9977655,19z/data=!4m12!1m5!3m4!2zMTDCsDU0JzEwLjMiTiA3NsKwNTknNTQuNSJF!8m2!3d10.9028611!4d76.9984722!3m5!1s0x3ba85ba579f7b335:0xd34c15dc5ce0f961!8m2!3d10.9028377!4d76.9983316!16s%2Fg%2F11sfdhr06d?entry=ttu">
               <button className='px-4 py-2 bg-violet-800 text-white rounded'>Malumichampatti</button>
         
            </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
