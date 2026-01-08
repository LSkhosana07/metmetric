import { valueCards } from "../../Arrays/arrays";

function Values() {

  return (
  <div style={{background:"var(--Background, linear-gradient(116deg, #0E49B4 12.44%, #132967 57.89%, #081749 100.87%))", backgroundRepeat: "no-repeat",}}>

    <div className="w-full  py-40 px-6 flex flex-col items-center justify-center">
      <div className="max-w- text-center">
        <p className="text-white/90 text-sm font-medium tracking-wider uppercase mb-4">
          OUR VALUES
        </p>
        
        <h2 className="text-white text-2xl sm:text-6xl md:text-5xl font-bold mb-6">
          The foundation of our excellence
        </h2>
        
        <p className="text-white/80 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          Find out how we could assist you in enhancing your business into the new technological era.
        </p>
        
        <div className="home-cards-section flex flex-col lg:flex-row gap-8 justify-center items-stretch py-20 px-4">
                        {valueCards.map((card, index) => (
                            <div
                            key={index}
                            className="home-card h-full sm:min-h-150 sm:max-h-150 flex  flex-col rounded-xl border border-white/46 shadow-[0_32px_40px_10px_rgba(5,5,46,0.25)] p-6 py-28 w-full max-w-sm text-center text-white hover:scale-105 transition-transform duration-300"
                            style={{
                                backdropFilter: 'blur(25px)',
                                background:
                                'linear-gradient(131deg, rgba(0, 0, 0, 0.50) 12.76%, rgba(0, 0, 0, 0.15) 78.74%)',
                            }}
                            >
                            <img src={card.image} alt={card.title} className="mx-auto  mb-12 h-20 lg:h-24" />
                            <h2 className="text-2xl font-semibold mb-4">{card.title}</h2>
                            <p className="text-base">{card.description}</p>
                            </div>
                        ))}
                        </div>
      </div>
      
    </div>
  </div>
  );
};

export default Values;