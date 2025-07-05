import React from "react";

const EpisodesList = ({ episodes }) => {
  if (episodes.length === 0) {
    return null;
  }

  return (
    <div className="episodes-section">
      <h2>📻 Uploaded Episodes</h2>
      <ul className="episodes-list">
        {episodes.map((ep, idx) => (
          <li key={idx} className="episode-item">
            <h3 className="episode-title">{ep.title}</h3>
            <p className="episode-description">{ep.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodesList;
