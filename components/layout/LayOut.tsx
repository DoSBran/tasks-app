import { Box, Paper } from "@mui/material";
import Head from "next/head";
import React, { FC } from "react";
import { NavBar, SideBar } from "../ui";

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const LayOut: FC<Props> = ({ title = "tasks app", children }) => {
  return (
    <Paper sx={{ flexFlow: 1, width: "100%", height: "100vh"}}>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar/>
      <SideBar/>
      <Box sx={{padding:'10px 20px'}}>{children}</Box>
    </Paper>
  );
};
