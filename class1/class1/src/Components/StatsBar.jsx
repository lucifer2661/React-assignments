import React from 'react'
import "./StatsBar.css";

const StatsBar = ({ stats }) => {
  return (
    <div className="stats-bar">
      {stats.map(stat => (
        <div key={stat.label} className="stat">
          <h2 className='stat-h2'>{stat.number}</h2>
          <p className='stat-p'>{stat.label}</p>
        </div>
      ))}
      
    </div>
  )
}

export default StatsBar