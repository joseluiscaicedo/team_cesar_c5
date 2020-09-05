//------------------------------ import libraries
import React, { Fragment } from "react";
import ReactDom from "react-dom";

//------------------------------ import components
import { FaTimes, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

//------------------------------ import styles and images
import "../assets/components-style/Login.scss";
import logo from "../assets/images/logo-walle.png";

const LoginModal = () => {
  return ReactDom.createPortal(
    <Fragment>
      <section className="Modal">
        <img src={logo} alt="" className="Modal__img" />
        <form className="Modal__form">
          <FaTimes className="icon--inactive Modal__exit"></FaTimes>
          <div className="Modal__garden">
            <FaInstagram className="icon--active" />
            <FaFacebookF className="icon--active" />
            <FaTwitter className="icon--active" />
          </div>
          <h3 className="Modal__title">Ya estoy contigo Walle</h3>
          <div className="input--centered">
            <label className="input-label" htmlFor="email">
              Correo:
            </label>
            <input
              className="input-text--centered"
              type="text"
              placeholder="Fulanito@email.com"
              id="email"
            />
          </div>
          <div className="input--centered">
            <label className="input-label" htmlFor="password">
              Contraseña:
            </label>
            <input
              className="input-text--centered"
              type="password"
              placeholder="Password"
              id="password"
            />
          </div>
          <button className="main-button">Entrar</button>
        </form>
      </section>
    </Fragment>,

    document.getElementById("modal")
  );
};

export default LoginModal;
