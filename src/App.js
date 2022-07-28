import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { v4 as uuid } from "uuid";
import { ImgViewer } from "./Components/ImgViewer/ImgViewer";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [data, setData] = useState();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  const getLocalImages = () => {
    if (localStorage.getItem("images") === null) {
      localStorage.setItem("images", JSON.stringify([]));
    } else {
      let localImages = JSON.parse(localStorage.getItem("images"));
      setImages(localImages);
    }
  };

  useEffect(() => {
    getLocalImages();
  }, []);

  const handleUpload = (event) => {
    setName(event.target.files[0].name);
    setImage(data.image);
    setImages((images) => [...images, data]);
    localStorage.setItem("images", JSON.stringify(images));
  };

  const displayedData = images.slice(-5);

  return (
    <div className="App">
      <div className="App__container" onChange={handleUpload}>
        <ImgViewer displayedData={displayedData} />
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => {
            setData({ ...data, id: uuid(), name: name, image: base64 });
          }}
        />
      </div>
    </div>
  );
};

export default App;
