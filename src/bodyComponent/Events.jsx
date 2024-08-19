import { useParams } from "react-router-dom";
import news from "../data/event.json";
import "../App.css";

export default function Events() {
  let { id } = useParams();

  const singleNews = news.find((item) => item.id == id);

  return (
    <div>
      <div className="event_heading">
        <h3>{singleNews?.title}</h3>
        <div className="event_style">
          <p>{singleNews?.description}</p>
          <img
            src={singleNews?.image}
            alt="event pic"
            width="100%"
            height="300px"
          />
        </div>
      </div>
    </div>
  );
}
