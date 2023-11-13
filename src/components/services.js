import './services.css';

const Services = (props) => {
    return (
            <main className='services' id='services'>
                {/* <video autoPlay='true' className='home' loop muted='true'>
                    <source src="/efecto.mp4" type="video/mp4"></source>
                </video> */}
                <section className='container'>
                    <div>
                        <div class='flex-row d-flex justify-content-center'>
                            <h1 className='px-5 py-5 title-services'>OUR SERVICES</h1>
                        </div>
                        <div class="row">
                            <div class="box col-12 col-md-6" id="image-one">
                                <div class="overlay">
                                    <div class="title">
                                        Revolutionize your workflow with our specialized Conveyor Belt Design service. At PRO INNOVATIONS, we understand the pivotal role that seamless material handling plays in your operations. Our dedicated team of designers is committed to crafting tailored conveyor solutions that optimize efficiency, minimize downtime, and enhance overall productivity. 
                                    </div>
                                </div>
                            </div>
                            <div class="box col-12 col-md-6" id="image-two">
                                <div class="overlay">
                                    <div class="title">
                                    Embrace a future of streamlined efficiency and unparalleled productivity with our Process Automation service. At PRO INNOVATIONS, we understand the importance of seamless workflow orchestration. Our expert team is dedicated to tailoring automation solutions that empower your business, reducing manual intervention, enhancing accuracy, and unlocking new levels of operational excellence. Experience the competitive edge of innovation – choose PRO INNOVATIONS for top-tier process automation that propels your organization into the next era of success.
                                    </div>
                                </div>
                            </div>
                            <div class="box col-12 col-md-6" id="image-three">
                                <div class="overlay">
                                    <div class="title">
                                    Step into a world of unparalleled craftsmanship with our specialized service in the Design and Manufacture of Metal-Mechanical solutions. At PRO INNOVATIONS, we bring your visions to life, blending cutting-edge design with meticulous manufacturing expertise. Whether it's intricate components or robust structures, our seasoned team is committed to delivering bespoke solutions that redefine excellence. Choose PRO INNOVATIONS for a seamless fusion of innovation and quality in every metal-mechanical creation, ensuring your projects soar to new heights.
                                    </div>
                                </div>
                            </div>
                            <div class="box col-12 col-md-6" id="image-four">
                                <div class="overlay">
                                    <div class="title">
                                    Embark on a journey of unrivaled quality and reliability with our Engineering Parts service. At PRO INNOVATIONS, we take pride in delivering meticulously crafted components that stand as the backbone of your projects. Our commitment to precision engineering ensures that every part meets and exceeds industry standards, guaranteeing optimal performance and durability. From concept to creation, trust PRO INNOVATIONS to be your partner in success, providing engineering parts that elevate the integrity and efficiency of your projects.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

    );
};

export default Services;