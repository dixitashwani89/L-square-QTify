import axios from "axios";
import React, { useEffect, useState } from "react";
import MusicCard from "../Card/Card";
import styles from "../Section/Section.module.css"

const DisplaySection=()=>{
const [data,setData]=useState([])

const performAPICall = async () => {
    try {
      const response = await axios.get(`https://qtify-backend-labs.crio.do/albums/top`);
      console.log(response.data)
      setData(response.data)
    } catch (error) {
      
      if (error.response) {
        if (error.response.status === 500) {
          console.log(error.response.data.message);
        } else {
          console.log("Something went wrong!");
        }
      } 
    }
  };

useEffect(()=>performAPICall(),[])
return (
    <>
      
      {/* <Grid2 container columns={{ xs: 4, sm: 8, md: 12 }}>
         <Box container sx={{ display: 'flex',direction:'row'}}>
            {data.map((item) => (
              <Grid2 item key={item.id} xs={12} sm={6} md={4}>
                <MusicCard musicList={item} />
              </Grid2>
            ))}
          </Box>
      </Grid2> */}
      <div className={styles.cardSection}>
      <h1 className={styles.header}>Top Albums</h1>
      <div className={styles.albumsLayout}>
        {data.map(item => (
          <MusicCard key={item.id} musicList={item} />
        ))}
      </div>
    </div>
    </>
  );
}

export default DisplaySection;