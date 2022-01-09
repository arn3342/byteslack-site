import React from "react";
import recommendationImg from "../../../assets/icons/home-quality-strategic-partnership.svg";
import "./Recommendation.scss";

const recommendationAll = [
  {
    number: "21",
    details: "Active strategic partnership",
    img: recommendationImg,
  },
  {
    number: "98%",
    details: "Clients willing to refer us",
    img: recommendationImg,
  },
  {
    number: "50",
    details: "Five-star reviews on Clutch.co",
    img: recommendationImg,
  },
];

const Recommendation = () => {
  const RecommendationSingle = ({ recommendation }) => {
    return (
      <div className="col-md-4">
        <div className="recommendation_card rounded">
          <div className="recommendation_card_wrapper">
            <div className="card_info_wrapper">
              <h2>{recommendation.number}</h2>
              <p>{recommendation.details}</p>
            </div>
            <img
              className="card_img img-fluid"
              src={recommendation.img}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="recommendation_section container_custom">
      <div className="recommendation_container">
        <div className="recommendation_title_container">
          <p className="recommendation_title_small">Quality</p>
          <h1 className="recommendation_title_big">
            98% of clients recommend us
          </h1>
        </div>

        <div className="recommendation_card_container">
          <div className="row">
            {recommendationAll.map((recommendation) => (
              <RecommendationSingle
                key={recommendation.number}
                recommendation={recommendation}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
