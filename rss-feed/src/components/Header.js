import React from 'react';

const Header = ({ onAboutClick, onHelpClick }) => {
  return (
    <div className="header">
      <div className="header-top">
        <h1>🎙️ Podcast Uploader</h1>
        <div className="header-buttons">
          <button 
            className="about-button"
            onClick={onAboutClick}
            title="About this project"
          >
            ℹ️ About
          </button>
          <button 
            className="help-button"
            onClick={onHelpClick}
            title="How to use RSS feed"
          >
            ❓ Help
          </button>
        </div>
      </div>
      <p>Upload your episodes and generate an RSS feed for podcast platforms</p>
    </div>
  );
};

export default Header; 