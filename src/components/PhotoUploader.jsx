import React, { useState, useRef, useEffect } from 'react';

const PhotoUploader = ({handlePhotoUpload}) => {

  const fileInputRef = useRef(null); // Add this line



  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy'; // Explicitly showing a copy action
  };


  const handleFileChange = (event) => {
    event.preventDefault();
    const newFiles = Array.from(event.target.files); // Get new files from the event
    handlePhotoUpload(newFiles); // Directly send new files
    // Optionally, reset the input after handling to allow re-uploading the same files if desired
    event.target.value = null;
  };

  const triggerFileSelect = () => fileInputRef.current.click(); // Add this line

  return (
    <>
    <h2>Photo Uploader</h2>
      <div
        onDragOver={handleDragOver}
        onDrop={handleFileChange}
        style={{ border: '2px dashed #999', padding: '20px', textAlign: 'center' }}
      >
        Drag and drop your photos here or <button onClick={triggerFileSelect}>click to select files</button>
      </div>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        style={{ display: 'none' }}
        ref={fileInputRef} // Adjust this line
      />
    </>
  );
};

export default PhotoUploader;
