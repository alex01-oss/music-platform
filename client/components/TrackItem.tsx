import React from "react";
import { ITrack } from "../types/track";
import styles from "../styles/TrackItem.module.scss";
import { useRouter } from "next/router";
import { useActions } from "../hooks/useActions";
import { PlayArrow, Pause, Delete } from "@mui/icons-material";
import { Card, IconButton, Grid2 } from "@mui/material";

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  const router = useRouter();
  const { playTrack, pauseTrack, setActiveTrack } = useActions();

  const play = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setActiveTrack(track);
    playTrack();
  };

  return (
    <Card
      className={styles.track}
      onClick={() => router.push("/tracks/" + track._id)}
    >
      <IconButton onClick={play}>
        {!active ? <PlayArrow /> : <Pause />}
      </IconButton>
      <img
        width={70}
        height={70}
        src={"http://localhost:5000/" + track.picture}
      />
      <Grid2
        container
        direction="column"
        style={{ width: 200, margin: "0 20px" }}
      >
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{track.artist}</div>
      </Grid2>
      {active && <div>02:42 / 03:22</div>}
      <IconButton
        onClick={(e) => e.stopPropagation()}
        style={{ marginLeft: "auto" }}
      >
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
