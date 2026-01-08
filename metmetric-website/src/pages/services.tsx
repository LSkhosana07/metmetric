import Navbar from "../componets/global/navbar";
import CTA from "../componets/global/cta";
import Footer from "../componets/global/footer";
import Header from "../componets/services/header";
import Banner from "../componets/services/banner";
import ServicesCards from "../componets/services/serviceCards";

function Services() {
  return (
    <>
    <div>
        <Navbar />
        <Header />
        <Banner />
        <ServicesCards />
        <CTA />
        <Footer />
    </div>
    </>
  );
}

export default Services;