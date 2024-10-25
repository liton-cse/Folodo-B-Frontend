import { Card, Button, Modal, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Styles/Founder.css";
import "../App.css";
import "../bodyComponent/EvenCard.css";

export default function FounderMember() {
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // To store the selected founder for modal

  const handleClose = () => {
    setShowModal(false);
    setSelectedItem(null); // Reset selected item when closing modal
  };

  const handleShow = (item) => {
    setSelectedItem(item); // Set the clicked item to display in modal
    setShowModal(true);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get(
      `http://localhost:3000/organization/founder`
    );
    setItems(response.data);
  };

  if (!items.length) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="mt-5">
        <div className="founder-heading">
          <h2>Founder Member</h2>
          <div className="block"></div>
        </div>
        {items.map((item) => (
          <Card className="my-5 custom-card p-3 shadow-sm" key={item._id}>
            <Row className="no-gutters">
              {/* Left Side: Image */}
              <Col md={4} xs={12}>
                <Card.Img
                  src={`http://localhost:3000/founder/${item.image
                    .split("/")
                    .pop()}`}
                  alt="Card image"
                  className="img-fluid custom-size card_image_top_hover"
                />
              </Col>

              {/* Right Side: Heading and Subheading */}
              <Col md={8} xs={12}>
                <Card.Body className="custom-body-content">
                  <Card.Title className="fw-bold">{item.name}</Card.Title>

                  <Card.Text>
                    {item.description.length > 300
                      ? item.description.substring(0, 300) + "..."
                      : item.description}
                  </Card.Text>
                  <Button variant="primary" onClick={() => handleShow(item)}>
                    Read More
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        ))}
      </div>

      {/* Modal for more information */}
      {selectedItem && (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="fw-bold">{selectedItem.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={`http://localhost:3000/founder/${selectedItem.image
                .split("/")
                .pop()}`}
              alt={selectedItem.name}
              className="img-fluid mb-4"
            />
            <p>{selectedItem.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
