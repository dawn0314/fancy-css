import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { FaYoutube, FaInstagram, FaSteam } from "react-icons/fa6";
import styles from "./TiltHover.module.scss";
import cs from "classnames/bind";

const cx = cs.bind(styles);

const iconData = [
  { color: "#FF0000", icon: FaYoutube },
  { color: "#F6B02B", icon: FaInstagram },
  { color: "#124E7E", icon: FaSteam },
];

const TiltHover = () => {
  const tiltRefs = useRef([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    tiltRefs.current.forEach((ref) => {
      VanillaTilt.init(ref, {
        max: 25,
        speed: 400,
        glare: true,
      });
    });
  }, []);

  const handleMouseEnter = (index) => {
    const { color } = iconData[index];
    wrapperRef.current.style.backgroundColor = color;
  };

  const handleMouseLeave = () => {
    wrapperRef.current.style.backgroundColor = "#fff";
  };

  return (
    <div className={cx("wrapper")} ref={wrapperRef}>
      <div className={cx("icon-wrapper")}>
        <ul>
          {iconData.map((item, index) => (
            <li
              key={index}
              style={{ "--clr": item.color }}
              ref={(el) => (tiltRefs.current[index] = el)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <item.icon className={cx("icon")} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TiltHover;
