import React from "react";

const AboutModal = ({ isOpen, onClose, baseUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>ℹ️ About This Project</h2>
          <button className="close-button" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-body">
          <div className="about-section">
            <h3>🎯 What This Project Does</h3>
            <p>
              This is a <strong>self-hosted podcast platform</strong> that
              allows you to:
            </p>
            <ul>
              <li>Upload audio episodes directly through a web interface</li>
              <li>
                Generate a standard RSS feed compatible with all major podcast
                platforms
              </li>
              <li>
                Host your audio files and serve them with streaming support
              </li>
              <li>
                Distribute your podcast to Apple Podcasts, Spotify, YouTube, and
                more
              </li>
            </ul>
          </div>

          <div className="about-section">
            <h3>📡 How RSS Feeds Work</h3>
            <p>
              <strong>RSS (Really Simple Syndication)</strong> is a web feed
              format that allows podcast platforms to automatically discover and
              display your content.
            </p>

            <div className="rss-explanation">
              <h4>🔄 The RSS Process:</h4>
              <ol>
                <li>
                  <strong>You upload an episode</strong> → Audio file is stored
                  on the server
                </li>
                <li>
                  <strong>RSS feed is updated</strong> → Episode metadata is
                  added to the XML feed
                </li>
                <li>
                  <strong>Podcast platforms check the RSS</strong> → They
                  automatically detect new episodes
                </li>
                <li>
                  <strong>Episodes appear on platforms</strong> → Listeners can
                  discover and play your content
                </li>
              </ol>
            </div>

            <div className="rss-benefits">
              <h4>✅ Benefits of RSS:</h4>
              <ul>
                <li>
                  <strong>Automatic distribution</strong> - Upload once, appear
                  everywhere
                </li>
                <li>
                  <strong>Real-time updates</strong> - New episodes appear
                  immediately
                </li>
                <li>
                  <strong>Standard format</strong> - Works with all podcast
                  platforms
                </li>
                <li>
                  <strong>No platform lock-in</strong> - You own your content
                  and feed
                </li>
              </ul>
            </div>
          </div>

          <div className="about-section">
            <h3>⚙️ Deployment Instructions</h3>
            <div className="deployment-warning">
              <h4>⚠️ Important: Update Hardcoded Data</h4>
              <p>
                Before deploying, you <strong>MUST</strong> update the following
                hardcoded information in the server code:
              </p>
            </div>

            <div className="code-section">
              <h4>
                📝 File to Edit: <code>server/index.js</code>
              </h4>
              <div className="code-block">
                <p>
                  <strong>Current hardcoded values:</strong>
                </p>
                <ul>
                  <li>
                    <code>title: "My Podcast"</code> → Change to your podcast
                    name
                  </li>
                  <li>
                    <code>description: "A podcast where I explore..."</code> →
                    Update with your description
                  </li>
                  <li>
                    <code>itunes:author: "Ayush Kapruwan"</code> → Change to
                    your name
                  </li>
                  <li>
                    <code>itunes:name: "Ayush Kapruwan"</code> → Update your
                    name
                  </li>
                  <li>
                    <code>itunes:email: "ayush.kapruwan845@gmail.com"</code> →
                    Use your email
                  </li>
                  <li>
                    <code>atom:link href="your-domain.com/rss.xml"</code> →
                    Update with your domain
                  </li>
                </ul>
              </div>
            </div>

            <div className="deployment-steps">
              <h4>🚀 Deployment Steps:</h4>
              <ol>
                <li>
                  <strong>Update the hardcoded data</strong> in{" "}
                  <code>server/index.js</code>
                </li>
                <li>
                  <strong>Deploy to your preferred platform</strong> (Railway,
                  Heroku, Vercel, etc.)
                </li>
                <li>
                  <strong>Set environment variables</strong>:
                  <ul>
                    <li>
                      <code>BASE_URL</code> - Your deployed server URL
                    </li>
                    <li>
                      <code>PORT</code> - Server port (usually auto-set)
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Upload your first episode</strong> and test the RSS
                  feed
                </li>
                <li>
                  <strong>Submit the RSS URL</strong> to podcast platforms using
                  the Help guide
                </li>
              </ol>
            </div>
          </div>

          <div className="about-section">
            <h3>🔧 Technical Details</h3>
            <div className="tech-stack">
              <h4>🛠️ Built With:</h4>
              <ul>
                <li>
                  <strong>Frontend:</strong> React.js with modern CSS
                </li>
                <li>
                  <strong>Backend:</strong> Node.js with Express
                </li>
                <li>
                  <strong>File Upload:</strong> Multer for audio file handling
                </li>
                <li>
                  <strong>RSS Generation:</strong> Custom XML generation with
                  iTunes namespace
                </li>
                <li>
                  <strong>Audio Streaming:</strong> Range request support for
                  seeking
                </li>
              </ul>
            </div>

            <div className="features-list">
              <h4>✨ Features:</h4>
              <ul>
                <li>Drag & drop audio file upload</li>
                <li>Real-time episode preview</li>
                <li>Standard RSS 2.0 feed with iTunes compatibility</li>
                <li>Audio streaming with seek support</li>
                <li>Responsive design for all devices</li>
                <li>Copy-to-clipboard RSS URL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
