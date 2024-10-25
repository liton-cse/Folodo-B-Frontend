import { useState, useEffect } from "react";
import axios from "axios";
import "../gallaryComponent/Galllery.css";
import "../App.css";
//import { Modal } from "react-bootstrap";
import SearchBox from "./SearchBox";
import { Card, Button } from 'react-bootstrap';


export default function VideoGallery() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get(`http://localhost:3000/gallary/videos`);
    setItems(response.data);
  };
  if (!items) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2 className="video-collection">Video Collections</h2>
      {/* Search Box */}
      <div className="my-5">
        <SearchBox navType="video"/>
        <div className="block"></div>
      </div>
    
      <div className="galley-video">
        {items.map((item) => {
         const videoUrl = `http://localhost:3000/videos/${item.district}/${item.subDistrict}/${item.videoUpd}?autoplay=0`;

          return (
            <Card className="mb-3" key={item._id}>
            <Card.Body>
                <iframe
                    width="100%"
                    height="400"
                    src={videoUrl}
                    //title={title}
                    allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <Card.Title className="mt-3">{item.district}<br/>{item.subDistrict}</Card.Title>
                <Card.Text>{}</Card.Text>
                <Button variant="primary" onClick={() => window.open(videoUrl, "_blank")}>
                  Open
                </Button>
            </Card.Body>
        </Card>

          );
        })}
      </div>
    </div>
  );
}
