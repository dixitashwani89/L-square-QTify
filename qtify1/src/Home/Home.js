import { Search, SentimentDissatisfied } from "@mui/icons-material";
import {Grid2} from "@mui/material";
import { Box, flexbox } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import DisplaySection from "../Section/Section";

const DisplayMusic=()=>{
return (
    <>
      <Navbar />
      <Hero />
      {/* <Grid2 container columns={{ xs: 4, sm: 8, md: 12 }}>
         <Box container sx={{ display: 'flex',direction:'row'}}>
            {data.map((item) => (
              <Grid2 item key={item.id} xs={12} sm={6} md={4}>
                <MusicCard musicList={item} />
              </Grid2>
            ))}
          </Box>
      </Grid2> */}
      <DisplaySection/>
    </>
  );
}

export default DisplayMusic;