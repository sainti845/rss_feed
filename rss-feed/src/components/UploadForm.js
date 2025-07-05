import React, { forwardRef, useImperativeHandle } from "react";

const UploadForm = forwardRef(
  (
    {
      file,
      title,
      description,
      isLoading,
      message,
      onFileChange,
      onTitleChange,
      onDescriptionChange,
      onUpload,
    },
    ref
  ) => {
    const fileInputRef = React.useRef();

    useImperativeHandle(ref, () => ({
      resetFileInput: () => {
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      },
    }));

    return (
      <div className="upload-section">
        <div className="form-group">
          <label htmlFor="audio-file">Audio File</label>
          <div className="file-input-wrapper">
            <input
              ref={fileInputRef}
              id="audio-file"
              type="file"
              accept="audio/*"
              onChange={onFileChange}
              className="file-input"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="episode-title">Episode Title</label>
          <input
            id="episode-title"
            type="text"
            placeholder="Enter episode title..."
            value={title}
            onChange={onTitleChange}
            className="text-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="episode-description">Episode Description</label>
          <textarea
            id="episode-description"
            placeholder="Enter episode description..."
            value={description}
            onChange={onDescriptionChange}
            className="text-input"
            rows="4"
            style={{ resize: "vertical" }}
          />
        </div>

        <button
          onClick={onUpload}
          disabled={isLoading || !file || !title || !description}
          className="upload-button"
        >
          {isLoading && <span className="loading"></span>}
          {isLoading ? "Uploading..." : "Upload Episode"}
        </button>

        {message.text && (
          <div className={`${message.type}-message`}>{message.text}</div>
        )}
      </div>
    );
  }
);

export default UploadForm;
