import React from "react";
import { Container, Row } from "react-bootstrap";
import { FaTelegramPlane, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function FooterComponent() {
  const year = new Date().getFullYear();
  return (
    <div
      style={{
        backgroundColor: "#212529",
        color: "#c7c8c9",
        padding: "10px 0",
      }}
    >
      <Container>
        <Row className="align-items-center">
          <div className="col-md-10 col-sm-12">
            <div className={""}>
              <h6 className={"text-md-start text-center"}>
                copyright &copy; Bekmyrza uulu Janarbek {year}
              </h6>
            </div>
          </div>
          <div className="col-md-2 col-sm-12">
            <div className="p-2 d-flex justify-content-center">
              <a href="https://tlgg.ru/0504802002">
                <FaTelegramPlane
                  style={{
                    width: "25px",
                    height: "25px",
                  }}
                  className={"me-3"}
                />
              </a>
              <a href="https://www.instagram.com/zhanarbek_official">
                <FaInstagram
                  style={{
                    width: "25px",
                    height: "25px",
                  }}
                  className={"me-3"}
                />
              </a>
              <a href="https://wa.me/996504802002">
                <FaWhatsapp
                  style={{
                    width: "25px",
                    height: "25px",
                  }}
                  className={"me-2"}
                />
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default FooterComponent;
