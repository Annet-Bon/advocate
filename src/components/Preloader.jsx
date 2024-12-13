import React, { useState, useEffect } from "react";
import AppLogo from "./AppLogo"; // Імпортуємо логотип
import "../styles/Preloader.scss";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Затримка для показу прелоадера, або завантаження необхідних ресурсів
    const timer = setTimeout(() => {
      setIsLoading(false); // Прелоадер приховується після 4 секунд
    }, 4000);

    // Очистка таймера при відміні компоненту
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && !hasAnimated) {
      setHasAnimated(true); // Після приховування прелоадера змінюємо стан анімації
    }
  }, [isLoading, hasAnimated]);

  return (
    <div className="preloader-wrapper">
      {isLoading && !hasAnimated ? (
        <AppLogo />
      ) : (
        <div>
          {/* Ваш основний контент */}
          <h1>Контент завантажено!</h1>
        </div>
      )}
    </div>
  );
};

export default Preloader;
