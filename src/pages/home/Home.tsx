import React, { useState } from "react";
import Header from "../../components/header/Header";
import Gallery from "../../assets/Gallery";
import Webcam from "react-webcam";
import "./home.css";
import BlackGallery from "../../assets/BlackGallery";
import Folders from "../../assets/Folders";
import Screenshot from "../../assets/Screenshot";
import Camera from "../../assets/Camera";
import Pencil from "../../assets/Pencil";
import Bucket from "../../assets/Bucket";

interface IWebcamComponent {
  setImages: any;
  close: any;
}

const WebcamComponent: React.FC<IWebcamComponent> = ({ setImages, close }) => {
  const webcamRef = React.useRef<any>(null);

  const capture = React.useCallback(() => {
    if (webcamRef && webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImages((prev: Array<string>) => [...prev, imageSrc]);
    }
  }, [webcamRef]);

  return (
    <div className="webcam-container">
      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        style={{
          height: "100vh",
          width: "100%",
          objectFit: "cover",
          position: "fixed",
        }}
      />
      <div className="webcam-buttons">
        <Folders onClick={close} />
        <Screenshot
          onClick={() => {
            capture();
            close();
          }}
        />
        <Camera />
      </div>
    </div>
  );
};

const Home = () => {
  const [isCameraOpen, setCamerasOpen] = useState<boolean>(false);
  const [images, setImages] = useState<Array<string>>([]);

  return (
    <>
      <Header />
      {images.length ? (
        <div className="images-container">
          <div className="img" onClick={() => setCamerasOpen(true)}>
            <BlackGallery />
            <p>Add photo</p>
          </div>
          {images.map((item, idx) => (
            <div className="image-container" key={idx}>
              <img src={item} alt="screen" />
              <Pencil onClick={() => {}} />
              <Bucket
                onClick={() =>
                  setImages((prev) =>
                    [...images].filter((item, i) => i !== idx)
                  )
                }
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-container">
          <Gallery />
          <p>
            Your photo gallery is empty. Start uploading your photos and share
            you experience
          </p>
          <button onClick={() => setCamerasOpen(true)}>Upload Photos</button>
        </div>
      )}

      {isCameraOpen && (
        <WebcamComponent
          setImages={setImages}
          close={() => setCamerasOpen(false)}
        />
      )}
    </>
  );
};

export default Home;
