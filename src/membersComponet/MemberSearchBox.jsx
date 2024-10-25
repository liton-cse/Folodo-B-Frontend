import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function MemberSearchBox() {
    const [query, setQuery] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();

      };

  return (
    <div>
      <Form onSubmit={handleSearch} className="d-flex me-auto  mb-3 search-box">
        <Form.Control
          type="text"
          placeholder="Search..."
          className="me-2 custom-search"
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          as={Link}
          to={`/search/${query}`}
          variant="outline-success"
          className="ms-3"
        >
          Search
        </Button>
      </Form>
    </div>
  );
}
export default MemberSearchBox;
