import React from "react";
import { ITrack } from "../types/track";
import { useRouter } from "next/router";
import { useActions } from "../hooks/useActions";
import { PlayArrow, Pause, Delete } from "@mui/icons-material";
import { Card, IconButton, Grid2 } from "@mui/material";
import styles from "../styles/components.module.scss";
import { useTypedSelector } from "@/hooks/useTypedSelector";

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
  onRemove: (id: string) => void;
}

const TrackItem: React.FC<TrackItemProps> = ({
  track,
  active = false,
  onRemove,
}) => {
  const router = useRouter();
  const { playTrack, pauseTrack, setActiveTrack } = useActions();
  const {
    currentTime,
    duration,
    active: activeTrack,
  } = useTypedSelector((state) => state.player);

  const play = (e: any) => {
    e.stopPropagation();
    setActiveTrack(track);
    playTrack();
  };

  const remove = async (e: any) => {
    e.stopPropagation();
    try {
      onRemove(track._id);

      if (activeTrack?._id === track._id) {
        setActiveTrack(null);
        pauseTrack();
      }
    } catch (e) {}
  };

  const handleCardClick = (e: React.MouseEvent) => {
    // if (e.target === e.currentTarget) {
    router.push(`/tracks/${track._id}`);
    // }
  };

  return (
    <Card className={styles.track} onClick={handleCardClick}>
      <div className={styles.content}>
        <IconButton onClick={play}>
          {!active ? <PlayArrow /> : <Pause />}
        </IconButton>
        <img
          width={70}
          height={70}
          src={"http://localhost:5000/" + track.picture}
          className={styles.trackImage}
        />
        <div className={styles.info}>
          <Grid2 container direction="column">
            <div className={styles.name}>{track.name}</div>
            <div className={styles.artist}>{track.artist}</div>
          </Grid2>
          {active && (
            <div>
              {currentTime} / {duration}
            </div>
          )}
        </div>
        <IconButton onClick={remove} className={styles.delete}>
          <Delete />
        </IconButton>
      </div>
    </Card>
  );
};

export default TrackItem;
