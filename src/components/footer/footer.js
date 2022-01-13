import React from 'react';
import {TelephoneFill, EnvelopeFill, Facebook, Twitter, Linkedin} from 'react-bootstrap-icons';
import './footer.css';

const Footer = () => {
    const goToPage = (url) => {
        window.open(url, '_blank');
    }

    return (
    <footer className="container-fluid">
        <div className="row">
            <div className="col-sm-4">
                <h2>Address</h2>
                <address>
                    <p>Washington District of Columbia USA</p>
                    <div className="links-style">
                        <a href="tel:87871843171" className="link-style"><TelephoneFill /> 87871843171</a>
                    </div>
                    <div className="links-style">
                        <a href="mail:rl@domain.com" className="link-style"><EnvelopeFill /> rl@domain.com</a>
                    </div>
                </address>
            </div>
            <div className="col-sm-4">
                <p className="copyright">&copy; Copyright {new Date().getFullYear()}</p>
            </div>
            <div className="col-sm-4">
                <div className="social-medias">
                    <Facebook className="social-media" size={30} onClick={() => goToPage('https://www.facebook.com/')}/>
                    <Twitter className="social-media" size={30} onClick={() => goToPage('https://twitter.com/')}/>
                    <Linkedin className="social-media" size={30} onClick={() => goToPage('https://www.linkedin.com/')}/>
                </div>
            </div>
        </div>
    </footer>)
}

export default Footer;