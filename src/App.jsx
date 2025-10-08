import React from "react";
import { useState } from "react";
import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails";
import { tvShows } from "./shows/data";
import "./index.css";

/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  const [selectedShow, setSelectedShow] = useState(tvShows[0]);
  //   const [selectedEpisode, setSelectedEpisode] = useState(
  //     tvShows[0].episodes[0]
  //   );
  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection
          showData={tvShows}
          selectedShow={selectedShow}
          setSelectedShow={setSelectedShow}
        />
      </header>
      <main>
        <ShowDetails selectedShow={selectedShow} />
      </main>
    </>
  );
}
