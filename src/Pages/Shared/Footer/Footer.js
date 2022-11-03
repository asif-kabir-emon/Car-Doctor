import React from "react";
import logo from "../../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="footer px-20 py-32 bg-black text-white">
      <div>
        <img src={logo} alt="" />
        <p>
          Edwin Diaz is a software and web
          <br /> technologies engineer, a life coach
          <br />
          trainer who is also a serial .
        </p>
      </div>
      <div>
        <span className="footer-title">About</span>
        <a href="/" className="link link-hover">
          Home
        </a>
        <a href="/" className="link link-hover">
          Sevice
        </a>
        <a href="/" className="link link-hover">
          Contact
        </a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a href="/" className="link link-hover">
          Why Car Doctor
        </a>
        <a href="/" className="link link-hover">
          About
        </a>
      </div>
      <div>
        <span className="footer-title">Support</span>
        <a href="/" className="link link-hover">
          Support Center
        </a>
        <a href="/" className="link link-hover">
          Feedback
        </a>
        <a href="/" className="link link-hover">
          Accesbility
        </a>
      </div>
    </footer>
  );
};

export default Footer;
