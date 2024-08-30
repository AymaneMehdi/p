import React from "react";
import { GrUserWorker } from "react-icons/gr";
import { MdConnectWithoutContact } from "react-icons/md";

export default function WhyChooseUs() {
  return (
    <>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[100px]">
        <div className="text-center mb-[70px]">
          <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-green-700 mb-5 md:mb-[30px] max-w-[725px]">
            Comment Ça Marche
          </h2>
        </div>
        <div className="lg:flex lg:gap-5 xl:gap-[30px]">
          <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] relative mb-5 flex flex-col justify-between transition-all duration-300 bg-bg-5 hover:translate-y-[-2px] border border-gray-300 max-w-[400px] mx-auto lg:mx-0">
            <div>
              <GrUserWorker className="text-[80px] text-gray-900 mb-8" />
              <h2 className="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
                Recherchez
              </h2>
              <p className="text-excerpt text-gray-600 mb-[30px]">
                Entrez votre besoin et découvrez les profils des prestataires disponibles dans votre région.
              </p>
            </div>
            <button type="button">
              <a
                className="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-green-700 hover:bg-green-700 hover:text-white hover:-translate-y-[2px] w-fit hover:translate-y-[-3px]"
                href="#"
              >
                <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                  Commencez Votre Recherche
                </span>
              </a>
            </button>
            <img
              className="absolute bottom-0 right-0 z-0 max-w-[90px] md:max-w-[144px] max-h-[90px] md:max-h-[144px] translate-x-[20%] translate-y-[20%] xl:translate-x-0 xl:translate-y-0"
              src="/assets/images/icons/icon-flower-white.svg"
              alt="icon"
            />
          </div>
          <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] relative mb-5 flex flex-col justify-between transition-all duration-300 bg-bg-9 hover:translate-y-[-2px] border border-gray-300 max-w-[400px] mx-auto lg:mx-0">
            <div>
              <MdConnectWithoutContact className="text-[80px] text-gray-900 mb-8" />
              <h2 className="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
                Sélectionnez
              </h2>
              <p className="text-excerpt text-gray-600 mb-[30px]">
                Consultez les avis, comparez les offres, et choisissez le professionnel qui vous convient.
              </p>
            </div>
            <button type="button">
              <a
                className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-green-700 hover:bg-green-700 hover:text-white hover:-translate-y-[2px] w-fit hover:translate-y-[-3px]"
                href="#"
              >
                <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                  Commencez Votre Recherche
                </span>
              </a>
            </button>
            <img
              className="absolute bottom-0 right-0 z-0 max-w-[90px] md:max-w-[144px] max-h-[90px] md:max-h-[144px] translate-x-[20%] translate-y-[20%] xl:translate-x-0 xl:translate-y-0"
              src="/assets/images/icons/icon-map-white.svg"
              alt="icon"
            />
          </div>
          <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] relative mb-5 flex flex-col justify-between transition-all duration-300 bg-bg-2 hover:translate-y-[-2px] border border-gray-300 max-w-[400px] mx-auto lg:mx-0">
            <div>
              <img
                className="h-full w-full object-cover mb-[30px] max-w-[80px] max-h-[80px]"
                src="/assets/images/icons/icon-pine.svg"
                alt="icon"
              />
              <h2 className="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
                Réservez
              </h2>
              <p className="text-excerpt text-gray-600 mb-[30px]">
                Prenez rendez-vous directement en ligne, sans tracas.
              </p>
            </div>
            <button type="button">
              <a
                className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-green-700 hover:bg-green-700 hover:text-white hover:-translate-y-[2px] w-fit hover:translate-y-[-3px]"
                href="#"
              >
                <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                  Commencez Votre Recherche
                </span>
              </a>
            </button>
            <img
              className="absolute bottom-0 right-0 z-0 max-w-[90px] md:max-w-[144px] max-h-[90px] md:max-h-[144px] translate-x-[20%] translate-y-[20%] xl:translate-x-0 xl:translate-y-0"
              src="/assets/images/icons/icon-pine-white.svg"
              alt="icon"
            />
          </div>
        </div>
      </div>
    </>
  );
}
