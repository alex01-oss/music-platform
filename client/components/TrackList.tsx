import React from "react";
import { ITrack } from "../types/track";
import TrackItem from "./TrackItem";
import { Box, Grid2 } from "@mui/material";

interface TrackListProps {
  tracks: ITrack[];
}

const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
  return (
    <Grid2 container direction="column">
      <Box p={2}>
        {tracks.map((track) => (
          <TrackItem key={track._id} track={track} />
        ))}
      </Box>
    </Grid2>
  );
};

export default TrackList;
