import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

const TrackList = ({ tracks, onAdd, isRemoval, onRemove }) => {
  return (
    <div className="TrackList">
      {tracks?.map((track) => {
        return (
          <Track
            key={track.id}
            track={track}
            onAdd={onAdd}
            isRemoval={isRemoval}
            onRemove={onRemove}
          />
        );
      })}
    </div>
  );
};

export default TrackList;
