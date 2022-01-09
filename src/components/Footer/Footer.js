import React from "react";
import fbIcon from "../../assets/icons/fb_icon.png";
import instagramIcon from "../../assets/icons/instagram_icon.png";
import linkedinIcon from "../../assets/icons/linkedin_icon.png";
import twitterIcon from "../../assets/icons/twitter_icon.png";
import byteSlack from "../../assets/logos/byteslack_logo.svg";
import { contactAll, servicesKnowledgeAll } from "../../data/footerData";
import "./Footer.scss";


const Footer = () => {
  const DataSingleColDetails = ({ singleDetail }) => {
    return (
      <li className="footer_services_item">
        <a href={singleDetail.link}> {singleDetail.name} </a>
      </li>
    );
  };

  const DataSingleColAll = ({ id, dataSingle }) => {
    let opacity;

    if (dataSingle.title === "none") {
      opacity = 0;
    } else {
      opacity = 1;
    }
    return (
      <div className="col-6 col-md-3 footer_menu_col">
        <p style={{ opacity: opacity }} className="footer_heading">
          {dataSingle.title}
        </p>
        <div className="footer_services">
          <ul className="footer_services_list">
            {dataSingle.details.map((singleDetail) => (
              <DataSingleColDetails key={singleDetail.id} singleDetail={singleDetail} />
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <footer className="footer_section container_custom">
      <div className="row">
        <div className="col-md-3 col-12 footer_company">
          <img className="footer_logo" src={byteSlack} alt="byteslack_logo" />
          <div className="footer_socials">
            <a className="footer_social_link" href="#" target="_blank">
              <img src={fbIcon} width="26" height="26" alt="fb_icon" />
            </a>
            <a className="footer_social_link" href="#" target="_blank">
              <img src={linkedinIcon} width="26" height="26" alt="fb_icon" />
            </a>
            <a className="footer_social_link" href="#" target="_blank">
              <img src={twitterIcon} width="26" height="26" alt="fb_icon" />
            </a>
            <a className="footer_social_link" href="#" target="_blank">
              <img src={instagramIcon} width="26" height="26" alt="fb_icon" />
            </a>
          </div>
        </div>
        <div className="col-md-9 col-12">
          <div className="row">
            {/* <div className="col-6 col-md-3 footer_menu_col">
                            <p className="footer_heading">
                                Services
                            </p>
                            <div className="footer_services">
                                <ul className="footer_services_list">
                                    <li className="footer_services_item">
                                        <a href="#">Web Development</a>
                                    </li>
                                    <li className="footer_services_item">
                                        <a href="#">Web Development</a>
                                    </li>
                                    <li className="footer_services_item">
                                        <a href="#">Web Development</a>
                                    </li>
                                    <li className="footer_services_item">
                                        <a href="#">Web Development</a>
                                    </li>
                                    <li className="footer_services_item">
                                        <a href="#">Web Development</a>
                                    </li>
                                    <li className="footer_services_item">
                                        <a href="#">Web Development</a>
                                    </li>
                                    <li className="footer_services_item">
                                        <a href="#">Web Development</a>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
            {servicesKnowledgeAll.map((dataSingle) => (
              <DataSingleColAll
                key={dataSingle.id}
                id={dataSingle.id}
                dataSingle={dataSingle}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="row footer_contact_row">
        <div className="col-12 col-md-3">
          <div className="footer_contact">
            <p className="footer_heading">Drop us a line:</p>
            <span className="contact_form_mail">
              <a href="mailto:info@byteslack.io">info@byteslack.io</a>
            </span>
          </div>
        </div>
        <div className="col-12 col-md-9">
          <div className="row">
            {contactAll.map((dataSingle) => (
              <DataSingleColAll
                key={dataSingle.id}
                id={dataSingle.id}
                dataSingle={dataSingle}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="footer_bottom">
          <div className="row">
              <div className="col-12 col-md-6">
                  <div className="footer_copyrights">
                      <span>{new Date().getFullYear()} ByteSlack, Inc.</span>
                      <span className="footer_bottom_item_copyBefore">
                          All rights reserved
                      </span>
                  </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="footer_links">
                    <a className="footer_bottom_item" href="https://www.google.com/">EU Funds</a>
                    <a className="footer_bottom_item_linksBefore" href="https://www.google.com/">Privacy policy</a>
                    <a className="footer_bottom_item_linksBefore" href="https://www.google.com/">Terms of service</a>
                </div>
              </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
