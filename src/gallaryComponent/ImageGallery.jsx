import { useState } from "react";
import images from "../data/imagegallary.json";
import "../gallaryComponent/Galllery.css";
import { Modal } from "react-bootstrap";

export default function ImageGallery() {
  const [tempImage, setTempImage] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const getImage = (imgSrc) => {
    setTempImage(imgSrc);
    setShow(true);
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img className="w-100" src={tempImage} />
        </Modal.Body>
      </Modal>

      <div className="galley">
        {images.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImage(item.image)}
            >
              <img src={item.image} alt="picture" width="100%" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
