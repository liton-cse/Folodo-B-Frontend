import Carousel from "react-bootstrap/Carousel";
import "./AppHero.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";


function AppHero() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get('http://localhost:3000/api/slider');
    setItems(response.data);
  };

  return (
    <Container fluid className="carousel-container">
      <Carousel>
        {items.map((item) => {
          return (
            <Carousel.Item interval={5000} key={item._id}>
              <div className="d-block w-100 carousel-div">
                <img
                  src={`http://localhost:3000/slider-image/${item.image.split('/').pop()}`}
                  alt="Item"
                />
                {/* Title and SubTitle Display */}
                <Carousel.Caption className="carousel-caption">
                  <h2 className="carousel-title">{item.title}</h2>
                  <h6 className="carousel-subtitle">{item.subTitle}</h6>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
      </Container>
  );
}

export default AppHero;
