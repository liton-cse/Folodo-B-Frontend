import "./Styles/about.css";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function About() {
  const [objectives, setObjectives] = useState("");
  const [missions, setMissions] = useState("");
  const [visions, setVisions] = useState("");

  useEffect(() => {
    const fetchObjectives = async () => {
      try {
        const response = await axios.get(
          "https://fbbackend-server.onrender.com/api/about"
        );
        const objectivesData = response.data[0].objective;
        const missionsData = response.data[0].mission;
        const visionsData = response.data[0].vision;
        console.log(response.data[0]);
        setObjectives(objectivesData);
        setMissions(missionsData);
        setVisions(visionsData);
      } catch (error) {
        console.error("Error fetching objectives:", error);
      }
    };

    fetchObjectives();
  }, []);

  const renderObjectivesAsList = () => {
    if (!objectives) return null;

    const sentences = objectives
      .split(".")
      .filter((sentence) => sentence.trim().length > 0);

    return sentences.map((sentence, index) => (
      <li key={index} className="custom-li">
        {sentence.trim()}.
      </li>
    ));
  };

  const renderMissionAsList = () => {
    if (!missions) return null;

    const sentences = missions
      .split(".")
      .filter((sentence) => sentence.trim().length > 0);

    return sentences.map((sentence, index) => (
      <li key={index} className="custom-li">
        {sentence.trim()}.
      </li>
    ));
  };
  const renderVisionAsList = () => {
    if (!visions) return null;

    const sentences = visions
      .split(".")
      .filter((sentence) => sentence.trim().length > 0);

    return sentences.map((sentence, index) => (
      <li key={index} className="custom-li">
        {sentence.trim()}.
      </li>
    ));
  };
  return (
    <>
      <Container fluid className="my-5">
        <div className="block1"></div>
        <Row className="my-3 objective">
          <Col
            md={4}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src="/about1.jpg"
              alt="First Image"
              className="img-fluid about-img"
            />
          </Col>

          <Col md={4} className="d-flex flex-column">
            <Row className="about-heading">
              <h2>Objectives</h2>
            </Row>
            <Row>
              <ul className="custom-list justify-content-center align-items-center ms-3">
                {renderObjectivesAsList()}
              </ul>
            </Row>
          </Col>

          <Col
            md={4}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src="/about2.jpg"
              alt="Second Image"
              className="img-fluid about-img"
            />
          </Col>
        </Row>
        <div className="block"></div>
        {/*mission and vision*/}
        <Row className="my-4 mission-vission">
          <Col md={6} className="d-flex flex-column">
            <Row className="about-heading">
              <h2>Mission</h2>
            </Row>
            <Row>
              <ul className="custom-list justify-content-center align-items-center ms-3">
                {renderMissionAsList()}
              </ul>
            </Row>
          </Col>
          <Col md={6} className="d-flex flex-column">
            <Row className="about-heading">
              <h2>Vision</h2>
            </Row>
            <Row>
              <ul className="custom-list justify-content-center align-items-center ms-3">
                {renderVisionAsList()}
              </ul>
            </Row>
          </Col>
        </Row>

        <Row className="mx-5">
          <Col
            md={4}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src="/pic1.jpg"
              alt="First Image"
              className="img-fluid about-img"
            />
          </Col>
          <Col
            md={4}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src="/pic2.jpg"
              alt="First Image"
              className="img-fluid about-img"
            />
          </Col>
          <Col
            md={4}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src="/pic3.jpg"
              alt="First Image"
              className="img-fluid about-img"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
