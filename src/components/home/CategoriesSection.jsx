import React from "react";
import { useState, useEffect } from "react";
const categories = [
  
  {
    name: "Plomberie",
    slug: "Plomberie",
    description:
      "Pour toutes vos urgences de plomberie ou vos projets d’installation, notre plateforme vous connecte avec des plombiers expérimentés. Qu'il s'agisse de réparer une fuite, d'installer de nouveaux sanitaires ou d'entretenir vos systèmes, trouvez rapidement un expert disponible près de chez vous.",
    image: "thumbnail-2.png",
  },
  {
    name: "Électricité",
    slug: "Électricité",
    description:
      "Besoin d’un électricien ? Trouvez des professionnels qualifiés pour toutes vos installations électriques, la maintenance, et les réparations. Nous vous mettons en relation avec les meilleurs prestataires de votre région, assurant des services conformes aux normes et adaptés à vos besoins.",
    image: "thumbnail-1.png",
  },
  {
    name: "Peinture et Décoration",
    slug: "Peinture-et-Décoration",
    description:
      "Transformez votre espace grâce aux services de peinture et de décoration offerts par des professionnels de confiance. Que ce soit pour une simple retouche ou une rénovation complète, nous vous aidons à trouver le prestataire qui saura répondre à vos attentes en matière de style et de qualité.",
    image: "thumbnail-3.png",
  },
  {
    name: "Menuiserie",
    slug: "Menuiserie",
    description:
      "Pour des projets de menuiserie sur mesure ou des réparations, notre plateforme vous connecte avec des menuisiers qualifiés. Que vous ayez besoin de meubles personnalisés ou de réparations spécifiques, trouvez le bon artisan pour réaliser vos idées avec précision et savoir-faire.",
    image: "thumbnail-5.png",
  },
  {
    name: "Nettoyage",
    slug: "Nettoyage",
    description:
      "Maintenez votre maison ou votre bureau propre et bien entretenu en trouvant des services de nettoyage adaptés à vos besoins. Notre plateforme vous met en relation avec des professionnels du nettoyage, offrant des services réguliers ou ponctuels pour assurer un environnement impeccable.",
    image: "thumbnail-4.png",
  },
];

export default function CategoriesSection() {
  const [showVideo, setShowVideo] = useState(false);
  const [category, setCategory] = useState({
    name: "Home Decor",
    slug: "home-decor",
    description:
      "Transform your living space with one-of-a-kind home decor items. Browse through handmade furniture, decorative pillows, wall art, candles, and more to add a personal touch to every room in your home.",
    image: "thumbnail-1.png",
  });

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
        <div className="text-center">
          <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-green-700 mb-5 md:mb-[30px] max-w-[725px]">
          Explorez Nos Services les Plus Populaires
          </h2>
          <p className="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">
          Que vous ayez besoin d'un électricien, d'un plombier, d'un peintre, ou d'un autre artisan, explorez les catégories de services les plus demandées et trouvez celui qui correspond à vos besoins.          
          </p>
        </div>
        <div className="flex items-center gap-5 justify-center flex-wrap mx-auto w-full mt-[90px] sm:w-[80%] xl:w-full mb-[58px]">
          {categories.map((currCategory, indx) => (
            <p
              key={indx}
              className={`${currCategory.slug === category.slug ? "bg-green-900 text-white" : ""} text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-green-900 border-[2px] hover:border-green-900 hover:translate-y-[-2px]`}
              onClick={() => setCategory(currCategory)}
            >
              {currCategory.name}
            </p>
          ))}
        </div>
        <div className="tab-content lg:gap-[30px] lg:flex bg-bg-2 branding">
          {category && (
            <>
              <div className="p-5 md:p-[60px] lg:w-1/2 relative">
                <p className="text-lg  mb-[40px]">{category.description}</p>
                <button type="button" className="mt-10">
                  {" "}
                  <a
                    className="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] text-green-700 hover:bg-green-700 hover:text-white hover:-translate-y-[2px] bg-white w-fit"
                    href="#"
                  >
                    <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                     Voir Tous les Services 
                    </span>
                    
                  </a>
                </button>
              </div>
              <div className="relative lg:w-1/2">
                <img
                  className="h-full w-full object-cover"
                  src={`./assets/images/${category.image}`}
                  alt="Agon"
                />
                <img
                  className="absolute top-0 right-0"
                  src="./assets/images/icons/pattern-3.svg"
                  alt="pattern"
                />
                
                
              </div>
              
            </>
          )}
        </div>
      </div>
    </>
  );
}
