import React from "react";
import "./StatsCard.css";

const levels = [
  { label: "Beginner", count: 55, max: 70 },
  { label: "Intermediate", count: 40, max: 70 },
  { label: "Advanced", count: 35, max: 70 },
];

const StatsCard = () => {
  return (
    <div className="stats-card">
      <h2>100+</h2>

      <h3>Pro Coaches</h3>

      <p>
        Certified professionals ready to boost your game
      </p>

      <div className="levels">
        {levels.map((level) => (
          <div className="level-row" key={level.label}>
            <span className="level-label">{level.label}</span>
            <div className="dots">
              {Array.from({ length: Math.ceil(level.count / 5) }).map((_, i) => (
                <span key={i} className="dot" />
              ))}
            </div>
            <span className="level-count">{level.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCard;