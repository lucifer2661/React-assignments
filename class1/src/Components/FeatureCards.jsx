import React from "react";
import GameModeCard from "./GameModeCard";
import ImageCard from"./ImageCard";
import "./FeatureCards.css";
import StatsCard from "./StatsCard";


const FeatureCards = () => {
  return (
    <div className="feature-cards">
      <GameModeCard />
      <ImageCard />
       <StatsCard />

      
    </div>
  );
};

export default FeatureCards;