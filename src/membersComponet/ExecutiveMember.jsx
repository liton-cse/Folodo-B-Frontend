import { Card, Button, Col, Row, Container,Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Styles/Executive.css";

export default function ExecutiveMember() {
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); 

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
      `http://localhost:3000/organization/executive`
    );
    setItems(response.data);
  };

  if (!items.length) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Container className="my-5">
        <div className="executive-heading text-center">
          <h2>Executive Member</h2>
          <div className="block"></div>
        </div>

        {/* Display Cards in Rows of Two */}
        <Row className="g-4 mt-4">
          {items.map((item) => (
            <Col md={6} key={item._id}>
              {" "}
              {/* Two Cards per row on medium and up */}
              <Card className="custom-card p-3 shadow-sm">
                <Row className="no-gutters">
                  {/* Left Side: Image */}
                  <Col md={5} xs={12}>
                    <Card.Img
                      src={`http://localhost:3000/executive/${item.image
                        .split("/")
                        .pop()}`}
                      alt="Card image"
                      className="img-fluid custom-executive-img-size card_executive_image_top_hover"
                    />
                  </Col>

                  {/* Right Side: Heading and Subheading */}
                  <Col md={7} xs={12}>
                    <Card.Body className="custom-executive-body">
                      <Card.Title className="fw-bold">{item.name}</Card.Title>
                      <Card.Text>
                        {item.designation} <br /> {item.phoneNumber} <br />
                        {item.email}
                      </Card.Text>
                      <Button variant="primary" onClick={() => handleShow(item)}>Read More</Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

        {/* Modal for more information */}
        {selectedItem && (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Body>
            <img
              src={`http://localhost:3000/executive/${selectedItem.image
                .split("/")
                .pop()}`}
              alt={selectedItem.name}
              className="img-fluid mb-4 modal-body-img"
            />
            <h4 className="fw-bold">{`Name: ${selectedItem.name}`}</h4>
            <h5 className="fw-bold">{`Designation: ${selectedItem.designation}`} <br/> {`Email: ${selectedItem.email}`}<br/>{`Mobile-Number: ${selectedItem.phoneNumber}`} <br/>{`Blood: ${selectedItem.bloodGroup}`} <br/> {`Facebook-Link: ${selectedItem.facebookLink}`} <br/>{`Address: ${selectedItem.address.village}, ${selectedItem.address.subDistrict}, ${selectedItem.address.district}, ${selectedItem.address.state}`} </h5>
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
