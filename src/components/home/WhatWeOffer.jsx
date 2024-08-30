import React from "react";

export default function WhatWeOffer() {
  return (
    <>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
        <div className="bg-bg-2 relative px-[8px] py-[70px] rounded-[50px]">
          <img
            className="absolute top-0 left-0 z-0 -translate-x-1/4"
            src="./assets/images/icons/pattern-4.svg"
            alt="pattern icon"
          />
          <div className="text-center relative mb-[70px] md:mb-[90px]">
            <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-green-700 mb-5 md:mb-[30px] max-w-[725px]">
              Pourquoi Choisir LMO9EF?
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 mx-auto">
            <div className="rounded-2xl my-5 py-[40px] px-[50px] md:py-[60px] md:px-[80px] transition-all duration-300 hover:translate-y-[-3px] bg-white border border-gray-300">
              <img
                className="h-full w-full object-cover mb-[40px] max-w-[70px] max-h-[70px] mx-auto"
                src="./assets/images/icons/icon-trees.svg"
                alt="icon"
              />
              <h3 className="font-chivo font-bold text-[20px] md:text-heading-5 mb-[25px] text-center">
                Professionnels Qualifiés
              </h3>
              <p className="text-text text-gray-600 text-center">
                Tous nos prestataires sont vérifiés et évalués par nos utilisateurs.
              </p>
            </div>
            <div className="rounded-2xl my-5 py-[40px] px-[50px] md:py-[60px] md:px-[80px] transition-all duration-300 hover:translate-y-[-3px] bg-white border border-gray-300">
              <img
                className="h-full w-full object-cover mb-[40px] max-w-[70px] max-h-[70px] mx-auto"
                src="./assets/images/icons/icon-sun.svg"
                alt="icon"
              />
              <h3 className="font-chivo font-bold text-[20px] md:text-heading-5 mb-[25px] text-center">
                Service Rapide
              </h3>
              <p className="text-text text-gray-600 text-center">
                Trouvez un professionnel près de chez vous en quelques clics.
              </p>
            </div>
            <div className="rounded-2xl my-5 py-[40px] px-[50px] md:py-[60px] md:px-[80px] transition-all duration-300 hover:translate-y-[-3px] bg-white border border-gray-300">
              <img
                className="h-full w-full object-cover mb-[40px] max-w-[70px] max-h-[70px] mx-auto"
                src="./assets/images/icons/icon-trees.svg"
                alt="icon"
              />
              <h3 className="font-chivo font-bold text-[20px] md:text-heading-5 mb-[25px] text-center">
                Prix Compétitifs
              </h3>
              <p className="text-text text-gray-600 text-center">
                Comparez les offres pour obtenir le meilleur rapport qualité-prix.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
