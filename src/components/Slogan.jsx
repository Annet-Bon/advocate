import React from "react";
import "../styles/Slogan.scss";
import Signature from "../images/signature.png";

const Slogan = () => (
  <section className="slogan__background">
    <section id="slogan" className="slogan container">
      <p className="slogan__text">
        Перемога – це результат чіткої стратегії. <br /> Довірте свою партію
        професіоналу.
      </p>
      <img
        className="slogan__signature"
        alt="Підпис адвоката"
        src={Signature}
      />
    </section>
  </section>
);

export default Slogan;
