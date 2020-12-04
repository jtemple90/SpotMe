import React from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <section className="footer">
      <a className="contact" href="https://github.com/jtemple90">
        <i class="fab fa-github-square fa-2x"></i>
      </a>
      <a
        className="contact"
        href="https://www.linkedin.com/in/john-temple-dev/"
      >
        <i class="fab fa-linkedin fa-2x"></i>
      </a>
      <p className="footer-p">Copyright &#169; 2020 The Spot Me App</p>
    </section>
  );
};

export default Footer;
