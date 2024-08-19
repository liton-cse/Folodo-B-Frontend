import Card from "react-bootstrap/Card";
import news from "../data/event.json";
import { Link } from "react-router-dom";
import "./EvenCard.css";

export default function EventCard() {
  return (
    <div className="container">
      <div className="row ">
        {news?.map((news) => (
          <div key={news?.id} className="col-md-3">
            <Card style={{ width: "100%" }} className="card">
              <div className="overflow">
                <Card.Img
                  variant="top"
                  src={news.image}
                  className="card_image_top"
                />
              </div>

              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>
                  {news.description.length > 50
                    ? news.description.substring(0, 50) + "..."
                    : news.description}
                </Card.Text>
                <Link
                  to={`/event/${news?.id}`}
                  className="btn button btn-success ms-5"
                >
                  Read More
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
