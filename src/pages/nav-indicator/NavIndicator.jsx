import { useState } from "react";
import styles from "./NavIndicator.module.scss";
import cs from "classnames/bind";
import {
  IoHome,
  IoPersonSharp,
  IoChatbubbleOutline,
  IoSettingsOutline,
  IoCameraOutline,
} from "react-icons/io5";

const cx = cs.bind(styles);
export default function NavMenu() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("navigation-container")}>
        <div className={cx("first-nav")}>
          <ul>
            <li
              className={cx("list", { active: activeIndex === 0 })}
              style={{ "--icon-color": "#f44336" }}
              onClick={() => handleClick(0)}
            >
              <a href="#">
                <span className={cx("icon")}>
                  <IoHome />
                </span>
              </a>
            </li>
            <li
              className={cx("list", { active: activeIndex === 1 })}
              style={{ "--icon-color": "#ffa117" }}
              onClick={() => handleClick(1)}
            >
              <a href="#">
                <span className={cx("icon")}>
                  <IoPersonSharp />
                </span>
              </a>
            </li>
            <li
              className={cx("list", { active: activeIndex === 2 })}
              style={{ "--icon-color": "#0fc70f" }}
              onClick={() => handleClick(2)}
            >
              <a href="#">
                <span className={cx("icon")}>
                  <IoChatbubbleOutline />
                </span>
              </a>
            </li>
            <li
              className={cx("list", { active: activeIndex === 3 })}
              style={{ "--icon-color": "#2197f3" }}
              onClick={() => handleClick(3)}
            >
              <a href="#">
                <span className={cx("icon")}>
                  <IoCameraOutline />
                </span>
              </a>
            </li>
            <li
              className={cx("list", { active: activeIndex === 4 })}
              style={{ "--icon-color": "#b145e9" }}
              onClick={() => handleClick(4)}
            >
              <a href="#">
                <span className={cx("icon")}>
                  <IoSettingsOutline />
                </span>
              </a>
            </li>
            <div className={cx("indicator")}></div>
          </ul>
        </div>
      </div>
    </div>
  );
}
