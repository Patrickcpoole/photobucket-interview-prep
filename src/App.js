
import './App.css';
import PhotoUploader from './components/PhotoUploader';
import PhotoGallery from './components/PhotoGallery';
import React, { useState} from 'react';

function App() {

  const [photos, setPhotos] = useState([]);

  const handlePhotoUpload = (photo) => {
    // Make a call to add photo to database

    setPhotos(currentPhotos => [photo, ...currentPhotos])
  }

  return (
    <div className="App">
      <body>
        <h1>Photobucket interview prep</h1>
        <PhotoUploader handlePhotoUpload={handlePhotoUpload}/>
        <PhotoGallery photos={photos}/>
      </body>
    </div>
  );
}

export default App;




