import Missionimg from "../../assets/Mission.svg";


function Mission() {
  return (
    <div className="relative min-h-screen bg-[rgb(3,14,50)]">

      <div className=" pt-50  w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center justify-center px-6 md:px-12 lg:px-24 py-20">
        
         {/* Left Side - Logo */}
        <div className="flex justify-center lg:justify-start">
            <img src={Missionimg} alt="Metmetric Logo" className="w-full h-auto " />
        </div>
          {/* Right Side - Content */}
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight">
           Our culture thrives on creativity, integrity, and a commitment to excellence.
          </h1>

          {/* Glass morphism block */}
          <div 
            className="p-6 rounded-xl border border-[rgba(255,231,231,0.46)] bg-linear-to-br from-[rgba(0,0,0,0.50)] to-[rgba(0,0,0,0.15)] shadow-[0_32px_40px_10px_rgba(5,5,46,0.25)]"
            style={{ backdropFilter: 'blur(25px)' }}
          >
            <p className="text-white/90 text-base md:text-lg leading-relaxed py-4">
              Discover the essence of MetMetric on our About page, where we showcase our dynamic culture that champions creativity and teamwork. We are committed to empowering both our employees and clients, ensuring that every project embodies our dedication to innovation and quality.
            </p>
            <button className="
                    w-full max-w-75 flex justify-center items-center
                    px-3.5 py-2.5 rounded-[3rem]
                    text-white
                    bg-linear-to-b from-[#15B5F8] to-[#1B33B8]
                    hover:bg-none hover:bg-white
                    hover:text-[#005fdb] hover:border-2 hover:-[#005fdb]
                    transition
                    ">
                    Enhance your business today
            </button>
          </div>
        </div>
       

      

        </div>
    </div>
    
  );
}

export default Mission;