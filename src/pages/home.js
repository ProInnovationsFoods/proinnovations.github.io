import { VideoIntro } from "../components/video";
import { ContactUs } from "../components/contact-us";
import { Footer } from "../components/footer";
import { About } from "../components/about";
import { WhatsappButton } from "../components/whatsapp-button";
import { OurServices } from "../components/our_services";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import Services from "../components/services";
import './home.css';


const Home = (props) => {
    return (
        <>
            <Navbar/>
            <main>
                <VideoIntro/>
                {/* <Services/> */}
                <About/>
                <OurServices/>
                {/* <Projects/> */}
                {/* <ContactUs/> */}
                <Footer/>
                <WhatsappButton/>
            </main>
        </>
    );
};

export default Home;
