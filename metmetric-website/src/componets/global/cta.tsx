
function CTA() {

  return (
  <div style={{background:"var(--Background, linear-gradient(116deg, #0E49B4 12.44%, #132967 57.89%, #081749 100.87%))", backgroundRepeat: "no-repeat",}}>

    <div className="w-full  py-40 px-6 flex items-center justify-center">
      <div className="max-w-2xl text-center">
        <p className="text-white/90 text-sm font-medium tracking-wider uppercase mb-4">
          WORK WITH US
        </p>
        
        <h2 className="text-white text-2xl sm:text-6xl md:text-5xl font-bold mb-6">
          Enhance your business today
        </h2>
        
        <p className="text-white/80 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          Find out how we can take your business into the new technological era
        </p>
        
        <button className="text-white
                    bg-linear-to-b from-[#15B5F8] to-[#1B33B8]
                    hover:bg-none hover:bg-white
                    hover:text-[#005fdb] hover:border-2 hover:border-[#005fdb]
                 px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          Contact Us
        </button>
      </div>
    </div>
  </div>
  );
};

export default CTA;