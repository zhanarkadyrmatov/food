import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import Cards from "../Utils/Cards";
import CenterSpinner from "../Utils/CenterSpinner";
import { motion } from "framer-motion";

function HomeComponent() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((e) => {
        setUser(e.data.categories);
        setLoading(false);
      });
  }, []);
  return (
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
            {user.map((id) => {
              return <Cards props={id} />;
            })}
          </Row>
        </motion.div>
      )}
    </Container>
  );
}

export default HomeComponent;
