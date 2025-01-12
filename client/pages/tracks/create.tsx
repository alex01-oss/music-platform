import { StepWrapper } from "@/components/StepWrapper";
import MainLayout from "@/layouts/MainLayout";
import { Button, Grid2, TextField } from "@mui/material";
import React, { useState } from "react";
import styles from "../../styles/create.module.scss";
import { FileUpload } from "@/components/FileUpload";
import { useInput } from "@/hooks/useInput";
import { useRouter } from "next/router";
import axios from "axios";

const create = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);

  const name = useInput("");
  const artist = useInput("");
  const text = useInput("");

  const router = useRouter();

  const back = () => {
    setActiveStep((prev) => prev - 1);
  };

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    } else {
      const formData = new FormData();

      formData.append("name", name.value);
      formData.append("artist", artist.value);
      formData.append("text", text.value);

      picture && formData.append("picture", picture);
      audio && formData.append("audio", audio);

      axios
        .post("http://localhost:5000/tracks", formData)
        .then(() => router.push("/tracks"))
        .catch((e) => console.log(e));
    }
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid2 className={styles.container} container direction={"column"}>
            <TextField
              {...name}
              className={styles.field}
              label={"Track title"}
            />
            <TextField
              {...artist}
              className={styles.field}
              label={"Artist name"}
            />
            <TextField {...text} className={styles.field} label={"Lyrics"} />
          </Grid2>
        )}
        {activeStep === 1 && (
          <FileUpload setFile={setPicture} accept="image/*">
            <Button>Upload image</Button>
          </FileUpload>
        )}
        {activeStep === 2 && (
          <FileUpload setFile={setAudio} accept="audio/*">
            <Button>Upload track</Button>
          </FileUpload>
        )}
      </StepWrapper>
      <Grid2 container justifyContent={"space-between"}>
        <Button onClick={back} disabled={activeStep === 0}>
          Back
        </Button>
        <Button onClick={next}>Next</Button>
      </Grid2>
    </MainLayout>
  );
};

export default create;
