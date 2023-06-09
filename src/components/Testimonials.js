import React from "react";
import TestimonialSlider from "./TestimonialSlider";
import Fade from 'react-reveal/Fade';

const Testimonials = () => {
  return (
    <Fade bottom cascade >
    <section id="testimonials" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block">
            What other people says
          </h2>
          <p className="subtitle">
          Here's how my clients evaluate what I do
          </p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
    </Fade>
  );
};

export default Testimonials;
