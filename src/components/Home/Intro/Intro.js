import React, { useEffect, useState } from "react";
import blueListStyle from "../../../assets/icons/blue_list_style.svg";
import doubleBox from "../../../assets/icons/doubleBox.svg";
import doubleCircle from "../../../assets/icons/doubleCircle.svg";
import doubleTriangle from "../../../assets/icons/doubleTriangle.svg";
import greenListStyle from "../../../assets/icons/green_list_style.svg";
import orangeListStyle from "../../../assets/icons/orange_list_style.svg";
import introImg from "../../../assets/images/intro_img.png";
import "../../../global/style.scss";
import "./Intro.scss";

const introServices = [
  {
    color: "blue",
    titleIcon: doubleBox,
    title: "Enterprise",
    listStyle: blueListStyle,
    services: [
      "Managed IT Services",
      "Application modernization",
      "Dedicated development team",
    ],
  },
  {
    color: "green",
    titleIcon: doubleCircle,
    title: "SMB",
    listStyle: greenListStyle,
    services: [
      "IT Consulting",
      "IT Infrastructure Services",
      "Custom Software Development",
    ],
  },
  {
    color: "orange",
    titleIcon: doubleTriangle,
    title: "Startups",
    listStyle: orangeListStyle,
    services: ["Discovery phase", "MVP development", "CTO as a Service"],
  },
];

const Intro = ({ btnText }) => {
  const [isHomeUrl, setIsHomeUrl] = useState(false);

  useEffect(() => {
    if(window.location.pathname === "/" ) setIsHomeUrl(true);
  })
  const Service = ({ color, titleIcon, title, listStyle, services }) => {
    const titleStyle = color + ` ${color}_bottom_border`;
    return (
      <div className="col-md-4">
        <div className="services_container">
          <p className={`title ${titleStyle}`}>
            <img className="title_icon" src={titleIcon} alt="" />
            {title}
          </p>
          <div className="wrapper">
            {services.map((service) => (
              <p key={service}>
                {" "}
                <img className="list_style" src={listStyle} alt="" /> {service}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="intro_section">
      <div className="intro_container">
        <div className="intro_container_custom">
          <div className="row intro_container_row">
            <div className="col-md-7">
              <div className="main_wrapper">
                <h1>Doing More for Technical Success of Your Business</h1>
                <p>
                  We're a full-cycle web and mobile application development
                  company <br /> creating bespoke solutions for web, mobiles,
                  desktops, wearables, and TVs.
                </p>
                <button className="button button_margin">{btnText}</button>
              </div>
            </div>
            <div className="col-md-5 px-0">
              <div className="intro_img_wrapper">
                <div
                  className="intro_img"
                  style={{ backgroundImage: `url(${introImg})` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        {isHomeUrl && (
          <div className="container_custom">
            <div className="row">
              {introServices.map((service) => (
                <Service
                  key={service.title}
                  color={service.color}
                  titleIcon={service.titleIcon}
                  title={service.title}
                  listStyle={service.listStyle}
                  services={service.services}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Intro;
