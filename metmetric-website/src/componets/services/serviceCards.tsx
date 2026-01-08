import { useState } from 'react';
import { services } from '../../Arrays/arrays';

export default function ServicesCards() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const toggleCard = (cardIndex: number) => {
    setActiveCard(activeCard === cardIndex ? null : cardIndex);
  };

  

  return (
    <div className="w-full flex items-center justify-center flex-col lg:flex-row mt-0 gap-0">
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`w-full h-175 flex flex-col items-center justify-center bg-center bg-cover transition-all duration-300 ease-in-out cursor-pointer ${
            activeCard === index ? 'bg-white' : ''
          }`}
          style={activeCard === index ? {} : { backgroundImage: `url(${service.background})` }}
          onClick={() => toggleCard(index)}
        >
          <img src={service.icon} alt={service.title} className="mb-10 w-24 lg:w-36" />
          
          <h3 className={`text-center  text-2xl font-semibold leading-normal ${
            activeCard === index ? 'text-[#1B33B8]' : 'text-white'
          }`}>
            {service.title}
          </h3>
          
          <p className={`text-center text-lg font-medium leading-[155%] px-10 pt-5 ${
            activeCard === index ? 'text-black' : 'text-white'
          }`}>
            {service.description}
          </p>
          
          {activeCard === index && (
            <a href={service.link}>
              <button className="mt-5 bg-[#0066FF] text-white  text-base font-semibold py-3 px-8 border-none rounded-[25px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#0052CC] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,102,255,0.4)]">
                See More
              </button>
            </a>
          )}
        </div>
      ))}
    </div>
  );
}