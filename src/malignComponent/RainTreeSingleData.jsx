import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import "./MalignStyle/malign.css";
import axios from "axios";
export default function RainTreeSingleData() {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  // Use useCallback to memoize fetchItems
  const fetchItems = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/malign/rain-tree/${id}`
      );
      if (response.data) {
        setItem(response.data.post);
      } else {
        console.log("No data found for this ID");
        setItem(null);
      }
    } catch (error) {
      console.error("Error fetching News:", error);
      setItem(null);
    }
  }, [id]); // Include id in the dependencies

  useEffect(() => {
    fetchItems();
  }, [fetchItems]); // Dependency on fetchItems
  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <div className="my-3">
      <h3 className="heading_mahogony">{item?.title}</h3>
      <div className="mahogony_style">
        <p>{item?.description}</p>
        {item.image && (
          <img
            src={`http://localhost:3000/malign-tree/rain-tree/${item.image.split('/').pop()}`}
            alt="rain tree pic"
            width="100%"
            height="300px"
          />
        )}
      </div>
    </div>
  );
}
