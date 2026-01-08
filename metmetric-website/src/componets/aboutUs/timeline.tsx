import AdvancedNetworkBackground from "../../Animations/background2";
import Logo from "../../assets/Met-L.svg";

function Timelime() {
  return (
    <div className="relative min-h-screen">

      <AdvancedNetworkBackground />
        <div className="relative z-10 ">
            <div className="   w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-20">
                <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 text-center">Find out more about our history</h1>
                <div className=" flex flex-col lg:flex-row items-center justify-center gap-8">
                    <img src={Logo} alt="Metmetric Logo" className=" w-full lg:w-1/2  mt-8 mb-8" />
                    <div className="lg:hidden p-6 w-full lg:w-1/2 rounded-xl border border-[rgba(255,231,231,0.46)] bg-linear-to-br from-[rgba(0,0,0,0.50)] to-[rgba(0,0,0,0.15)] shadow-[0_32px_40px_10px_rgba(5,5,46,0.25)]"
                        style={{ backdropFilter: 'blur(25px)' }}
                      >
                        <p className="text-white/90 text-base md:text-lg leading-relaxed">
                          MetMetric was established in 2018 with a core belief that cutting-edge technology can transform traditional industries. Starting with a small, dedicated team, we have grown into a cohesive family of more than 30 highly skilled professionals who are passionate about pushing boundaries. From the beginning, our focus has been to take operations from the “stone age” of legacy systems to a future where real-time data, artificial intelligence, and robust software integrations empower our clients. <br /> <br />
                          Over the years, we have continuously sought out interesting and exciting projects that test the limits of innovation. Our passion for research and development drives us to create bespoke solutions for complex challenges - whether it’s integrating medical imaging systems in hospitals or implementing advanced energy management systems in commercial developments. At MetMetric, we don’t just build technology; we craft solutions that shape the future of how the world and data interact. <br /><br />
                          We place a strong emphasis on people - from the dedicated colleagues who bring our ideas to life, to the clients we serve. Our collaborative culture encourages continuous learning, experimentation, and a relentless quest for excellence. This blend of technical expertise and human-centric values sets MetMetric apart as a leader in integrated technology solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
}

export default Timelime;