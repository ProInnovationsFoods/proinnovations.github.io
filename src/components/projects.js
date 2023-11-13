import './projects.css';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Projects = (props) => {
    const interval = 4000;
    const projects = [
        {
            name: 'Proyec 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique erat ex, vel fermentum metus tincidunt aliquet. Phasellus nibh magna, cursus bibendum elit in, pretium laoreet eros, mLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique erat ex, vel fermentum metus tincidunt aliquet. Phasellus nibh magna',
            images: ['/1.jpg','/2.jpg','/3.jpg'],
            shortDescription: 'Proyecto ubicado en el oriente',
            location: 'Rionegro'
        },
        {
            name: 'Proyec 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique erat ex, vel fermentum metus tincidunt aliquet. Phasellus nibh magna, cursus bibendum elit in, pretium laoreet eros, mLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique erat ex, vel fermentum metus tincidunt aliquet. Phasellus nibh magna',
            images: ['/4.jpg','/5.jpg','/6.jpg'],
            shortDescription: 'Proyecto ubicado en el oriente',
            location: 'La Ceja'
        },
        {
            name: 'Proyec 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique erat ex, vel fermentum metus tincidunt aliquet. Phasellus nibh magna, cursus bibendum elit in, pretium laoreet eros, mLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique erat ex, vel fermentum metus tincidunt aliquet. Phasellus nibh magna',
            images: ['/1.jpg','/2.jpg','/3.jpg'],
            shortDescription: 'Proyecto ubicado en el oriente',
            location: 'El Retiro'
        }
    ];

    const [actualProject, setActualProject] = useState(0);
    return (
        <div className="container-fluid projects" id='projects'>
            <div class='flex-row d-flex justify-content-center'>
                <h2 className='px-5 py-5'>Nuestros Proyectos destacados</h2>
            </div>
            <div className='row px-5'>
                <div className='col-sm-12 col-md-6 description-box'>
                    <div className='d-flex justify-content-around px-5 py-4'>
                        {projects.map((project, index) => {
                            return (
                                <button class="glow-on-hover" type="button" onClick={()=>{setActualProject(index)}}>{project.name}</button>
                            );
                        })}
                    </div>
                    <h2 className='title-description px-5 py-3 d-flex justify-content-center'>{projects[actualProject].name}</h2>
                    <p className='title-description px-5 d-flex justify-content-center text-justify'>
                        {projects[actualProject].description}
                    </p>
                    <p className='title-description d-flex justify-content-end px-5'>Ubicación: {projects[actualProject].location}</p>
                </div>
                <div className='col-sm-12 col-md-6 image-box mx-0 px-0'>
                    <Carousel fade interval={interval}>
                    {projects[actualProject].images.map((image) => {
                        return (
                            <Carousel.Item>
                                <img
                                className="image-carousel"
                                src={image}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>{projects[actualProject].name}</h3>
                                    <p>{projects[actualProject].shortDescription}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        );
                    })}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Projects;