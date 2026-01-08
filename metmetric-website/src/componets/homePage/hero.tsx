import Logo from "../../assets/Logo.svg";


function Hero() {

    return (  
    <>
        <div className="hero-section flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-24 pt-40 md:pt-32 lg:pt-40 justify-between text-white py-12 md:py-16 lg:py-20 px-6 md:px-10 lg:px-12">
            <div className="hero-text text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 gap-3">
                    Elevate Your <span className="text-blue-400"> Digital<br />Experience</span> With
                </h1>
                <img className="w-48 sm:w-56 md:w-64 lg:w-xl mt-8 mb-6 mx-auto lg:mx-0" src={Logo} alt="Metmetric Logo" />
            </div>
            <div className="w-full max-w-xl lg:max-w-2xl self-stretch flex flex-col p-6 md:p-8 lg:p-9 rounded-xl border border-white/46 shadow-[0_32px_40px_10px_rgba(5,5,46,0.25)]"
                style={{
                    backdropFilter: 'blur(25px)',
                    background: 'linear-gradient(131deg, rgba(0, 0, 0, 0.50) 12.76%, rgba(0, 0, 0, 0.15) 78.74%)'
                }}
                >
                <p className="text-base md:text-lg lg:text-xl font-normal text-white">
                    Welcome to Metmetric, your reliable partner in innovative IT services, cutting-edge design, and seamless development. Our tailored solutions meet your unique business needs for a transformative experience. Discover the future of technology with Metmetric, where creativity and functionality converge.               
                </p>
                <button className="
                    w-full max-w-xs md:max-w-sm lg:max-w-md mt-6 md:mt-8 flex justify-center items-center
                    px-4 py-3 md:px-5 md:py-3.5 lg:px-3.5 lg:py-2.5 rounded-[3rem]
                    text-sm md:text-base text-white
                    bg-linear-to-b from-[#15B5F8] to-[#1B33B8]
                    hover:bg-none hover:bg-white
                    hover:text-[#005fdb] hover:border-2 hover:border-[#005fdb]
                    transition font-semibold
                    ">
                    Enhance your business today
                    </button>
            </div>
        </div>
    </> 
    )
}


export default Hero;