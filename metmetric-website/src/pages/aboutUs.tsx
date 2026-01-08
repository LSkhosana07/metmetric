import Header from "../componets/aboutUs/header";
import Navbar from "../componets/global/navbar";
import CTA from "../componets/global/cta";
import Footer from "../componets/global/footer";
import Mission from "../componets/aboutUs/mission";
import Values from "../componets/aboutUs/values";
import Timelime from "../componets/aboutUs/timeline";

function AboutUs() {
  return (
    <>
    <div>
        <Navbar />
        <Header />
        <Mission />
        <Values />
        <Timelime />
        <CTA />
        <Footer />
    </div>
    </>
  );
}

export default AboutUs;