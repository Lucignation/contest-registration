import React from 'react';

import Footer from '../../components/Footer/Footer';

import Logo from '../../public/logo.png';
import CEO from '../../public/CEO.jpeg';

import './Landing.css';

export default function Landing(){
    return(
        <div className="container-fluid home-bg">
            <div className="brand">
                <img src={Logo} alt="company Logo" />
            </div>

            <div className="row welcme-message animate__animated animate__bounce">
                <h2 className="welcome-header">The Emerald Queen Contest Information</h2>

                <p className="founder-message">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
                <div className="row">
                    <div className="col founder-image-crop">
                        <img src={CEO} alt="CEO" />
                    </div>
                    <div className="col founder-name">
                        <h4>Oluwayemisi</h4>
                        <p>CEO, Emeralda Contest Limited</p>

                        <div className="company-social-media">
                        <i className="bi bi-twitter"></i>
                        <i className="bi bi-instagram"></i>
                    </div>
                    </div>
                </div>
            </div>
            <a href="/contest-registration" className="btn btn-secondary btn-sm registration-btn">Start Registration</a>

            <Footer />
        </div>
    )
}