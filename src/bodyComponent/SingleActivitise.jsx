import { useParams } from "react-router-dom";
import "../App.css";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./EvenCard.css"

export default function SingleEvents() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  // Use useCallback to memoize fetchItems
  const fetchItems = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/activitise/${id}`);
      if (response.data) {
        setItem(response.data);
      } else {
        console.log("No data found for this ID");
        setItem(null);
      }
    } catch (error) {
      console.error("Error fetching event:", error);
      setItem(null);
    }
  }, [id]); // Include id in the dependencies

  useEffect(() => {
    fetchItems();
  }, [fetchItems]); // Dependency on fetchItems

  if (!item) {
    return <p>Loading event details or event not found...</p>;
  }

  return (
    <div className="mb-5">
      <div className="event_heading">
        <h3>{item?.title}</h3>
        <div className="event_style">
          <p>{item?.description}</p>
          <img
            src={`http://localhost:3000/activitise-image/${item.image.split("/").pop()}`}
            alt="event pic"
            width="100%"
            height="300px"
          />
          
        </div>
        <p> {`Presented by: ${item.author}`}</p>
        <p>{`Date: ${item.createdAt}`}</p>
      </div>
      
    </div>
  );
}
