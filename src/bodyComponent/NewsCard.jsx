/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function NewsCard({ image }) {
  return (
    <div className="col-md-3">
      <Card style={{ width: "100%" }} className="card">
        <div className="overflow">
          <Card.Img variant="top" src={image} className="card_image_top" />
        </div>

        <Card.Body>
          <Card.Title>Heading of news</Card.Title>
          <Card.Text>Some Description of news in 50 character</Card.Text>
          <Button variant="primary" className="button">
            Read More
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
