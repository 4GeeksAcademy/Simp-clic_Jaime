import React, { useState, useEffect } from 'react';

export const SimpleCounter = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (seconds) => {
    const getHours = `0${Math.floor(seconds / 3600)}`.slice(-2);
    const getMinutes = `0${Math.floor((seconds % 3600) / 60)}`.slice(-2);
    const getSeconds = `0${seconds % 60}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div className="container">
      <div className="timer">
        {formatTime(seconds)}
      </div>
      <div className="buttons">
        <button onClick={() => setIsActive(!isActive)} className="button">
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button onClick={reset} className="button">
          Reset
        </button>
      </div>
    </div>
  );
};



