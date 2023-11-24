import './our_services.css';

export const OurServices = () => {
 
    return (
        <div id='services'>
            <section className='container'>
                {/* <div>
                    <div class='flex-row d-flex justify-content-center'>
                        <h1 className='mt-3 mb-3 title-services-section'>OUR SERVICES</h1>
                    </div>
                    <div>
                        <div class="row mt-3 mb-3">
                            <div className='col-md-6 col-12 mt-3 mb-3'>
                                <img src="/service1.jpeg" alt="Something went wrong" className='img-services'/>
                            </div>
                            <div className='col-md-6 col-12 title-services mt-3 mb-3 text-justify'>
                                <p>Revolutionize your workflow with our specialized Conveyor Belt Design service. At PRO INNOVATIONS, we understand the pivotal role that seamless material handling plays in your operations. Our dedicated team of designers is committed to crafting tailored conveyor solutions that optimize efficiency, minimize downtime, and enhance overall productivity. Experience a new era of precision and reliability – choose PRO INNOVATIONS for cutting-edge conveyor belt designs that propel your business forward.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="row">
                            <div className='col-md-6 col-12 mt-3 mb-3'>
                                <img src="/service2.png" alt="Something went wrong" className='img-services'/>
                            </div>
                            <div className='col-md-6 col-12 title-services mt-3 mb-3 text-justify'>
                                <p>Embrace a future of streamlined efficiency and unparalleled productivity with our Process Automation service. At PRO INNOVATIONS, we understand the importance of seamless workflow orchestration. Our expert team is dedicated to tailoring automation solutions that empower your business, reducing manual intervention, enhancing accuracy, and unlocking new levels of operational excellence. Experience the competitive edge of innovation – choose PRO INNOVATIONS for top-tier process automation that propels your organization into the next era of success.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="row">
                            <div className='col-md-6 col-12 mt-3 mb-3'>
                                <img src="/service3.png" alt="Something went wrong" className='img-services'/>
                            </div>
                            <div className='col-md-6 col-12 title-services mt-3 mb-3 text-justify'>
                                <p>Step into a world of unparalleled craftsmanship with our specialized service in the Design and Manufacture of Metal-Mechanical solutions. At PRO INNOVATIONS, we bring your visions to life, blending cutting-edge design with meticulous manufacturing expertise. Whether it's intricate components or robust structures, our seasoned team is committed to delivering bespoke solutions that redefine excellence. Choose PRO INNOVATIONS for a seamless fusion of innovation and quality in every metal-mechanical creation, ensuring your projects soar to new heights.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="row">
                            <div className='col-md-6 col-12 mt-3 mb-3'>
                                <img src="/service4.jpg" alt="Something went wrong" className='img-services'/>
                            </div>
                            <div className='col-md-6 col-12 title-services mt-3 mb-3 text-justify'>
                                <p>Embark on a journey of unrivaled quality and reliability with our Engineering Parts service. At PRO INNOVATIONS, we take pride in delivering meticulously crafted components that stand as the backbone of your projects. Our commitment to precision engineering ensures that every part meets and exceeds industry standards, guaranteeing optimal performance and durability. From concept to creation, trust PRO INNOVATIONS to be your partner in success, providing engineering parts that elevate the integrity and efficiency of your projects.</p>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div class='flex-row d-flex justify-content-center'>
                    <h1 className='mt-3 mb-3 title-services-section'>OUR SERVICES</h1>
                </div>
                <ul class="cards">
                    <li class="cards__item">
                        <div class="card">
                        <div class="card__image card__image--service1"></div>
                        <div class="card__content">
                            <div class="card__title">Conveyor Belt Design service</div>
                            <p class="card__text">Revolutionize your workflow with our specialized Conveyor Belt Design service. At PRO INNOVATIONS, we understand the pivotal role that seamless material handling plays in your operations. Our dedicated team of designers is committed to crafting tailored conveyor solutions that optimize efficiency, minimize downtime, and enhance overall productivity. Experience a new era of precision and reliability – choose PRO INNOVATIONS for cutting-edge conveyor belt designs that propel your business forward.</p>
                        </div>
                        </div>
                    </li>
                    <li class="cards__item">
                        <div class="card">
                        <div class="card__image card__image--service2"></div>
                        <div class="card__content">
                            <div class="card__title">Process Automation service</div>
                            <p class="card__text">Embrace a future of streamlined efficiency and unparalleled productivity with our Process Automation service. At PRO INNOVATIONS, we understand the importance of seamless workflow orchestration. Our expert team is dedicated to tailoring automation solutions that empower your business, reducing manual intervention, enhancing accuracy, and unlocking new levels of operational excellence. Experience the competitive edge of innovation – choose PRO INNOVATIONS for top-tier process automation that propels your organization into the next era of success.</p>
                        </div>
                        </div>
                    </li>
                    <li class="cards__item">
                        <div class="card">
                        <div class="card__image card__image--service3"></div>
                        <div class="card__content">
                            <div class="card__title">Manufacture of Metal-Mechanical solutions</div>
                            <p class="card__text">Step into a world of unparalleled craftsmanship with our specialized service in the Design and Manufacture of Metal-Mechanical solutions. At PRO INNOVATIONS, we bring your visions to life, blending cutting-edge design with meticulous manufacturing expertise. Whether it's intricate components or robust structures, our seasoned team is committed to delivering bespoke solutions that redefine excellence. Choose PRO INNOVATIONS for a seamless fusion of innovation and quality in every metal-mechanical creation, ensuring your projects soar to new heights.</p>
                        </div>
                        </div>
                    </li>
                    <li class="cards__item">
                        <div class="card">
                        <div class="card__image card__image--service4"></div>
                        <div class="card__content">
                            <div class="card__title">Engineering Parts service</div>
                            <p class="card__text">Embark on a journey of unrivaled quality and reliability with our Engineering Parts service. At PRO INNOVATIONS, we take pride in delivering meticulously crafted components that stand as the backbone of your projects. Our commitment to precision engineering ensures that every part meets and exceeds industry standards, guaranteeing optimal performance and durability. From concept to creation, trust PRO INNOVATIONS to be your partner in success, providing engineering parts that elevate the integrity and efficiency of your projects.</p>
                        </div>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
};
  
