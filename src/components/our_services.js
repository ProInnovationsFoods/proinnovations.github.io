import './our_services.css';
import { CarouselImages } from "./carousel.js";

export const OurServices = () => {
 
    return (
        <div id='services'>
            <section className='container'>
                <div class='flex-row d-flex justify-content-center'>
                    <h1 className='mt-3 mb-3 title-services-section'>OUR SERVICES</h1>
                </div>
                <ul class="cards">
                    <li class="cards__item">
                        <div class="card">
                            <CarouselImages images={['/service1.jpeg','/service2.png','/service3.png']}></CarouselImages>
                        <div class="card__content">
                            <div class="card__title mb-3 justify-content-center">Conveyor Belt Design service</div>
                            <p class="card__text">At PRO INNOVENTIONS, we understand that the heart of many industries relies on efficient material handling. Our Conveyor Belt Design Service ensures seamless and reliable transportation solutions tailored to your specific needs. From concept to execution, we engineer conveyor systems that optimize workflow, enhance productivity, and minimize downtime.</p>
                        </div>
                        </div>
                    </li>
                    <li class="cards__item">
                        <div class="card">
                        {/* <div class="card__image card__image--service2"></div> */}
                            <CarouselImages images={['/proccess_automation_service-transformed.jpeg']}></CarouselImages>
                        <div class="card__content d-flex">
                            <div class="card__title mb-3 justify-content-center">Process Automation service</div>
                            <p class="card__text">Embrace the future of manufacturing with our cutting-edge Process Automation Service. We specialize in designing and implementing automation solutions that streamline your operations, increase efficiency, and reduce costs. Our team of experts harnesses the power of technology to create bespoke automation systems, ensuring your processes run seamlessly and your business thrives in the modern era.</p>
                        </div>
                        </div>
                    </li>
                    <li class="cards__item">
                        <div class="card">
                        {/* <div class="card__image card__image--service3"></div> */}
                            <CarouselImages images={['/manufacture_1_transformed.png', '/manufacture_2_transformed.png', '/manufacture_3_transformed.png', 'manufacture_4.jpeg']}></CarouselImages>
                        <div class="card__content">
                            <div class="card__title mb-3">Manufacture of Metal-Mechanical solutions</div>
                            <p class="card__text">Precision and durability are the cornerstones of our Manufacture of Metal-Mechanical Solutions. Whether it's custom machinery components, structural elements, or intricate parts, we leverage advanced manufacturing techniques to produce high-quality metal-mechanical solutions. From concept to fabrication, we take pride in delivering products that meet the highest industry standards.</p>
                        </div>
                        </div>
                    </li>
                    <li class="cards__item">
                        <div class="card">
                            <CarouselImages images={['/engineering_parts-transformed.jpeg','/engineering_parts_2_transformed.png']}></CarouselImages>
                        <div class="card__content">
                            <div class="card__title mb-3 justify-content-center">Engineering Parts service</div>
                            <p class="card__text ">Detail-oriented and client-focused, our Engineering Parts Service is dedicated to providing you with the exact components your project demands. Our skilled engineers work closely with you to understand your specifications, ensuring that the parts we produce not only meet but exceed your expectations. From prototypes to mass production, we deliver precision-engineered parts for a wide range of applications.</p>
                        </div>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
};
  
