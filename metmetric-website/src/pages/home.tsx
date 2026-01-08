import Navbar from "../componets/global/navbar";
import Hero from "../componets/homePage/hero";
import Slider from "../componets/homePage/slider";
import HomeCards from "../componets/homePage/homeCards";
import FeaturedCards from "../componets/homePage/projects";
import ClientShowcase from "../componets/homePage/clients";
import CTA from "../componets/global/cta";
import Footer from "../componets/global/footer";

function Home() {

    return (  
    <>
    <div style={{background:"var(--Background, linear-gradient(116deg, #0E49B4 12.44%, #132967 57.89%, #081749 100.87%))", backgroundRepeat: "no-repeat",}}>
        <div>
        <Navbar />
        <Hero />
        <Slider />
        </div>
    </div>
    <HomeCards />
    <div style={{background:"var(--Background, linear-gradient(116deg, #0E49B4 12.44%, #132967 57.89%, #081749 100.87%))", backgroundRepeat: "no-repeat",}}>
        <FeaturedCards />
    </div>
    <ClientShowcase />
     <div style={{background:"var(--Background, linear-gradient(116deg, #0E49B4 12.44%, #132967 57.89%, #081749 100.87%))", backgroundRepeat: "no-repeat",}}>
        <CTA />
    </div>
    <div style={{background:"var(--Background, linear-gradient(116deg, #0E49B4 12.44%, #132967 57.89%, #081749 100.87%))", backgroundRepeat: "no-repeat",}}>
        <Footer />
    </div>
    </> 
    )
}


export default Home;
    