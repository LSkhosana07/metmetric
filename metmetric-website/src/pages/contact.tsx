import Navbar from "../componets/global/navbar";
import Footer from "../componets/global/footer";
import AdvancedNetworkBackground from "../Animations/background2";

function Contact() {
    return (
        <>
            <Navbar />
            <div className="relative min-h-screen">
                <AdvancedNetworkBackground />
                <div className="relative z-10 ">
                    <div className="w-full pt-40 flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-20">
                        <h1 className="text-white text-4xl md:text-5xl font-semibold mb-6 text-center">Get in touch with us today</h1>
                        <div 
                            className="p-6 rounded-xl border border-[rgba(255,231,231,0.46)] bg-linear-to-br from-[rgba(0,0,0,0.50)] to-[rgba(0,0,0,0.15)] shadow-[0_32px_40px_10px_rgba(5,5,46,0.25)] max-w-4xl w-full"
                            style={{ backdropFilter: 'blur(25px)' }}
                        >
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-white mb-2">Name & Surname</label>
                                    <input type="text" id="name" name="name" className="w-full p-3 rounded-lg border border-white/30 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-white mb-2">Email</label>
                                    <input type="email" id="email" name="email" className="w-full p-3 rounded-lg border border-white/30 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-white mb-2">Mobile</label>
                                    <input type="tel" id="phone" name="phone" className="w-full p-3 rounded-lg border border-white/30 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-white mb-2">Message</label>
                                    <textarea id="message" name="message" rows={5} className="w-full p-3 rounded-lg border border-white/30 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                                </div>
                                <div className="flex justify-center">
                                    <button type="submit" className="w-full max-w-96 py-3 px-3.5 font-semibold rounded-[3rem] text-white bg-linear-to-b from-[#15B5F8] to-[#1B33B8] hover:bg-none hover:bg-white hover:text-[#005fdb] hover:border-2 hover:-[#005fdb] transition-colors duration-300">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contact;