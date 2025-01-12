import {
  Container,
  Stepper,
  Step,
  StepLabel,
  Card,
  Grid2,
} from "@mui/material";
import React from "react";

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
      <Grid2
        container
        justifyContent="center"
        style={{ margin: "70px 0 ", height: 270 }}
      >
        <Card style={{ width: 600 }}>{children}</Card>
      </Grid2>
    </Container>
  );
};

export default StepWrapper;
