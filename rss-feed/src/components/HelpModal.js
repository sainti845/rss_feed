import React from "react";

const HelpModal = ({ isOpen, onClose, baseUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>📚 How to Use Your RSS Feed</h2>
          <button className="close-button" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-body">
          <p className="help-intro">
            Your RSS feed URL is: <strong>{baseUrl}/rss.xml</strong>
          </p>

          <div className="platform-section">
            <h3>🎧 Apple Podcasts</h3>
            <ol>
              <li>
                Open <strong>Apple Podcasts Connect</strong>
              </li>
              <li>
                Click <strong>"Add New Show"</strong>
              </li>
              <li>
                Select <strong>"Add a show with an RSS feed"</strong>
              </li>
              <li>
                Paste your RSS URL: <code>{baseUrl}/rss.xml</code>
              </li>
              <li>Fill in additional details and submit for review</li>
            </ol>
          </div>

          <div className="platform-section">
            <h3>🎵 Spotify</h3>
            <ol>
              <li>
                Go to <strong>Spotify for Podcasters</strong>
              </li>
              <li>
                Click <strong>"Add your podcast"</strong>
              </li>
              <li>
                Select <strong>"I have an RSS feed"</strong>
              </li>
              <li>
                Paste your RSS URL: <code>{baseUrl}/rss.xml</code>
              </li>
              <li>Complete the setup process</li>
            </ol>
          </div>

          <div className="platform-section">
            <h3>📺 YouTube Podcasts</h3>
            <ol>
              <li>
                Go to <strong>YouTube Studio</strong>
              </li>
              <li>
                Navigate to <strong>"Content"</strong> →{" "}
                <strong>"Podcasts"</strong>
              </li>
              <li>
                Click <strong>"Add podcast"</strong>
              </li>
              <li>
                Select <strong>"Import from RSS feed"</strong>
              </li>
              <li>
                Paste your RSS URL: <code>{baseUrl}/rss.xml</code>
              </li>
            </ol>
          </div>

          <div className="platform-section">
            <h3>🎶 Amazon Music</h3>
            <ol>
              <li>
                Visit <strong>Amazon Music for Podcasters</strong>
              </li>
              <li>
                Click <strong>"Add your podcast"</strong>
              </li>
              <li>
                Choose <strong>"I have an RSS feed"</strong>
              </li>
              <li>
                Paste your RSS URL: <code>{baseUrl}/rss.xml</code>
              </li>
              <li>Complete the verification process</li>
            </ol>
          </div>

          <div className="help-tips">
            <h3>💡 Tips:</h3>
            <ul>
              <li>Make sure your RSS feed is publicly accessible</li>
              <li>Upload at least one episode before submitting</li>
              <li>Review times vary by platform (usually 1-7 days)</li>
              <li>
                Keep your RSS feed URL private until you're ready to publish
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;
