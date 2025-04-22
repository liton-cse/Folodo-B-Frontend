import EventCard2 from "./EventCard2";
import NewsCard from "./NewsCard";
import LimitedActivitiseCard from "./LimitedActivitiseCard";
import "./EvenCard.css";
import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [item, setItem] = useState(null);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get(
      "https://fbbackend-server.onrender.com/api/home"
    );
    setItem(response.data);
  };
  if (!item) {
    return <p>Loading...</p>;
  }

  // Split the first word and the rest of the string
  const firstWord = item.description.split(" ")[0];
  const remainingText = item.description.substring(firstWord.length);

  return (
    <div>
      <div className="block1"></div>
      <div className="home_header my-3">
        <div className="home_header_div_1 ">
          <p>
            <span style={{ fontSize: "30px", fontWeight: "bold" }}>
              {firstWord}
            </span>{" "}
            {remainingText}
          </p>
        </div>
        <div className="home_header_div_2 img-container">
          <img
            src={`https://fbbackend-server.onrender.com/home-image/${item.image
              .split("/")
              .pop()}`}
            alt="Home pic"
          />
        </div>
      </div>
      <div className="block"></div>
      <div className="card-event">
        <div className="event-heading">
          <h1>
            <span style={{ color: "Gray", fontSize: "50px" }}>R</span>ecent{" "}
            <span style={{ color: "Gray", fontSize: "50px" }}>E</span>
            vents
          </h1>
          <br />
        </div>
        <div className="evenCard_div">
          <div className="eventCard">
            <EventCard2 />
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="block"></div>

      <div className="card-news">
        <div className="news-heading">
          <h1>
            <span style={{ color: "Gray", fontSize: "50px" }}>R</span>ecent{" "}
            <span style={{ color: "Gray", fontSize: "50px" }}>N</span>
            ews
          </h1>
          <br />
        </div>
        <div className="evenCard_div container">
          <div className="row con">
            <NewsCard />
          </div>
        </div>
      </div>

      <div className="block"></div>

      <div className="card-activitise">
        <div className="activitise-heading">
          <h1>
            <span style={{ color: "Gray", fontSize: "50px" }}>R</span>ecent{" "}
            <span style={{ color: "Gray", fontSize: "50px" }}>A</span>
            ctivitise
          </h1>
          <br />
        </div>
        <div className="evenCard_div container">
          <div className="row con">
            <LimitedActivitiseCard />
          </div>
        </div>
      </div>

      <div className="block"></div>
    </div>
  );
}
