import {
  Container,
  Stepper,
  Step,
  StepLabel,
  Card,
  Grid2,
} from "@mui/material";
import React from "react";
import styles from "../styles/components.module.scss";

interface StepWrapperProps {
  children: React.ReactNode;
  activeStep: number;
}
const steps = ["Track Info", "Download Cover", "Download the Track Itself"];

const StepWrapper: React.FC<StepWrapperProps> = ({ activeStep, children }) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} completed={activeStep > index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid2 container className={styles.container}>
        <Card className={styles.children}>{children}</Card>
      </Grid2>
    </Container>
  );
};

export default StepWrapper;
