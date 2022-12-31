import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SearchBar = () => {
    return (
        <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Digite o nome..."
                className="me-2"
                aria-label="Buscar"
            />
            <Button variant="orange">Buscar</Button>
        </Form>
    )
}

export default SearchBar;