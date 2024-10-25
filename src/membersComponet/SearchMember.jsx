import { Card, Button, Col, Row, Container,Modal } from "react-bootstrap";
import { useState, useEffect,useCallback } from "react";
import axios from "axios";
import "./Styles/general.css";
import { useParams } from "react-router-dom";

export default function GeneralMemberCard() {
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); 
  const {name}= useParams();

  const handleClose = () => {
    setShowModal(false);
    setSelectedItem(null); 
  };

  const handleShow = (item) => {
    setSelectedItem(item); 
    setShowModal(true);
  };

  

  const fetchItems = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3000/organization/general/search/${name}`);
      if (response.data) {
        setItems(response.data);
      } else {
        console.log("No data found for this ID");
        setItems(null);
      }
    } catch (error) {
      console.error("Error fetching News:", error);
      setItems(null);
    }
  }, [name]); // Include id in the dependencies

  useEffect(() => {
    fetchItems();
  }, [fetchItems]); 

  if (!items.length) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Container className="my-5">
        <div className="general-card-heading">
          <h2>General Member</h2>
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
                      src={`http://localhost:3000/general/${item.image.split('/').pop()}`}
                      alt="Card image"
                      className="img-fluid custom-general-img-size card_general_image_top_hover"
                    />
                  </Col>

                  {/* Right Side: Heading and Subheading */}
                  <Col md={7} xs={12}>
                    <Card.Body className="custom-general-body">
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
              src={`http://localhost:3000/general/${selectedItem.image.split('/').pop()}`}
              alt={selectedItem.name}
              className="img-fluid mb-4 modal-body-img-general"
            />
            <h4 className="fw-bold">{`Name: ${selectedItem.name}`}</h4>
            <h5 className="fw-bold">{`Email: ${selectedItem.email}`}<br/>{`Mobile-Number: ${selectedItem.phoneNumber}`} <br/>{`Blood: ${selectedItem.bloodGroup}`} <br/> {`Facebook-Link: ${selectedItem.facebookLink}`}<br/>{`Feference: ${selectedItem.reference}`} <br/>{`Address: ${selectedItem.address.village}, ${selectedItem.address.subDistrict}, ${selectedItem.address.district}, ${selectedItem.address.state}`} </h5>
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
