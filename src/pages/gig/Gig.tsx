import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const Gig: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const gigData = {
    _id: id,
    title: "Plumbing Service",
    userId: "user123",
    images: ["/img/example1.jpg", "/img/example2.jpg"],
    desc: "High-quality plumbing service for all your needs.",
    totalStars: 5,
    starNumber: 1,
    shortTitle: "Best Plumbing Service",
    price: 100,
    shortDesc: "Top-notch plumbing service by experienced professionals.",
    deliveryDate: 3,
    revisionNumber: 2,
    features: ["Quality work", "Affordable price", "Fast response"],
  };

  const userData = {
    img: "/img/noavatar.jpg",
    username: "John Doe",
    country: "USA",
    memberSince: "Aug 2022",
    avgResponseTime: "4 hours",
    lastDelivery: "1 day",
    languages: "English",
    desc: "Experienced plumber with over 10 years of experience.",
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <div className="relative w-full max-w-5xl mx-auto mt-20 mb-20">
        {/* Background Styling Matches Register Component */}
        <div className="absolute -top-5 -left-5 -right-5 -bottom-5 rounded-lg bg-gradient-to-r from-[#62929E] via-[#546A7B] to-[#62929E] shadow-lg animate-pulse"></div>

        {/* Form Container Styling Matches Register Component */}
        <div id="form-container" className="bg-white p-16 rounded-lg shadow-2xl relative z-10 transform transition duration-500 ease-in-out">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0, type: 'spring', mass: 0.5, damping: 5, stiffness: 120 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <div className="left space-y-4">
              <span className="breadcrumbs text-[#62929E]">
                ServicesDomicile &gt; Plumbing &gt; {gigData.title}
              </span>
              <h1 className="text-3xl font-bold">{gigData.title}</h1>
              <div className="user flex items-center space-x-4">
                <img className="w-16 h-16 rounded-full" src={userData.img} alt="User" />
                <span className="font-semibold">{userData.username}</span>
                <div className="stars flex items-center">
                  {Array(gigData.totalStars)
                    .fill('')
                    .map((_, i) => (
                      <img src="/img/star.png" alt="Star" key={i} className="w-4 h-4" />
                    ))}
                  <span className="ml-2">{gigData.totalStars}</span>
                </div>
              </div>
              <div className="slider space-y-2">
                {gigData.images.map((img, index) => (
                  <img src={img} alt={`Gig ${index}`} key={index} className="w-full h-auto rounded" />
                ))}
              </div>
              <h2 className="text-xl font-bold mt-4">About This Service</h2>
              <p className="text-gray-700">{gigData.desc}</p>
              <div className="seller mt-8 space-y-4">
                <h2 className="text-xl font-bold">About The Seller</h2>
                <div className="user flex items-center space-x-4">
                  <img className="w-16 h-16 rounded-full" src={userData.img} alt="User" />
                  <div className="info">
                    <span className="font-semibold">{userData.username}</span>
                    <div className="stars flex items-center">
                      {Array(gigData.totalStars)
                        .fill('')
                        .map((_, i) => (
                          <img src="/img/star.png" alt="Star" key={i} className="w-4 h-4" />
                        ))}
                      <span className="ml-2">{gigData.totalStars}</span>
                    </div>
                    <motion.button 
                      initial={{ opacity: 0, x: -60 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.3, type: 'spring', mass: 0.5, damping: 5, stiffness: 120 }}
                      className="mt-2 px-4 py-2 bg-[#62929E] text-white rounded"
                    >
                      Contact Me
                    </motion.button>
                  </div>
                </div>
                <div className="box p-4 bg-white rounded shadow space-y-4">
                  <div className="items space-y-2">
                    <div className="item flex justify-between">
                      <span className="font-semibold">From</span>
                      <span className="text-gray-700">{userData.country}</span>
                    </div>
                    <div className="item flex justify-between">
                      <span className="font-semibold">Member since</span>
                      <span className="text-gray-700">{userData.memberSince}</span>
                    </div>
                    <div className="item flex justify-between">
                      <span className="font-semibold">Avg. response time</span>
                      <span className="text-gray-700">{userData.avgResponseTime}</span>
                    </div>
                    <div className="item flex justify-between">
                      <span className="font-semibold">Last delivery</span>
                      <span className="text-gray-700">{userData.lastDelivery}</span>
                    </div>
                    <div className="item flex justify-between">
                      <span className="font-semibold">Languages</span>
                      <span className="text-gray-700">{userData.languages}</span>
                    </div>
                  </div>
                  <hr />
                  <p className="text-gray-700">{userData.desc}</p>
                </div>
              </div>
            </div>
            <div className="right space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5, type: 'spring', mass: 0.5, damping: 5, stiffness: 120 }}
                className="price p-4 bg-white rounded shadow"
              >
                <h3 className="text-xl font-bold">{gigData.shortTitle}</h3>
                <h2 className="text-2xl font-bold mt-2">${gigData.price}</h2>
              </motion.div>
              <p className="text-gray-700">{gigData.shortDesc}</p>
              <div className="details space-y-2">
                <div className="item flex items-center space-x-2">
                  <img src="/img/clock.png" alt="Clock" className="w-5 h-5" />
                  <span>{gigData.deliveryDate} Days Delivery</span>
                </div>
                <div className="item flex items-center space-x-2">
                  <img src="/img/recycle.png" alt="Recycle" className="w-5 h-5" />
                  <span>{gigData.revisionNumber} Revisions</span>
                </div>
              </div>
              <div className="features space-y-2">
                {gigData.features.map((feature, index) => (
                  <div className="item flex items-center space-x-2" key={index}>
                    <img src="/img/greencheck.png" alt="Check" className="w-5 h-5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <motion.button 
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7, type: 'spring', mass: 0.5, damping: 5, stiffness: 120 }}
                className="w-full py-2 bg-[#62929E] text-white rounded"
              >
                Continue
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Gig;
