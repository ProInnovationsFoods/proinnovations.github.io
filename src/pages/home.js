import { VideoIntro } from "../components/video";
import { ContactUs } from "../components/contact-us";
import { Footer } from "../components/footer";
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
                <OurServices/>
                {/* <Projects/> */}
                <ContactUs/>
                <Footer/>
            </main>
        </>
    );
};

export default Home;
