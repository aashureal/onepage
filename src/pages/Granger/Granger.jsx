import React from "react";
import { NavLink } from "react-router-dom";

const Granger = () => {
  return (
    <div className="Granger page">
      {/* Hero Section */}
      <section className="Hero">
        <header className="header">
          <div className="top part">
            <h2 className="logo">granger</h2>

            <nav>
              <NavLink to={""} className={"link"}>
                Home
              </NavLink>
              <NavLink to={""} className={"link"}>
                Products
                <span className="tag">New</span>
              </NavLink>
              <NavLink to={""} className={"link"}>
                Events
              </NavLink>
              <NavLink to={""} className={"link"}>
                About
              </NavLink>
            </nav>

            <button className="theme__btn">
              <span className="icon__wrapper">
                <i className="ri-moon-line icon-dark"></i>
              </span>
              <span className="icon__wrapper light">
                <i className="ri-sun-line icon-light"></i>
              </span>
            </button>

            <button className="menu__btn"></button>
          </div>
          <hr className="text-white py-5" />
          <div className="bottom part">
            <p className="txt">Custom wellness</p>
            <p className="txt link">Get in Touch</p>
          </div>
        </header>

        {/* <img src="https://ik.imagekit.io/cfmixl0nl/Onpage-repo/Granger-page/basketball%20court.png?updatedAt=1753624256207" alt="" /> */}
      </section>
    </div>
  );
};

export default Granger;
