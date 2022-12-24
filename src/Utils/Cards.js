import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Cards({ props }) {
  return (
    <Col className={"mb-3 position-relative"} sm={6} xs={12} md={4} lg={3}>
      <motion.div
        className="h-100 p-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.9 }}
      >
        <Card className={"h-100"} style={{ maxWidth: "30rem" }}>
          <Link
            className="text-decoration-none"
            to={`categery/${props.strCategory}`}
          >
            <Card.Img variant="top" src={props.strCategoryThumb} />
            <Card.Body>
              <Card.Title className={"text-center"}>
                {props.strCategory}
              </Card.Title>
            </Card.Body>
          </Link>
        </Card>
      </motion.div>
    </Col>
  );
}

export default Cards;
