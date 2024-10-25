import { useState, useEffect,useCallback } from "react";
import axios from "axios";
import "../gallaryComponent/Galllery.css";
import "../App.css";
import { Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";



export default function SearchImage() {
  const [items, setItems] = useState([]);
  const [tempImage, setTempImage] = useState("");
  const [zila, setZila] = useState("");
  const [upazila, setUpazila] = useState("");
  const [show, setShow] = useState(false);
  const { name } = useParams();


  const handleClose = () => setShow(false);

  const getImage = (imgSrc, district, subDistrict) => {
    setTempImage(imgSrc);
    setZila(district);
    setUpazila(subDistrict);
    setShow(true);
  };
  // Use useCallback to memoize fetchItems
  const fetchItems = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3000/gallary/search-images/${name}`);
      if (response.data) {
        setItems(response.data);
      } else {
        console.log("No data found for this ID");
        setItems(null);
      }
    } catch (error) {
      console.error("Error fetching News:", error);
      setItems(null);
    }
  }, [name]); // Include id in the dependencies

  useEffect(() => {
    fetchItems();
  }, [fetchItems]); 
  
  // Dependency on fetchItems
  if (!items) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2 className="image-collection">Image Collections</h2>
      {/* Modal to show selected image */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton className="modal_hader">
          {zila} <br /> {upazila}
        </Modal.Header>
        <Modal.Body>
          {/* Display the selected image */}
          {tempImage && (
            <img className="w-100" src={tempImage} alt="Selected" />
          )}
        </Modal.Body>
      </Modal>

      <div className="galley">
        {items.map((item) => {
          const imageUrl = `http://localhost:3000/images/${item.district}/${
            item.subDistrict
          }/${item.imageUpd.split("/").pop()}`;
          return (
            <div
              className="pics"
              key={item._id}
              onClick={() =>
                getImage(imageUrl, item.district, item.subDistrict)
              }
            >
              <img src={imageUrl} alt="picture" width="100%" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
