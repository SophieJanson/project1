import React, { useState } from 'react';
import './Die.css';

export interface DieProps {
  color: 'yellow' | 'blue' | 'red' | 'green' | 'white';

}

const faces = [1, 2, 3, 4, 5, 6];

const Die: React.FC<DieProps> = (props) => {
  const [outcome, setOutcome] = useState<number | undefined>(undefined)
  const [animate, setAnimate] = useState(false);

  function onClick() {
    setAnimate(true)
    roll();
    setTimeout(() => setAnimate(false), 300)
  }

  function roll() {
    const outcome = faces[Math.floor(Math.random() * faces.length)];

    return outcome
  };


  return <div className={`die theme-${props.color} ${animate && 'animate'}`} onClick={onClick}>{outcome}</div>;
};


export default Die;