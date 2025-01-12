import MainLayout from "@/layouts/MainLayout";
import { Box, Button, Card, Grid2, TextField } from "@mui/material";
import styles from "../../styles/track.module.scss";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { NextThunkDispatch, wrapper } from "@/store";
import { fetchTracks, searchTracks } from "@/store/actions-creators/track";
import { useDispatch } from "react-redux";
import TrackList from "@/components/TrackList";

const index = () => {
  const router = useRouter();
  const { tracks, error } = useTypedSelector((state) => state.track);
  const [query, setQuery] = useState<string>("");
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const dispatch = useDispatch() as NextThunkDispatch;

  const search = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(async () => {
        await dispatch(searchTracks(e.target.value));
      }, 500)
    );
  };

  if (error) {
    <MainLayout>
      <h1>{error.toString()}</h1>
    </MainLayout>;
  }

  return (
    <MainLayout title={"Track list - Music App"}>
      <Grid2 container justifyContent={"center"}>
        <Card className={styles.card}>
          <Box p={3}>
            <Grid2 container justifyContent={"space-between"}>
              <h1>Track list</h1>
              <Button onClick={() => router.push("/tracks/create")}>
                Upload
              </Button>
            </Grid2>
          </Box>
          <TextField onChange={search} value={query} fullWidth />
          <TrackList tracks={tracks} />
        </Card>
      </Grid2>
    </MainLayout>
  );
};

export default index;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(fetchTracks());

    return { props: {} };
  }
);
