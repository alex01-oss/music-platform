import React, { useEffect, useState } from "react";
import { ITrack } from "../types/track";
import TrackItem from "./TrackItem";
import { Box, Grid2 } from "@mui/material";
import { deleteTrack } from "@/store/actions-creators/track";
import { useDispatch } from "react-redux";
import { NextThunkDispatch } from "@/store";

interface TrackListProps {
  tracks: ITrack[];
}

const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
  const [trackList, setTrackList] = useState<ITrack[]>(tracks);
  const dispatch = useDispatch() as NextThunkDispatch;

  useEffect(() => {
    setTrackList(tracks);
  }, [tracks]);

  const removeTrack = async (id: string) => {
    dispatch(deleteTrack(id));
    setTrackList((prevTracks) =>
      prevTracks.filter((track) => track._id !== id)
    );
  };

  return (
    <Grid2 container direction="column">
      <Box p={2}>
        {tracks.map((track) => (
          <TrackItem key={track._id} track={track} onRemove={removeTrack} />
        ))}
      </Box>
    </Grid2>
  );
};

export default TrackList;
