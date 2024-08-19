import EventCard from "./EventCard";
import NewsCard from "./NewsCard";
import "./EvenCard.css";
import "../App.css";
import img1 from "../assets/images/pexels-bill-white-165537.jpg";
import img2 from "../assets/images/pexels-kelly-2918152.jpg";
import img3 from "../assets/images/pexels-pixabay-54332.jpg";
import img4 from "../assets/images/pexels-luis-dalvan-1770809.jpg";
import home_pic1 from "../assets/images/home_pic1.jpg";

export default function Home() {
  return (
    <div>
      <div className="home_header">
        <div className="home_header_div_1">
          <p>
            <span style={{ fontSize: "30px", fontWeight: "bold" }}>
              Folodo Bangladesh
            </span>{" "}
            is a sensitive organization regarding fruit tree plantation and
            ecological maintenance. The volunteers of Folodo Bangladesh are
            dedicated to plant fruit plants, in every corner of the country,
            necessary to sustain nitrition-finance-environment-amity and local
            natural balance and to raise awareness against the aggression of
            foreign plants that are harmful for the environment and ecology.
          </p>
        </div>
        <div className="home_header_div_2">
          <img src={home_pic1} alt="Home pic" className="img" />
        </div>
      </div>
      <div className="card_main_div">
        <div className="event_heading">
          <h1>
            <span style={{ color: "Gray", fontSize: "50px" }}>R</span>ecent{" "}
            <span style={{ color: "Gray", fontSize: "50px" }}>E</span>
            vents
          </h1>
          <br />
        </div>
        <div className="evenCard_div">
          <div className="eventCard">
            <EventCard />
          </div>
        </div>
      </div>
      <hr></hr>

      <div className="card_main_div">
        <div className="event_heading">
          <h1>
            <span style={{ color: "Gray", fontSize: "50px" }}>R</span>ecent{" "}
            <span style={{ color: "Gray", fontSize: "50px" }}>N</span>
            ews
          </h1>
          <br />
        </div>
        <div className="evenCard_div container">
          <div className="row con">
            <NewsCard image={img1} />
            <NewsCard image={img2} />
            <NewsCard image={img3} />
            <NewsCard image={img4} />
          </div>
        </div>
      </div>
    </div>
  );
}
