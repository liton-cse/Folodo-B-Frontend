import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function SearchBox({navType}) {
    const [query, setQuery] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();

      };


  const getSearchLink = () => {
    // Use the navType prop to conditionally decide the link
    if (navType === "img") {
      return `/search-image/${query}`;
    } else if (navType === "video") {
      return `/search-video/${query}`;
    }
    // Default link if none provided
  };
  return (
    <div>
      <Form onSubmit={handleSearch}  className="d-flex me-auto  mb-3 search-box">
        <Form.Control
          type="text"
          placeholder="Search..."
          className="me-2"
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          as={Link}
          to={getSearchLink()}
          variant="outline-success"
          className="ms-3"
        >
          Search
        </Button>
      </Form>
    </div>
  );
}
export default SearchBox;
