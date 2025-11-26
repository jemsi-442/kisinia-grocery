import React from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <main className="py-12 dark:bg-gray-800 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-green-600 dark:text-green-400 mb-8 relative pb-2">
          About Us
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-green-400 rounded-full"></span>
        </h1>

        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Welcome to Kisinia Restaurant
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kisinia Restaurant ni sehemu ya kipekee ya chakula na burudani, tupo 
                Mlimani Siti mkabala na Kilimanjaro Car Wash, Kama uki-BOLT andika Kisinia Restaurant, tukikuletea ladha ya asili ya Tanzanian cuisine 
              kwa njia ya kisasa na ya kifamilia.  
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Tunajivunia kutumia viungo fresh na kuwa na huduma za haraka, na kuifanya kila 
              chakula kuwa tukio la kipekee. Tunakukaribisha utembee, uone, na ufurahie ladha yetu ya kipekee.

              Kwenye mtandao ya kijamini, unaweza kutu-pata kwenye Instagram na TikTok kama Kisinia Restaurant.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a 
                href="https://www.instagram.com/kisiniarestaurant?igsh=NDBodnoyNDhraWE5&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md transition"
              >
                <FaInstagram /> Instagram
              </a>
              <a 
                href="https://www.tiktok.com/@kisiniarestaurant?_r=1&_t=ZM-91iU6awe0dw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black hover:bg-gray-900 text-white px-4 py-2 rounded-md transition"
              >
                <FaTiktok /> TikTok
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <img 
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80" 
              alt="Kisinia Restaurant" 
              className="rounded-lg shadow-lg object-cover w-full max-w-md"
            />
          </div>
        </div>

        {/* Location / Map placeholder */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Visit Us
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Find us right across Jengoo la Mlimani Siti, Dar es Salaam, Tanzania. We look forward to serving you!
          </p>
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
            {/* You can replace this with a real Google Maps iframe */}
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
