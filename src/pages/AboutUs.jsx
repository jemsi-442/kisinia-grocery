import React from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <main className="py-12 dark:bg-[#1a1a1a] bg-white min-h-screen">
      <div className="container mx-auto px-4">

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-orange-600 dark:text-orange-400 mb-10 relative pb-3">
          About Us
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-orange-500 rounded-full"></span>
        </h1>

        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Text Block */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
              Welcome to Kisinia Restaurant
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kisinia Restaurant ni sehemu ya kipekee ya chakula na burudani. 
              Tupo Mlimani City mkabala na Kilimanjaro Car Wash. 
              Kama uko kwenye BOLT, andika <strong>Kisinia Restaurant</strong> 
                 tukuletee ladha ya Tanzanian cuisine iliyoandaliwa kwa ubora wa kisasa.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Tunatumia viungo fresh kila siku na tunapika kwa umakini ili 
              kila mteja apate chakula chenye ladha ya kipekee. Tunakukaribisha 
              ufurahie mazingira mazuri, huduma nzuri, na chakula bora.  

              Kwa mitandao ya kijamii, unatu-pata Instagram na TikTok kama 
              <strong> Kisinia Restaurant</strong>.
            </p>

            {/* Social Buttons */}
            <div className="flex gap-4 mt-4">

              <a 
                href="https://www.instagram.com/kisiniarestaurant?igsh=NDBodnoyNDhraWE5&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-orange-500 hover:opacity-90 text-white px-5 py-2.5 rounded-lg shadow-md transition-all"
              >
                <FaInstagram /> Instagram
              </a>

              <a 
                href="https://www.tiktok.com/@kisiniarestaurant?_r=1&_t=ZM-91iU6awe0dw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black hover:bg-gray-900 text-white px-5 py-2.5 rounded-lg shadow-md transition-all"
              >
                <FaTiktok /> TikTok
              </a>

            </div>
          </div>

          {/* Image Block */}
          <div className="flex justify-center md:justify-end">
            <img 
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
              alt="Kisinia Restaurant"
              className="rounded-xl shadow-xl object-cover w-full max-w-md hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>

        {/* Location Section */}
        <div className="mt-14">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
            Visit Us
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Tunapatikana Mlimani City, Dar es Salaam — karibu upate huduma bora na chakula kitamu!
          </p>

          <div className="w-full h-72 rounded-xl overflow-hidden shadow-lg border border-orange-300/30">
            <iframe
              title="Kisinia Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.234798468079!2d39.28054441533853!3d-6.803788895027191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4ba2d2cf21d1%3A0x123456789abcdef!2sMlimani%20City!5e0!3m2!1sen!2stz!4v1699456789012!5m2!1sen!2stz"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </main>
  );
};

export default AboutUs;
