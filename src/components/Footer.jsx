import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-6" style={{ backgroundImage: 'linear-gradient(to right bottom, #000204, #000619, #000728, #000635, #03013f)' }}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <p className="text-md p-2 text-left  md:text-base">
          we offer a wide range of frames, lenses, and contact lenses for sale, along with professional services. Don't forget to get your power checked for precise vision correction and personalized recommendations.  
          </p>
        </div>
        <div >
          <h4 className="text-lg font-bold mb-2">Contact Us</h4>
          <p className="text-sm text-left">
            Email: cbeprabhuopticals@gmail.com<br />
            Phone: +91-9500478961<br />
            Address:Koundampalayam,Coimbatore,TN-641030
          </p>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} By Ashwin
        </p>
      </div>
    </footer>
  );
};

export default Footer;
