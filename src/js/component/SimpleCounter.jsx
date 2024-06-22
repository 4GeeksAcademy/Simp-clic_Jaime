
import React, { useState, useEffect } from 'react';

 const SimpleCounter = () => {
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
    <div style={styles.container}>
      <div style={styles.timer}>
        {formatTime(seconds)}
      </div>
      <div style={styles.buttons}>
        <button onClick={() => setIsActive(!isActive)} style={styles.button}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button onClick={reset} style={styles.button}>
          Reset
        </button>
      </div>
    </div>
  );
};


export default SimpleCounter;
