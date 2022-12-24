import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Container, Col, Row } from "react-bootstrap";
import CenterSpinner from "../Utils/CenterSpinner";
import { motion } from "framer-motion";

function ProdukComponent() {
  const item = useParams();
  const [produk, setProduk] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${item.id}`)
      .then((e) => {
        setProduk(e.data.meals[0]);
        setLoading(false);
      });
  }, []);

  let janar = Object.keys(produk).filter((e) => e.includes("strIngredient"));

  return (
    <div>
      <Container>
        {loading ? (
          <CenterSpinner />
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 30,
            }}
          >
            <Card
              style={{
                borderRadius: "30px",
                marginBottom: "20px",
              }}
              className={"m-3"}
            >
              <Card.Body>
                <Row className={"align-items-center"}>
                  <Col md={8} sm={12}>
                    <div className={""}>
                      <Card.Title className="fs-2 text-center">
                        {produk.strMeal}
                      </Card.Title>
                      <p className="fs-6">
                        <div className="row text-center">
                          <i className={"fs-4 col-xs-12"}>
                            Area: {produk.strArea}
                          </i>
                          <i className="fs-4 col-xs-12">
                            Category: {produk.strCategory}
                          </i>
                        </div>

                        <p
                          style={{
                            backgroundColor: "green",
                            padding: "5px",
                            margin: "5px 0px",
                            borderRadius: "20px 0 20px 0",
                          }}
                          className={"text-center fs-4"}
                        >
                          Ingredients:
                        </p>
                        <span className={""}>
                          {janar.map((e) => (
                            <i className="fs-5 text-start me-3">{produk[e]}</i>
                          ))}
                        </span>
                      </p>
                    </div>
                  </Col>
                  <Col md={4} sm={12}>
                    <Card.Img
                      style={{
                        borderRadius: "30px",
                      }}
                      variant="top"
                      src={produk.strMealThumb}
                    />
                  </Col>
                </Row>
                <p
                  style={{
                    backgroundColor: "green",
                    padding: "5px",
                    margin: "20px 0px",
                    borderRadius: "20px 0 20px 0",
                  }}
                  className={"fs-4 text-center"}
                >
                  Instructions
                </p>
                <Card.Text
                  style={{
                    margin: "0px",
                    textIndent: "40px",
                  }}
                  className={""}
                >
                  {produk.strInstructions}
                </Card.Text>
                <p
                  style={{
                    backgroundColor: "green",
                    padding: "5px",
                    margin: "20px 0px",
                    borderRadius: "20px 0 20px 0",
                  }}
                  className={"fs-5 text-center"}
                >
                  Watch the video instruction below
                </p>
                <div className="col-xs-12 col-md-12 col-sm-12">
                  <div className={"d-flex justify-content-center"}>
                    {produk && (
                      <iframe
                        width="584"
                        height="320"
                        src={`https://www.youtube.com/embed/${produk.strYoutube.slice(
                          32
                        )}`}
                        title="Greek Lamb Souvlaki Recipe"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    )}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </motion.div>
        )}
      </Container>
    </div>
  );
}

export default ProdukComponent;
