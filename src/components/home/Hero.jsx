import React, { useState } from "react";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <div>
      <div className="banner-hero banner-1 bg-[#ffedd5] mt-20 w-[1500px] -ml-20">
        <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 z-10 relative mx-auto mt-0 py-[60px] !mt-0 max-w-[1320px] lg:flex lg:items-center mr-8">
          <div className="flex-1">
            <h1 className="font-chivo font-bold lg:text-display-2 md:text-[64px] md:leading-[70px] sm:text-[50px] sm:leading-[58px] text-[40px] leading-[48px] mb-[40px]">
              Découvrez des Services 
              <span className="text-green-700">
                &nbsp;de Qualité pour Tous Vos Besoins&nbsp;
              </span>
            </h1>
            <p className="text-quote md:text-lead-lg  pr-[40px] lg:pr-[60px] mb-[40px]">
              Que ce soit pour des réparations domestiques, des installations, ou des services spécialisés, trouvez le professionnel qu'il vous faut parmi une large gamme de prestataires qualifiés.
            </p>
            <p className="text-quote md:text-lead-lg  pr-[40px] lg:pr-[60px] mb-[40px]">
              Connectez-vous facilement avec des artisans, des techniciens, et des professionnels proches de chez vous. Bénéficiez d’un service rapide, fiable, et adapté à votre budget.            
            </p>
              <div className="flex items-center justify-start">
              <button type="button">
                <a
                  className="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-green-700 hover:bg-green-800 hover:-translate-y-[2px] text-white bg-black text-heading-6 tracking-wide mr-[22px]"
                  href="#"
                >
                  <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                   Commencez Maintenant
                  </span>
                </a>
              </button>
            </div>
          </div>
          <div className="hidden relative flex-1 h-auto self-stretch lg:block">
            <div className="absolute w-full bottom-[-60px] max-w-[550px] right-0">
              <img
                className="h-full object-cover ml-20"
                src="./assets/images/landing-hero.png"
                alt="Agon"
              />
            </div>
            <div className="absolute opacity-80 animate-float max-w-[176px] bottom-[10%] -translate-x-1/3">
            
            </div>
          </div>
        </div>
      </div>
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative bg-sky-100 rounded-lg p-8 max-w-4xl w-full h-[500px]">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={handleCloseVideo}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                width="820"
                height="455"
                src="https://www.youtube.com/embed/Z5pn9JDO0rk?si=bwdUkHiYSSCYUu6Q"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
