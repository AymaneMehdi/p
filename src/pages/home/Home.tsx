import React from 'react';
import CategoriesSection from '../../components/home/CategoriesSection';
import WhatWeOffer from '../../components/home/WhatWeOffer';
import WhyChooseUs from '../../components/home/WhyChooseUs';
import Hero from '../../components/home/Hero.jsx';

const Home: React.FC = () => {
  return (
    <div className="wrapper mx-auto text-gray-900 font-normal max-w-[1320px]">
      {/* Hero section */}
      <Hero />

      {/* Companies section */}
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[24px] lg:grid-cols-6">
          {/* Partner logos */}
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <a
              key={num}
              className="transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]"
              href="/"
            >
              <img
                src={`./assets/images/partner-logo-${num}.svg`}
                alt={`partner logo ${num}`}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Category section */}
      <CategoriesSection />

      {/* Why choose us section */}
      <WhyChooseUs />

      {/* What we offer section */}
      <WhatWeOffer />

      {/* News section */}
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
        <div className="items-center justify-between mb-[70px] md:mb-[90px] md:flex">
          <div>
            <h2 className="text-green-700 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">
              Restez Informé des Dernières Nouvelles
            </h2>
            <p className="text-quote md:text-lead-lg text-gray-600">
            Recevez les mises à jour sur les nouveaux services, les offres spéciales, et plus encore en vous abonnant à notre newsletter.
            </p>
          </div>
          <button type="button">
            <a
              className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-green-700 text-white hover:bg-green-800 hover:text-white hover:-translate-y-[2px] bg-black text-white w-fit"
              href="#"
            >
              <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
              S'inscrire à la Newsletter
              </span>
            </a>
          </button>
        </div>
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-5 xl:gap-x-[30px] gap-y-[50px] xl:gap-y-[87px]">
          {[1, 2, 3].map((num) => (
            <a key={num} className="block group" href="#">
              <div className="relative mb-16">
                <div className="relative">
                  <div className="pr-[26px] aspect-[430/275]">
                    <img
                      className="h-full w-full object-cover rounded-2xl z-10 relative"
                      src={`./assets/images/news-${num}.jpg`}
                      alt={`News ${num}`}
                    />
                  </div>
                  <div className="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
                    <div className="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-4 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"></div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Newsletter section */}
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0  md:mt-[150px] mb-32">
        <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] gap-5 mx-auto bg-orange-100 px-[15px] py-[50px] md:flex lg:gap-[40px] lg:h-[420px] xl:h-[390px] max-w-[1190px]">
          <div className="flex-1 mb-[30px]">
            <p className="text-capitalized uppercase text-gray-500 tracking-[2px] mb-[13px]">
              newsletter
            </p>
            <h4 className="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[20px]">
              Subscribe to our newsletter
            </h4>
            <p className="text-text text-gray-500">
              By clicking the button, you are agreeing with our
            </p>
            <a className="text-green-900" href="/">
              Term & Conditions
            </a>
            <form className="mt-[30px]" action="/">
              <div className="bg-white flex items-center justify-between p-3 rounded-[55px] shadow-md">
                <input
                  className="ml-[25px] w-full px-4 py-2 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500"
                  type="text"
                  placeholder="Enter your mail ..."
                />
                <button
                  className="rounded-full bg-green-900 grid place-items-center w-[56px] h-[56px] hover:bg-green-700 transition-colors duration-300"
                  type="submit"
                >
                  <img
                    className="filter-white"
                    src="./assets/images/icons/icon-right.svg"
                    alt=""
                  />
                </button>
              </div>
            </form>
          </div>
          <div className="relative flex-1">
            <img
              className="h-full w-full object-cover rounded-2xl img-shadow lg:absolute lg:max-w-[332px] lg:h-[403px] lg:right-0"
              src="./assets/images/newslater.jpg"
              alt="Newsletter"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
