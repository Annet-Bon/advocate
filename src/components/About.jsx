import React, { useEffect } from "react";
import "../styles/About.scss";
import Brief from "../images/icons/icon-briefcase.png";
import Goal from "../images/icons/icon-goal.png";
import Coop from "../images/icons/icon-wreath.png";
import "../styles/Slogan.scss";
import Signature from "../images/signature.png";
import "../fontello/css/icons.css";

const About = () => {
  useEffect(() => {
    const backgroundElement = document.querySelector(".slogan");

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= window.innerHeight && // Верх елемента в полі зору
        rect.bottom >= 0 // Низ елемента в полі зору
      );
    };

    const handleScroll = () => {
      if (isInViewport(backgroundElement)) {
        backgroundElement.classList.add("animate-lines"); // Додаємо клас
        window.removeEventListener("scroll", handleScroll); // Уникаємо повторного виклику
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Очищення
    };
  }, []);

  return (
    <section id="about" className="about__background">
      <section className="background_gradient">
        <section id="slogan" className="slogan container">
          <i className="icon-quote top" />
          <div className="line top-line"></div>
          <p className="slogan__text">
            Перемога – це результат чіткої стратегії. <br /> Довірте свою партію
            професіоналу.
          </p>
          <img
            className="slogan__signature"
            alt="Підпис адвоката"
            src={Signature}
          />
          <div className="line bottom-line"></div>
          <i className="icon-quote bottom" />
        </section>
        <section className="about container">
          {/* <h2 className="about__title">Про себе</h2> */}
          <section className="about__text">
            <section className="text__experience">
              <img className="image_briefcase" alt="" src={Brief} />
              <p>
                <span>Д</span>освід — це не роки, а тисячі вирішених справ і
                сотні клієнтів, які повертаються знову. <br /> Я Микола
                Євтушенко, адвокат із 20-річним досвідом у цивільному,
                господарському та кримінальному праві.
              </p>
            </section>
            <section className="text__goal">
              <img className="image_goal" alt="" src={Goal} />
              <p>
                <span>М</span>оя місія — бути вашим провідником у юридичному
                лабіринті, переконатися, що ваші права захищені, а результати —
                справедливі. Для мене кожна справа — це індивідуальний виклик,
                який я приймаю з ентузіазмом.
              </p>
            </section>
            <section className="text__cooperation">
              <img className="image_cooperation" alt="" src={Coop} />
              <p>
                <span>К</span>оли ви довіряєте мені свою проблему, ви отримуєте
                не просто адвоката, а партнера, який буде поруч на кожному
                етапі: від першої консультації до остаточної перемоги.
              </p>
            </section>
            {/* <p>Зробимо крок назустріч вашій перемозі разом!</p> */}
          </section>
        </section>
      </section>
    </section>
  );
};

export default About;
