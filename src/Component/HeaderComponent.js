import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { BsFillBasketFill } from "react-icons/bs";
import { AddContext } from "../App";

function HeaderComponent() {
  // const [search, setSearch] = useState("");
  // const [search2, setSearch2] = useState("");
  const [countreis, setCountreis] = useState([]);
  const { user, sear, setSear } = useContext(AddContext);
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
      .then((e) => {
        setCountreis(e.data.meals);
      });
  }, []);

  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className={"fs-3"} as={Link} to="/">
            Osh Food
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className={"fs-5"} as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link
                className={"fs-5"}
                href="https://zhanarkadyrmatov.github.io/My-portfolio/"
              >
                About
              </Nav.Link>
              <NavDropdown
                className={"fs-5"}
                title="Countries"
                id="navbarScrollingDropdown"
              >
                {countreis.map((e) => {
                  return (
                    <NavDropdown.Item as={Link} to={`countreis/${e.strArea}`}>
                      {e.strArea}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
              <Nav.Link
                className={"position-relative"}
                as={Link}
                to={`korzina/${"basket"}`}
              >
                <BsFillBasketFill
                  style={{
                    width: "25px",
                    height: "25px",
                  }}
                />
                <span class="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger">
                  {user.length}
                  <span class="visually-hidden">unread messages</span>
                </span>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                // aria-label="Search"
                value={sear}
                onChange={(e) => setSear(e.target.value)}
              />
              <Button
                as={Link}
                to={sear.length > 0 ? `/search/${sear}` : "/"}
                variant="outline-success"
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderComponent;
