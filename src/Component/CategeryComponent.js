import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryCard from "../Utils/CategoryCard";
import { Container, Row } from "react-bootstrap";
import CenterSpinner from "../Utils/CenterSpinner";
import { motion } from "framer-motion";

function CategeryComponent() {
  const item = useParams();
  const [categery, setCategery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${item.id}`)
      .then((e) => {
        setCategery(e.data.meals);
        setLoading(false);
      });
  });
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
            <Row className={"m-3"}>
              <CategoryCard props={categery} />
            </Row>
          </motion.div>
        )}
      </Container>
    </div>
  );
}

export default CategeryComponent;
