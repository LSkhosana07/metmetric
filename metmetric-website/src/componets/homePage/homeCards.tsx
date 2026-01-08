import NetworkBackground from "../../Animations/network";
import { serviceCards } from "../../Arrays/arrays";

    
function HomeCards() {
    return (
        <div className="relative min-h-screen">
            {/* Background - will be fixed and behind everything */}
            <NetworkBackground />
            
            {/* Content - must be relative with z-10 to appear above background */}
            <div className="relative z-10">
                <div className="heading">
                    <h1 className="text-4xl md:text-6xl font-semibold mb-6 mt-12 text-center text-white ">Our Services</h1>
                </div>
                <div className="home-cards-section flex flex-col md:flex-row gap-8 justify-center items-stretch py-20 px-12">
                {serviceCards.map((card, index) => (
                    <div
                    key={index}
                    className="home-card h-full sm:min-h-150 sm:max-h-150 flex  flex-col rounded-xl border border-white/46 shadow-[0_32px_40px_10px_rgba(5,5,46,0.25)] p-6 py-28 w-full max-w-sm text-center text-white hover:scale-105 transition-transform duration-300"
                    style={{
                        backdropFilter: 'blur(25px)',
                        background:
                        'linear-gradient(131deg, rgba(0, 0, 0, 0.50) 12.76%, rgba(0, 0, 0, 0.15) 78.74%)',
                    }}
                    >
                    <img src={card.image} alt={card.title} className="mx-auto h-20 mb-12 sm:h-36" />
                    <h2 className="text-2xl font-semibold mb-4">{card.title}</h2>
                    <p className="text-base">{card.description}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default HomeCards;