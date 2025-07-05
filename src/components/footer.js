import React from 'react';
import './footer.css';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Footer = () => {
 
  return (
    <footer class="ng-footer ng-footer-simple">
        <section class="ng-footer-contact">
            <div class="ng-footer-links ng-footer-section">
				<img src="/logo_metalizado.png" alt="Something went wrong" className='img-footer grow'/>
            </div>

            <div class="ng-footer-address ng-footer-section">
                <ul>
                    <li>7255 NW 68th St, Ste 1 Unit 1, Miami, FL 33166, USA</li>
                    <li>victor.monsalve@proinnoventions.co</li>
                    <li>+17862468833</li>
                </ul>
            </div>
            <div class="ng-footer-social-icons ng-footer-section">
                <p></p>
                <a href='https://api.whatsapp.com/send?phone=17862468833'><FontAwesomeIcon icon={faWhatsapp} size="4x"/></a>
            </div>
        </section>
    </footer>
  );
};
