import React from "react";
import qualityImg from "../../../assets/icons/services_icons/web-development.svg";
import "./QualityDriven.scss";

const qualityAll = [
  {
    img: qualityImg,
    title: "Project planning & control",
    details: "Scope, milestones, priorities, estimation, reporting",
  },
  {
    img: qualityImg,
    title: "Standards & processes",
    details: "Code Coverage, Quality Gates, Git Flow, DoR, DoD",
  },
  {
    img: qualityImg,
    title: "Testing Levels",
    details: "Unit, integration, system and end-to-end testing",
  },
  {
    img: qualityImg,
    title: "CI/CD",
    details: "Executed with Bitbucket Pipelines or Jenkins",
  },
  {
    img: qualityImg,
    title: "Code reviews",
    details: "Always done by at least two other team members",
  },
  {
    img: qualityImg,
    title: "Automated tests",
    details: "For the most important parts of business logic",
  },
  {
    img: qualityImg,
    title: "Code quality",
    details: "SOLID, Code Style, Version Control",
  },
  {
    img: qualityImg,
    title: "Cloud Solutions",
    details: "Scalable servers set up on AWS and GCP",
  },
];

const QualityDriven = () => {
  const QualitySingle = ({ img, title, details }) => {
    return (
      <div className="col-md-3">
        <div className="quality_card rounded">
          <img className="card_img" src={img} alt="" />
          <div className="text_wrapper">
            <p className="card_title">{title}</p>
            <small className="card_details">{details}</small>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="qualityDriven_section container_custom">
      <div className="title_container">
        <div className="title_number">03</div>
        <div className="title_wrapper">
          <p className="title_small">
            TO MAKE TECHNOLOGY YOUR COMPETITIVE ADVANCE
          </p>
          <p className="title_big">Quality-driven</p>
        </div>
      </div>
      <div className="quality_container">
        <div className="row">
          {qualityAll.map((quality) => (
            <QualitySingle
              key={quality.title}
              img={quality.img}
              title={quality.title}
              details={quality.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityDriven;
