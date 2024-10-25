import { useState, useEffect,useCallback } from "react";
import axios from "axios";
import "../gallaryComponent/Galllery.css";
import "../App.css";
import { Card, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";


export default function SearchVideo() {
  const [items, setItems] = useState([]);
  const { name } = useParams();
  
  const fetchItems = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3000/gallary/search-videos/${name}`);
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

  if (!items) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2 className="video-collection">Video Collections</h2>
 
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
