import React from "react";
import caseStudyImg from "../../../assets/images/case_study.png";
import "./CaseStudy.scss";

const caseStudyAll = [
  {
    img: caseStudyImg,
    category: "Logistics",
    company: "Under NDA",
    title: "TMS for a logistics company",
    details:
      "Transportation management system with automatic route planning module",
    country: "USA",
    tech: "Node JS, Kotlin, Swift",
  },
  {
    img: caseStudyImg,
    category: "Logistics",
    company: "Under NDA",
    title: "TMS for a logistics company1",
    details:
      "Transportation management system with automatic route planning module",
    country: "USA",
    tech: "Node JS, Kotlin, Swift",
  },
];

const CaseStudy = () => {
  const CaseStudySingle = ({ caseStudy }) => {
    return (
      <div className="row caseStudy_row">
        <div className="col-md-6">
          <div className="caseStudy_row_img">
            <img className="img-fluid" src={caseStudy.img} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="caseStudy_row_texts">
            <div className="row cat_company_wrapper">
              <div className="col-6 col-md-6 category">{caseStudy.category}</div>
              <div className="col-6 col-md-6 company">
                {" "}
                <span>{caseStudy.company}</span>{" "}
              </div>
            </div>
            <div className="title_details_wrapper">
              <p className="title">{caseStudy.title}</p>
              <p className="details details_text">{caseStudy.details}</p>
            </div>
            <div className="row country_wrapper">
              <div className="col-md-4 countryTech_text">Country</div>
              <div className="col-md-8 details_text">{caseStudy.country}</div>
            </div>
            <div className="row tech_wrapper">
              <div className="col-md-4 countryTech_text">Core tech</div>
              <div className="col-md-8 details_text">{caseStudy.tech}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="caseStudy_section container_custom">
      <div className="caseStudy_container">
        {caseStudyAll.map((caseStudy) => (
          <CaseStudySingle key={caseStudy.title} caseStudy={caseStudy} />
        ))}
      </div>
    </section>
  );
};

export default CaseStudy;
