import MainLayout from "@/layouts/MainLayout";
import styles from "../../styles/track.module.scss";
import { Button, Grid2, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import { useInput } from "@/hooks/useInput";
import { ITrack } from "@/types/track";

interface TrackPageProps {
  serverTrack: any;
}

export const trackPage = ({ serverTrack }: TrackPageProps) => {
  const [track, setTrack] = useState<ITrack>(serverTrack);
  const router = useRouter();
  const name = useInput("");
  const comment = useInput("");

  const addComment = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/tracks/comment",
        {
          username: name.value,
          text: comment.value,
          trackId: track._id,
        }
      );
      setTrack({ ...track, comments: [track.comments, response.data] });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <MainLayout
      title={"Music App - " + track.name + " - " + track.artist}
      keywords={"music, tracks, artists" + track.name + ", " + track.artist}
    >
      <Button
        className={styles.button}
        variant={"outlined"}
        onClick={() => router.push("/tracks")}
      >
        Back
      </Button>
      <Grid2 container className={styles.container}>
        <img
          src={"http://localhost:5000/" + track.picture}
          height={200}
          width={200}
        />
        <div>
          <h1>{track.name}</h1>
          <h1>{track.artist}</h1>
          <h1>Listens - {track.listens}</h1>
        </div>
      </Grid2>
      <h1>Lyrics:</h1>
      <p>{track.text}</p>
      <h1>Comments</h1>
      <Grid2 container>
        <TextField {...name} label="Name" fullWidth />
        <TextField {...comment} label="Comment" fullWidth multiline rows={4} />
        <Button onClick={addComment}>Send</Button>
      </Grid2>
      <div>
        {track.comments.map((comment: any) => (
          <div>
            <div>{comment.username}</div>
            <div>{comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default trackPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await axios.get(
    "http://localhost:5000/tracks/" + params?.id
  );

  return {
    props: {
      serverTrack: response.data,
    },
  };
};
