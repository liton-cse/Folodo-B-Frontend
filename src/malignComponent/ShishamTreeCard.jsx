import { Card, Button, Row, Col } from "react-bootstrap";
import "./MalignStyle/malign.css";
import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function ShishamTreeCard() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:3000/malign/shisham-tree');
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (!items.length) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="my-5">
        <div className="malign-heading">
          <h2>Shisham Tree</h2>
          <div className="block"></div>
        </div>
        {items.map((item) => (
          <Card className="my-3 malign-custom-card p-3 shadow-sm" key={item._id}>
            <Row className="no-gutters">
              {/* Left Side: Image */}
              <Col md={4} xs={12}>
                <Card.Img
                  src={`http://localhost:3000/malign-tree/shisham-tree/${item.image.split('/').pop()}`}
                  alt="Card image"
                  className="img-fluid custom-malign-size malign_card_image_top_hover"
                />
              </Col>

              {/* Right Side: Heading and Subheading */}
              <Col md={8} xs={12}>
                <Card.Body className="custom-malign-body-content">
                  <Card.Title className="fw-bold">{item.title}</Card.Title>
                  <Card.Text>
                    {item.description.length > 300
                      ? item.description.substring(0, 300) + "..."
                      : item.description}
                  </Card.Text>
                  <Button as={Link} to={`/shisham/${item._id}`} variant="primary">Read More</Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        ))}
      </div>
    </>
  );
}
