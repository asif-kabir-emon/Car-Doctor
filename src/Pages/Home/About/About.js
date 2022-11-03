import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero mb-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="relative w-1/2">
          <img src={person} className="w-4/5 rounded-lg shadow-2xl" alt="" />
          <img
            src={parts}
            className="absolute w-3/5 right-1 top-1/2 border-8 border-white rounded-lg shadow-2xl"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <p className="text-2xl text-orange-700 font-bold">About Us</p>
          <h1 className="my-3 text-5xl font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="py-6 text-justify mr-10">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
            <br />
            <br />
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-warning">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
