import "./shows.css";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";
import { useState } from "react";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ selectedShow }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  return (
    <div className="show-details">
      {/* <h1>{selectedShow.name}</h1> */}
      <EpisodeList
        name={selectedShow.name}
        episodes={selectedShow.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}
