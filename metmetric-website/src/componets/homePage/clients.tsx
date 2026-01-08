import React, { useState } from 'react';
import NetworkBackground from '../../Animations/network';
import { clientsData, } from '../../Arrays/arrays';







const ClientShowcase: React.FC = () => {
  const [activeClient, setActiveClient] = useState<string>('jsh');

  const selectedClient = clientsData.find(client => client.id === activeClient);

  return (

<div className="relative min-h-screen">

    <NetworkBackground />

    <div className="relative z-10">
<div className="w-full flex flex-col items-center justify-center py-24">
      <h2 className="text-white text-5xl font-semibold  mt-25 mb-20">
        Our Clients
      </h2>

      {/* Client Info Card */}
      <div className="w-full max-w-300 px-4 mb-8">
        {selectedClient && (
          <div className="w-full flex lg:flex lg:flex-row flex-col items-center justify-center gap-9 rounded-3xl border border-white/30 bg-linear-to-br from-black/50 to-black/15 shadow-2xl backdrop-blur-[25px]  px-2 py-2">
            <img 
              src={selectedClient.image} 
              alt={selectedClient.name}
              className="w-full lg:max-w-145  h-full object-cover rounded-2xl"
            />
            <div className="flex-1 pr-8">
              <h3 className="text-white  text-2xl font-semibold mb-2">
                {selectedClient.name}
              </h3>
              <p className="text-[#ECECEC]  text-base leading-8">
                {selectedClient.description}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Client Buttons */}
      <div className="flex justify-center items-center mt-24 flex-wrap gap-10 px-5 flex-1 shrink-0 ">
        {clientsData.map((client) => (
          <button
            key={client.id}
            onClick={() => setActiveClient(client.id)}
            className={`w-full max-w-75 h-25 rounded-[50px] flex justify-center items-center cursor-pointer transition-all duration-300 ${
              activeClient === client.id
                ? 'bg-white shadow-lg'
                : 'border border-white/45 bg-linear-to-br from-black/50 to-black/15 shadow-lg backdrop-blur-[20px]'
            }`}
          >
            <img 
              src={activeClient === client.id ? client.activeIcon : client.inactiveIcon}
              alt={client.name}
              className="max-h-15"
            />
          </button>
        ))}
      </div>
    </div>
    </div>
</div>
  );
};

export default ClientShowcase;