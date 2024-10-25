import { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "./EvenCard.css";

const EventCard = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get("http://localhost:3000/api/events");
    setItems(response.data);
  };

  return (
    <div className="mx-5">
      {items.map((item) => (
        <Card className="my-2 p-3 shadow-sm" key={item._id}>
          <Row className="no-gutters">
            {/* Left Side: Image */}
            <Col md={4} xs={12}>
              <Card.Img
                src={`http://localhost:3000/event-image/${item.image.split("/").pop()}`}
                alt="Card image"
                className="img-fluid custom-size card_image_top_hover"
              />
            </Col>

            {/* Right Side: Heading and Subheading */}
            <Col md={8} xs={12} >
              <Card.Body className="card-body-custom" >
                <Card.Title className="fw-bold">{item.name}</Card.Title>
                <Card.Text>
                    {item.location}, {item.date}
                </Card.Text>
                <Card.Text>
                {item.description.length > 300
                    ? item.description.substring(0, 300) + "..."
                    : item.description}
                </Card.Text>
                <Link
                  to={`/event/${item?._id}`}
                  className="btn button btn-success card-button"
                >
                  Read More
                </Link>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  );
};

export default EventCard;
