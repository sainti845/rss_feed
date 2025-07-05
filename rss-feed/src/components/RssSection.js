import React from "react";

const RssSection = ({ baseUrl, onCopyRssUrl }) => {
  return (
    <div className="rss-section">
      <a
        href={`${baseUrl}/rss.xml`}
        target="_blank"
        rel="noreferrer"
        className="rss-link"
      >
        📡 View RSS Feed
      </a>
      <button
        onClick={onCopyRssUrl}
        className="copy-button"
        title="Copy RSS URL"
      >
        📋 Copy RSS URL
      </button>
    </div>
  );
};

export default RssSection;
