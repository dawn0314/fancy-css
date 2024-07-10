import { useState, useEffect } from "react";
import styles from "./PageScroll.module.css";
import cs from "classnames/bind";

const cx = cs.bind(styles);

const PageScroll = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 60;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={cx("wrapper")}>
      <header className={cx("scroll-header")}>
        <a href="#" className={cx("logo")}>
          LOGO
        </a>
        <nav>
          <a
            href="#home"
            className={cx({ active: activeSection === "home" })}
            style={{ "--clr": "#ff4d4d" }}
          >
            Home
          </a>
          <a
            href="#about"
            className={cx({ active: activeSection === "about" })}
            style={{ "--clr": "#c56cf0" }}
          >
            About
          </a>
          <a
            href="#services"
            className={cx({ active: activeSection === "services" })}
            style={{ "--clr": "#ffeaa7" }}
          >
            Services
          </a>
          <a
            href="#portfolio"
            className={cx({ active: activeSection === "portfolio" })}
            style={{ "--clr": "#17c0eb" }}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className={cx({ active: activeSection === "contact" })}
            style={{ "--clr": "#fd79a8" }}
          >
            Contact
          </a>
        </nav>
      </header>
      <section id="home" className={cx("home")} style={{ "--clr": "#ff4d4d" }}>
        Home
      </section>
      <section
        id="about"
        className={cx("about")}
        style={{ "--clr": "#c56cf0" }}
      >
        About
      </section>
      <section
        id="services"
        className={cx("services")}
        style={{ "--clr": "#ffeaa7" }}
      >
        Services
      </section>
      <section
        id="portfolio"
        className={cx("portfolio")}
        style={{ "--clr": "#17c0eb" }}
      >
        Portfolio
      </section>
      <section
        id="contact"
        className={cx("contact")}
        style={{ "--clr": "#fd79a8" }}
      >
        Contact
      </section>
    </div>
  );
};

export default PageScroll;
