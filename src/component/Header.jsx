import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import img from "../assets/images/logo.png";
import "../App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={img}
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="Folodo Bangladesh logo"
          />
        </Navbar.Brand>
        <Navbar.Brand href="#home" className="ms-4" style={{ color: "green" }}>
          ফলদ বাংলাদেশ ফাউন্ডেশন
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className="rounded text-dark mx-1 hover-menu-item"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className="me-1 rounded text-dark hover-menu-item"
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/activities"
              className="mx-1 rounded text-dark hover-menu-item"
            >
              Activities
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/events"
              className="mx-1 rounded text-dark hover-menu-item"
            >
              Events
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/news"
              className="mx-1 rounded text-dark hover-menu-item"
            >
              News
            </Nav.Link>

            <NavDropdown
              title="Gallary"
              className=" mx-1 text-dark rounded text-dark hover-menu-item"
            >
              <NavDropdown.Item
                as={Link}
                to="/images-gallery"
                className="rounded text-dark hover-menu-item"
              >
                Images
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/videos-gallery"
                className="rounded text-dark hover-menu-item"
              >
                Videos
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Organization"
              className=" mx-1 text-dark rounded text-dark hover-menu-item"
            >
              <NavDropdown.Item
                as={Link}
                to="/founder-member"
                className="rounded text-dark hover-menu-item"
              >
                Founder Member
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/executive-member"
                className="rounded text-dark hover-menu-item"
              >
                Executive Member
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/general-member"
                className="rounded text-dark hover-menu-item"
              >
                General Member
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                to="/division"
                className="rounded text-dark hover-menu-item"
              >
                Division
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Malign-Tree"
              className="rounded text-dark text-dark hover-menu-item"
            >
              <NavDropdown.Item
                as={Link}
                to="/mehogony"
                className="rounded text-dark hover-menu-item"
              >
                Mahogony
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/rain-tree"
                className="rounded text-dark hover-menu-item"
              >
                Rain Tree
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/shishu"
                className="rounded text-dark hover-menu-item"
              >
                Shisham tree
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/akash-moni"
                className="rounded text-dark hover-menu-item"
              >
                Akash Moni
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/ukelipotas"
                className="rounded text-dark hover-menu-item"
              >
                Eucalyptus
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
