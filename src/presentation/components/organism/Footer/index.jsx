import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube, faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

import gojekLogo from "assets/img/logo/gojek.svg";

const footerData = {
  company: [
    { label: "About", link: "/" },
    { label: "Product", link: "/" },
    { label: "Blog", link: "/" }
  ],
  join: [
    { label: "Driver Partner", link: "/" },
    { label: "Business Partner", link: "/" }
  ],
  career: [
    { label: "Student", link: "/" },
    { label: "Professional", link: "/" }
  ],
  contact: [
    { label: "Help", link: "/" },
    { label: "Our Location", link: "/" }
  ]
};

const Footer = () => {
  const renderFooterSection = (section) => (
    <div className="footer__container" key={section}>
      <p className="footer__title">{section}</p>
      <ul className="footer__list">
        {footerData[section].map((item, index) => (
          <li className="footer__item" key={index}>
            <Link to={item.link} className='footer__link'>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer__head">
          <img src={gojekLogo} alt="logo" />
        </div>
        <div className="footer__body">
          <div className="footer__menu">
            {Object.keys(footerData).map(renderFooterSection)}
            <div className="footer__container">
              <p className="footer__title">Connect with Us</p>
              <ul className="footer__list media ">
                <li className="footer__item icons">
                  <Link to="https://www.facebook.com" className='footer__link sosmed'><FontAwesomeIcon icon={faFacebookF} /></Link>
                </li>
                <li className="footer__item icons">
                  <Link to="https://www.twitter.com" className='footer__link sosmed'><FontAwesomeIcon icon={faTwitter} /></Link>
                </li>
                <li className="footer__item icons">
                  <Link to="https://www.instagram.com" className='footer__link sosmed'><FontAwesomeIcon icon={faInstagram} /></Link>
                </li>
                <li className="footer__item icons">
                  <Link to="https://www.youtube.com" className='footer__link sosmed'><FontAwesomeIcon icon={faYoutube} /></Link>
                </li>
              </ul>
              <div className="footer__download">
                <p className="footer__title">Download the App</p>
                <div className="footer__store">
                  <div className="footer__store__item">
                    <Link to="https://www.apple.com/app-store/" target="_blank" className='footer__link store'>
                      <FontAwesomeIcon icon={faApple} />
                    </Link>
                  </div>
                  <div className="footer__store__item">
                    <Link to="https://play.google.com/store" target="_blank" className='footer__link store'>
                      <FontAwesomeIcon icon={faGooglePlay} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__section">
            <div className="footer__wrapper">
              <ul className="footer__list section">
                <li className="footer__section__item">
                  <Link className="footer__link section" to="/en-id/privacy-policies">Privacy Notice</Link>
                </li>
                <li className="footer__section__item">
                  <Link className="footer__link section" to="/en-id/terms-and-conditions">Terms & Conditions</Link>
                </li>
                <li className="footer__section__item">
                  <Link className="footer__link section" to="/en-id/data-provider-attribution">Data Attribution</Link>
                </li>
                <li className="footer__section__item ">
                 <Link className="footer__link section" to="/en-id/data-provider-attribution">Cookie Settings</Link>
                </li>
              </ul>
              <div className="footer__dropdown location">
                <div className="dropdown_container">
                  <button  type="button" className='footer__dropdown__btn'>
                  <select>
                    <option value="indonesia">Indonesia</option>
                    <option value="singapore">Singapore</option>
                    <option value="vietnam">Vietnam</option>
                  </select>
                  </button>
                </div>
              </div>
              <div className="footer__dropdown language">
              <div className="dropdown_container">
                <button type='button' className='footer__dropdown__btn'>
                  <select>
                    <option value="english">English</option>
                    <option value="indonesia">Indonesia</option>
                  </select>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <p className="footer__copyright__txt">2023 Gojek | Gojek is a brand owned by PT GoTo Gojek Tokopedia Tbk. Registered with the Directorate General of Intellectual Property of the Republic of Indonesia.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
