import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryCard from "../Utils/CategoryCard";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import CenterSpinner from "../Utils/CenterSpinner";
import { motion } from "framer-motion";

function CountreisComponent() {
  const item = useParams();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${item.id}`)
      .then((e) => {
        setUser(e.data.meals);
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
              <CategoryCard props={user} />;
            </Row>
          </motion.div>
        )}
      </Container>
    </div>
  );
}

export default CountreisComponent;
