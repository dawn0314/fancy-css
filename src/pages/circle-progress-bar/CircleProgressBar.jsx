import { useState } from "react";
import styles from "./CircleBar.module.css";
import cs from "classnames/bind";

const cx = cs.bind(styles);
const circleWidth = "200";

export default function CircleProgressBar() {
  const [percentage, setPercentage] = useState(20);

  const radius = 85;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  return (
    <div className={cx("wrapper")}>
      <div className={cx("first-progress-bar")}>
        <svg
          width={circleWidth}
          height={circleWidth}
          viewBox={`0 0 ${circleWidth} ${circleWidth}`}
        >
          <defs>
            <linearGradient id="gradient">
              <stop offset="10%" stopColor="#12c2e9" />
              <stop offset="50%" stopColor="#c471ed" />
              <stop offset="100%" stopColor="#f64f59" />
            </linearGradient>
          </defs>
          <circle
            cx={circleWidth / 2}
            cy={circleWidth / 2}
            strokeWidth="15px"
            r={radius}
            className={cx("circle-background")}
          />
          <circle
            cx={circleWidth / 2}
            cy={circleWidth / 2}
            strokeWidth="15px"
            r={radius}
            className={cx("circle-progress")}
            style={{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }}
            transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
            stroke="url(#gradient)"
          />
          <text
            x="50%"
            y="50%"
            dy="0.3em"
            textAnchor="middle"
            className={cx("circle-text")}
          >
            {percentage}%
          </text>
        </svg>
        <input
          type="range"
          min="1"
          max="100"
          step="1"
          value={percentage}
          className={cx("progressInput")}
          onChange={(e) => {
            setPercentage(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
