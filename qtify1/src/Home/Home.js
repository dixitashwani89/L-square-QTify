import React from "react";
import { useOutletContext } from "react-router-dom";
import { fetchFilters } from "../api/api";
import Hero from "../Hero/Hero";
import Section from "../Section/Section";
import styles from "./Home.module.css";
import Divider from '@mui/material/Divider';

export default function HomePage() {
  const { data } = useOutletContext();
  const { newAlbums, topAlbums, songs, genres } = data;

  console.log("genres", genres);

  return (
    <>
      <Hero />
      <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Divider/>
        <Section title="New Albums" data={newAlbums} type="album" />
        <Divider/>
        <Section
          title="Songs"
          data={songs}
          filterSource={fetchFilters}
          type="song"
        />
        <Divider/>
      </div>
    </>
  );
}