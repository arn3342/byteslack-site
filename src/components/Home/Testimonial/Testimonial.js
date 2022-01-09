import React, { useRef } from "react";
import arrowLeft from "../../../assets/icons/arrow-left.svg";
import arrowRight from "../../../assets/icons/arrow-right.svg";
import { testimonialAll } from "../../../data/testimonialData";
import "./Testimonial.scss";

const Testimonial = () => {
  const testimonialSingleRef = useRef(null);
  const testimonialScroll = useRef(null);

  const handleRowScroll = (leftOrRight) => {
    const testimonialColWidth = testimonialSingleRef.current.getBoundingClientRect().width;

    if (leftOrRight === "left") {
      testimonialScroll.current.scrollTo({
        left: testimonialScroll.current.scrollLeft - testimonialColWidth,
        behavior: "smooth",
      });
    } else if (leftOrRight === "right") {
      testimonialScroll.current.scrollTo({
        left: testimonialScroll.current.scrollLeft + testimonialColWidth,
        behavior: "smooth",
      });
    }
  };

  const TestimonialSingle = ({ testimonial }) => {
    return (
      <div ref={testimonialSingleRef} className="testimonial_inner col-md-6 col-12">
        <div className="client_card">
          <div className="img_info_wrapper">
            <img className="client_img" src={testimonial.img} alt="" />
            <div className="client_info">
              <h2>{testimonial.name}</h2>
              <p>{testimonial.designation}</p>
            </div>
          </div>
          <div className="client_details">{testimonial.details}</div>
          <p className="connect_media">{testimonial.connectMedia}</p>
        </div>
      </div>
    );
  };
  return (
    <section className="testimonial_section container_custom">
      <div className="testimonial_container">
        <div className="title_prevNext_wrapper">
          <div className="testimonial_title">Our clients say</div>
          <div className="prev_next">
            <img
              onClick={() => handleRowScroll("left")}
              className="prev"
              src={arrowLeft}
              alt="go_left"
            />{" "}
            <img
              onClick={() => handleRowScroll("right")}
              className="next"
              src={arrowRight}
              alt="go_right"
            />
          </div>
        </div>
        <div className="testimonial_main_container">
          <div ref={testimonialScroll} className="testimonial_wrapper">
            {/* <div className="row"> */}
            {testimonialAll.map((testimonial) => (
              <TestimonialSingle
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
