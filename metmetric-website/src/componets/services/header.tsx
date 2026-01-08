import AdvancedNetworkBackground from "../../Animations/background2";

function Header() {

    return (
        <div className="relative min-h-screen">
            <AdvancedNetworkBackground />
                <div className="relative z-10 ">
                    <div className="pt-20 w-full flex flex-col justify-center items-center text-center ">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight px-6 md:px-12 lg:px-24 py-20">
                            Transform your online presence with our innovative digital solutions.
                        </h1>
                        <div className="p-6 rounded-xl border border-[rgba(255,231,231,0.46)] bg-linear-to-br from-[rgba(0,0,0,0.50)] to-[rgba(0,0,0,0.15)] shadow-[0_32px_40px_10px_rgba(5,5,46,0.25)] max-w-3xl mx-6 md:mx-12 lg:mx-24"
                            style={{ backdropFilter: 'blur(25px)' }}
                        >
                            <p className="text-white/90 text-base md:text-lg leading-relaxed py-2 mb-2">
                                Discover how MetMetric focuses on utility solutions, system architecture, and software development. Our skilled team creates innovative tools that improve your online presence, streamline operations, and boost user engagement, ensuring you excel in the digital landscape.
                            </p>
                            <button className="text-white font-semibold bg-linear-to-b from-[#15B5F8] to-[#1B33B8] hover:bg-none hover:bg-white hover:text-[#005fdb] hover:border-2 hover:border-[#005fdb] px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" >
                                Contact Us Today
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Header;