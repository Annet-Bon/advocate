import React from "react";
import "../styles/Services.scss";
import "../fontello/css/icons.css";
import Person from "../images/civil-services-dark.jpg";
import Company from "../images/company-services-dark.jpg";
import Criminal from "../images/company-services-dark.jpg";
import Help from "../images/foreign-services-dark.jpg";

const Services = () => (
  <section id="services" className="services container">
    <h2>
      <span>Послуги</span> Адвоката
    </h2>
    <section className="services__list">
      <section className="services__item animated-border">
        <div className="services__item-wrapper">
          <div className="services__item-image">
            <img src={Person} alt="Фізичним особам" />
          </div>
          <div className="services__item-content">
            <h3>Фізичним особам</h3>
            <ul>
              <li className="icon-stop-outline">Представництво в суді</li>
              <li className="icon-stop-outline">
                Аналіз та розробка договорів
              </li>
              <li className="icon-stop-outline">
                Всі види сімейних правовідносин та спорів
              </li>
              <li className="icon-stop-outline">
                Юридичний супровід купівлі/продажу нерухомості
              </li>
              <li className="icon-stop-outline">
                Юридичний супровід купівлі/продажу рухомого майна
              </li>
              <li className="icon-stop-outline">
                Захист інтелектуальної власності
              </li>
              <li className="icon-stop-outline">
                Спадкові правовідносини та спори
              </li>
              <li className="icon-stop-outline">Захист прав у випадку ДТП</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="services__item animated-border">
        <div className="services__item-wrapper">
          <div className="services__item-image">
            <img src={Company} alt="Юридичним особам" />
          </div>
          <div className="services__item-content">
            <h3>Юридичним особам</h3>
            <ul>
              <li className="icon-stop-outline">Юридичний супровід бізнесу</li>
              <li className="icon-stop-outline">
                Реєстрація та ліквідація підприємств
              </li>
              <li className="icon-stop-outline">
                Підготовка договорів з постачальниками та партнерами
              </li>
              <li className="icon-stop-outline">
                Консультації з питань захисту прав інтелектуальної власності
              </li>
              <li className="icon-stop-outline">
                Юридичний супровід кадрових питань
              </li>
              <li className="icon-stop-outline">
                Оскарження штрафів і санкцій
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="services__item animated-border">
        <div className="services__item-wrapper">
          <div className="services__item-image">
            <img src={Criminal} alt="Кримінальна практика" />
          </div>
          <div className="services__item-content">
            <h3>Кримінальна практика</h3>
            <ul>
              <li className="icon-stop-outline">
                Консультації та захист в сфері кримінального права
              </li>
              <li className="icon-stop-outline">
                Юридичний захист на досудовому розслідуванні
              </li>
              <li className="icon-stop-outline">
                Адвокатська допомога в умовах затримання/арешту
              </li>
              <li className="icon-stop-outline">Оскарження арешту майна</li>
              <li className="icon-stop-outline">
                Консультації та захист в сфері фінансових злочинів
              </li>
              <li className="icon-stop-outline">Оскарження вироків</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="services__item animated-border">
        <div className="services__item-wrapper">
          <div className="services__item-image">
            <img src={Help} alt="Українцям за кордоном" />
          </div>
          <div className="services__item-content">
            <h3>Українцям за кордоном</h3>
            <ul>
              <li className="icon-stop-outline">
                Юридичне консультування для українців за кордоном
              </li>
              <li className="icon-stop-outline">
                Переведення українських документів на іноземну мову
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  </section>
);

export default Services;
