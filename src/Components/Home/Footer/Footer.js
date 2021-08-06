import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        { name: "Wedding template", link: "/Template" },
        { name: "Event template", link: "/Template" },
        { name: "Portrait template", link: "/Template" },
        { name: "Sports template", link: "/Template" },
        { name: "Sports template", link: "/Template" },
        { name: "Editorial template", link: "/Template" },
        { name: "Product template", link: "/Template" },
        { name: "Architectural template", link: "/Template" },
        { name: "Fine Art template", link: "/Template" },

    ]
    const ourAddress = [
        { name: "London - 101010 Seabeach", link: "//google.com/map" },
        { name: "Yards", link: "//google.com/map" },

    ]
    const Support = [
        { name: "Help Center", link: "/help-Center" },
        { name: "Report Spam", link: "/Report-spam" },
        { name: "Sitemap", link: "/Sitemap" },
        { name: "Knowledgebase", link: "/knowledgebase" },
        { name: "Become an author", link: "/author" },
    ]
    const services = [
        { name: "Wedding Photography", link: "/Event" },
        { name: "Event Photography", link: "/Event" },
        { name: "Portrait Photography", link: "/Event" },
        { name: "Fashion Photography", link: "/Eventv" },
        { name: "Sports Photography", link: "/Event" },
        { name: "Editorial Photography", link: "/Editorial-Photography" },
        { name: "Product Photography", link: "/Product-Photography" },
        { name: "Architectural Photography", link: "/Architectural-Photography" },
        { name: "Fine Art Photography", link: "/Fine-Art-Photography" }
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Products"} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Our Services" menuItems={services} />
                    <FooterCol key={3} menuTitle="Support" menuItems={Support} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-brand text-light">+224433356</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center  p-4">
                    <p>&#169; Copyright Author siam {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;