import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "../Utils/CategoryCard";
import { motion } from "framer-motion";

function BasketComponent() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 30,
      }}
    >
      <Container>
        <Row className={"m-3"}>
          <CategoryCard />
        </Row>
      </Container>
    </motion.div>
  );
}

export default BasketComponent;
