import React, { useState } from "react";
import styles from "./NavIndicator.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

const NavMenu = () => {
  const [activeItem, setActiveItem] = useState(0); // State to track active menu item

  const handleItemClick = (index) => {
    setActiveItem(index); // Update active item index
  };

  return (
    <div className={cx.navigationContainer}>
      <div className={cx.firstNav}>
        <ul>
          <li
            className={cx(cx.list, { [cx.active]: activeItem === 0 })}
            style={{ "--icon-color": "#f44336" }}
            onClick={() => handleItemClick(0)}
          >
            <a href="#">
              <span className={cx.icon}>
                <ion-icon name="home-outline"></ion-icon>
              </span>
            </a>
          </li>
          <li
            className={cx(cx.list, { [cx.active]: activeItem === 1 })}
            style={{ "--icon-color": "#ffa117" }}
            onClick={() => handleItemClick(1)}
          >
            <a href="#">
              <span className={cx.icon}>
                <ion-icon name="person-outline"></ion-icon>
              </span>
            </a>
          </li>
          <li
            className={cx(cx.list, { [cx.active]: activeItem === 2 })}
            style={{ "--icon-color": "#0fc70f" }}
            onClick={() => handleItemClick(2)}
          >
            <a href="#">
              <span className={cx.icon}>
                <ion-icon name="chatbubble-outline"></ion-icon>
              </span>
            </a>
          </li>
          <li
            className={cx(cx.list, { [cx.active]: activeItem === 3 })}
            style={{ "--icon-color": "#2197f3" }}
            onClick={() => handleItemClick(3)}
          >
            <a href="#">
              <span className={cx.icon}>
                <ion-icon name="camera-outline"></ion-icon>
              </span>
            </a>
          </li>
          <li
            className={cx(cx.list, { [cx.active]: activeItem === 4 })}
            style={{ "--icon-color": "#b145e9" }}
            onClick={() => handleItemClick(4)}
          >
            <a href="#">
              <span className={cx.icon}>
                <ion-icon name="settings-outline"></ion-icon>
              </span>
            </a>
          </li>
          <div className={cx.indicator}></div>
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
