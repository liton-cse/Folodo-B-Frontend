import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import "./EvenCard.css";

function NewsCard() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get("http://localhost:3000/api/limited-news");
    setItems(response.data);
  };

  return (
    <Row className="">
      {items.map((item) => (
        <Col key={item._id} xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card style={{ width: "100%" }} className="card">
            <div className="overflow">
              <Card.Img
                variant="top"
                src={`http://localhost:3000/news-image/${item.image.split("/").pop()}`}
                className="card_image_top"
                alt="image"
              />
            </div>

            <Card.Body>
              <Card.Title style={{ fontWeight: "bold" }}>{item.title}</Card.Title>
              <Card.Text>
                {item.description.length > 150
                  ? item.description.substring(0, 150) + "..."
                  : item.description}
              </Card.Text>
              <Link to={`/news/${item._id}`} className="btn button btn-success">
                Read More
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default NewsCard;
