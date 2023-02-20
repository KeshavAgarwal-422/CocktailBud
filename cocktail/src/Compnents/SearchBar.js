import React from "react";
import { useGlobalContext } from "../context";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SearchBar() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchCocktail() {
    setSearchTerm(searchValue.current.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <section className="form">
        <Form onSubmit={handleSubmit} className="form-center">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search Cocktail"
              ref={searchValue}
              onChange={searchCocktail}
            />
          </Form.Group>
        </Form>
      </section>
    </>
  );
}
