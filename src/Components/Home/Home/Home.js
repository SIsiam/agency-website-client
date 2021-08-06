import React from 'react';
import NavBar from '../Navbar/NavBar';
import Header from '../Header/Header';
import LatestWork from '../LatestWork/LatestWork';
import Services from '../Services/Services';
import SponsorShip from '../SponsorShip/SponsorShip';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';


const Home = () => {

    return (
        <div>
            <NavBar />
            <Header />
            <Services />
            <LatestWork />
            <SponsorShip />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;