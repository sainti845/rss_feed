import React, { useState } from "react";
import axios from "axios";
import "./App.css";

// Import components
import Header from "./components/Header";
import UploadForm from "./components/UploadForm";
import EpisodesList from "./components/EpisodesList";
import RssSection from "./components/RssSection";
import Footer from "./components/Footer";
import AboutModal from "./components/AboutModal";
import HelpModal from "./components/HelpModal";

function App() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [showHelp, setShowHelp] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

  const handleUpload = async () => {
    if (!file || !title || !description) {
      setMessage({
        type: "error",
        text: "Please fill in all fields and select a file",
      });
      return;
    }

    setIsLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const formData = new FormData();
      formData.append("audio", file);
      formData.append("title", title);
      formData.append("description", description);

      const res = await axios.post(`${BASE_URL}/upload`, formData);

      if (res.data.success) {
        setEpisodes([...episodes, res.data.episode]);
        setFile(null);
        setTitle("");
        setDescription("");
        setMessage({ type: "success", text: "Episode uploaded successfully!" });
      }
    } catch (error) {
      console.error("Upload error:", error);
      setMessage({
        type: "error",
        text:
          error.response?.data?.error ||
          "Failed to upload episode. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("audio/")) {
      setFile(selectedFile);
      setMessage({ type: "", text: "" });
    } else {
      setMessage({ type: "error", text: "Please select a valid audio file" });
    }
  };

  const copyRssUrl = () => {
    navigator.clipboard.writeText(`${BASE_URL}/rss.xml`);
    setMessage({ type: "success", text: "RSS URL copied to clipboard!" });
  };

  return (
    <div className="App">
      <div className="container">
        <Header
          onAboutClick={() => setShowAbout(true)}
          onHelpClick={() => setShowHelp(true)}
        />

        <UploadForm
          file={file}
          title={title}
          description={description}
          isLoading={isLoading}
          message={message}
          onFileChange={handleFileChange}
          onTitleChange={(e) => setTitle(e.target.value)}
          onDescriptionChange={(e) => setDescription(e.target.value)}
          onUpload={handleUpload}
        />

        <EpisodesList episodes={episodes} />

        <RssSection baseUrl={BASE_URL} onCopyRssUrl={copyRssUrl} />
      </div>

      <Footer />

      <AboutModal
        isOpen={showAbout}
        onClose={() => setShowAbout(false)}
        baseUrl={BASE_URL}
      />

      <HelpModal
        isOpen={showHelp}
        onClose={() => setShowHelp(false)}
        baseUrl={BASE_URL}
      />
    </div>
  );
}

export default App;
