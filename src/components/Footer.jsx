import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center  text-base-content py-16 bg-indigo-50 mt-14">
      <aside>
        <p className="text-black">
          Copyright © {new Date().getFullYear()} - All right reserved by faisal
          hdev!
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
