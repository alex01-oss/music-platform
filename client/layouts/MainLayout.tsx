import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Player from "@/components/Player";
import { Container } from "@mui/material";

interface MainLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title,
  description,
  keywords,
}) => {
  return (
    <>
      <Head>
        <title>{title || "Music app"}</title>
        <meta
          name="description"
          content={
            `Music platform. Here everyone can leave their track and become famous.` +
            description
          }
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={keywords || "Music, tracks, artists"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Container style={{ margin: "90px auto" }}>{children}</Container>
      <Player />
    </>
  );
};

export default MainLayout;
