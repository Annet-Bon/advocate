import React, { useRef, useEffect } from "react";
import { ReactComponent as Logo } from "../images/logo.svg"; // Імпортуємо SVG
import gsap from "gsap";

const AppLogo = () => {
  const logoRef = useRef(); // Створюємо реф для SVG

  useEffect(() => {
    const paths = logoRef.current.querySelectorAll("path"); // Отримуємо всі <path>
    paths.forEach((path) => {
      const length = path.getTotalLength(); // Отримуємо довжину кожного шляху

      // Анімація для кожного шляху
      gsap.fromTo(
        path,
        { strokeDasharray: length, strokeDashoffset: length },
        { strokeDashoffset: 0, duration: 2, ease: "power2.inOut" }
      );
    });
  }, []);

  return (
    <div>
      <Logo ref={logoRef} style={{ height: "auto" }} />
    </div>
  );
};

export default AppLogo;
