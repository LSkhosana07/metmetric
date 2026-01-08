import AdvancedNetworkBackground from "../../Animations/background2";
import Logo from "../../assets/MetmetricLogo.svg";

function Header() {
  return (
    <div className="relative min-h-screen">

      <AdvancedNetworkBackground />
        <div className="relative z-10 ">
      <div className=" pt-50  w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center justify-center px-6 md:px-12 lg:px-24 py-20">
        
          {/* Right Side - Content */}
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight">
            At <span className="font-semibold">MetMetric</span>, we believe in empowering our team and clients alike through innovation and collaboration
          </h1>

          {/* Glass morphism block */}
          <div 
            className="p-6 rounded-xl border border-[rgba(255,231,231,0.46)] bg-linear-to-br from-[rgba(0,0,0,0.50)] to-[rgba(0,0,0,0.15)] shadow-[0_32px_40px_10px_rgba(5,5,46,0.25)]"
            style={{ backdropFilter: 'blur(25px)' }}
          >
            <p className="text-white/90 text-base md:text-lg leading-relaxed">
              Explore our About page, where we highlight our vibrant culture dedicated to fostering creativity and collaboration. We believe in empowering our team and clients alike, ensuring that every project reflects our passion for innovation and excellence.
            </p>
          </div>
        </div>
        {/* Left Side - Logo */}
        <div className="flex justify-center lg:justify-start">
            <img src={Logo} alt="Metmetric Logo" className="w-full h-auto lg:mt-32" />
        </div>

      

      </div>
        </div>
    </div>
    
  );
}

export default Header;