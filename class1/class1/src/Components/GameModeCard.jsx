import { useState } from 'react'
import './GameModeCard.css'

const GameModeCard = () => {
  const [isOn, setIsOn] = useState(false)

  return (
    <div className="game-card">
      <p>Professional hard courts with tournament-grade lighting & climate control — play in perfect conditions, in any season.</p>
      
      <div className="toggle-row">
        <div 
          className={isOn ? 'toggle on' : 'toggle off'}
          onClick={() => setIsOn(!isOn)}
        >
          <div className="toggle-thumb" />
        </div>
        <span>Game Mode</span>
      </div>
    </div>
  )
}

export default GameModeCard