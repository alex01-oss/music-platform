import React from "react";
import styles from "../styles/components.module.scss";

interface TrackProgressProps {
  left: number;
  right: number;
  onChange: (e: any) => void;
  isTimeProgress?: boolean;
}

const TrackProgress: React.FC<TrackProgressProps> = ({
  left,
  right,
  onChange,
  isTimeProgress,
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    const formatSecs = secs < 10 ? `0${secs}` : `${secs}`;

    return `${mins}:${formatSecs}`;
  };

  return (
    <div className={styles.progress}>
      <input
        type="range"
        min={0}
        max={right}
        value={left}
        onChange={onChange}
      />
      <div>
        {isTimeProgress ? formatTime(left) : left} /
        {isTimeProgress ? formatTime(right) : right}
      </div>
    </div>
  );
};

export default TrackProgress;
