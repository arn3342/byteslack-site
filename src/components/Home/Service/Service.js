import React from "react";
import { cloudSoftDesign, webServiceOnlyTwo, webServiceOthers } from "../../../data/serviceData.js";
import "./Service.scss";

const Service = () => {
  const ServiceBig = ({ service }) => {
    let colSize;
    if(service.width === "100%") colSize = "col-md-12"
    else if(service.width === "50%") colSize = "col-md-6"
    else if(service.width === "33%") colSize = "col-md-4"
    return (
      <div className={colSize}>
        <div
          className={`service_inner_big rounded ${
            !service.border && "transparent_border"
          }`}
        >
          {service.border}
          <img className="service_icon_big" src={service.icon} alt="" />
          <div>
          <span>{service.title}</span>
          </div>
          <small> {service.details}</small>
        </div>
      </div>
    );
  };

  // const ServiceSmall = ({ service }) => {
  //   return (
  //     <div className="service_inner_small rounded">
  //       <p>{service.title}</p>
  //       <img className="service_icon_small" src={service.icon} alt="" />
  //     </div>
  //   );
  // };
  return (
    <section className="service_section container_custom">
      <div className="row">
        <div className="col-md-4">
          <div className="row">
            {
              webServiceOnlyTwo.map((service) => (
                <ServiceBig key={service.title} service={service} />
              ))
            }
          </div>
        </div>
        
        <div className="col-md-8">
          <div className="row">
            {webServiceOthers.map((webService) => (
              <ServiceBig key={webService.title} service={webService} />
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        {cloudSoftDesign.map((service) => (
          <ServiceBig key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Service;
