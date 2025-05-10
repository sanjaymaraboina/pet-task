
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const CustomCircularProgress = ({
  value,
  pathColor,
  trailColor,
  textColor,
  textWeight,
}) => {
  const percentage = `${value}%`;

  const styles = buildStyles({
    rotation: 0.35,
    strokeLinecap: 'butt',
    pathColor: pathColor || 'rgb(232, 65, 9)',
    trailColor: trailColor || 'rgba(255, 165, 0, 0.2)',
    textColor: textColor || 'black',
    

  });

  return (
    <div style={{ width: '50px', textAlign: 'center', color: textColor || 'black', fontWeight: textWeight || 'normal' }}>
      <CircularProgressbar
        value={value}
        text={percentage}
        styles={styles}
        strokeWidth={10}
      />
    </div>
  );
};

export default CustomCircularProgress;
