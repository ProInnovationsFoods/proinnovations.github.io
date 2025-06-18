import React from 'react';
import './footer.css';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
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
                    <li>victor.monsalve@proinnoventions.co</li>
                    <li>Victor Monsalve</li>
                    <li>7255 NW 68TH ST STE 1 UNIT 1</li>
                    <li>Miami, FL 33166-3015</li>
                    <li>United States</li>
                    <li>(+1) 7862468833</li>
                </ul>
            </div>
            <div class="ng-footer-social-icons ng-footer-section">
                <p>Follow us</p>
                <a href='https://api.whatsapp.com/send?phone=17862468833'><FontAwesomeIcon icon={faInstagram} size="4x"/></a>
                <a href='https://api.whatsapp.com/send?phone=17862468833'><FontAwesomeIcon icon={faFacebook} size="4x"/></a>
                <a href='https://api.whatsapp.com/send?phone=17862468833'><FontAwesomeIcon icon={faWhatsapp} size="4x"/></a>
            </div>
        </section>
    </footer>
  );
};
