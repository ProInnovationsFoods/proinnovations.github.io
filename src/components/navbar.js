import './navbar.css';
import { useState } from 'react';

const Navbar = (props) => {
    const [checked, setChecked] = useState(false);
    
    return (
            <nav className="sticky navbar fixed-top">
                <div className="brand  display__logo">
                    <a href="#top" className="nav__link"> <img src='/logo_naranja.png' className='img-navbar' alt='Something wrong'></img></a>
                </div>

                <input type="checkbox" id="nav" className="hidden" checked={checked} />
                <label for="nav" className="nav__open" onClick={() => {
                        let value = checked? false: true; 
                        setChecked(value)
                    }
                    }><i></i><i></i><i></i></label>
                <div className="nav">
                    <ul className="nav__items">
                        <li className="nav__item"><a href="#home" className="nav__link" onClick={()=>{setChecked(false)}}>HOME</a></li>
                        <li className="nav__item"><a href="#services" className="nav__link" onClick={()=>{setChecked(false)}}>SERVICES</a></li>
                        {/* <li className="nav__item"><a href="#projects" className="nav__link" onClick={()=>{setChecked(false)}}>PROJECTS</a></li> */}
                        <li className="nav__item"><a href="#contact-us" className="nav__link" onClick={()=>{setChecked(false)}}>CONTACT US</a></li>
                    </ul>
                </div>
            </nav>
    );
};

export default Navbar;
