import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          Built with ❤️ by{" "}
          <a
            href="https://www.linkedin.com/in/ayush-kapruwan-96117a213/"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            Ayush Kapruwan
          </a>{" "}
          •{" "}
          <a href="mailto:ayush.kapruwan845@gmail.com" className="footer-link">
            email
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
