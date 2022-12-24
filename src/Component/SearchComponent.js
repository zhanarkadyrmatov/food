import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CategoryCard from "../Utils/CategoryCard";
import CenterSpinner from "../Utils/CenterSpinner";
import { motion } from "framer-motion";

function SearchComponent() {
  const item = useParams();
  const [search3, setSearch3] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        item.id.length < 2
          ? `https://www.themealdb.com/api/json/v1/1/search.php?f=${item.id}`
          : `https://www.themealdb.com/api/json/v1/1/search.php?s=${item.id}`
      )
      .then((e) => {
        setSearch3(e.data.meals);
        setLoading(false);
      });
  }, [item]);
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
              {search3 ? (
                <CategoryCard props={search3} />
              ) : (
                <h3
                  style={{
                    color: "white",
                    marginTop: "180px",
                  }}
                  className="text-center"
                >
                  No results for:
                  <span
                    className={"mx-4"}
                    style={{
                      color: "black",
                    }}
                  >
                    "{item.id}"
                  </span>
                </h3>
              )}
            </Row>
          </motion.div>
        )}
      </Container>
    </div>
  );
}

export default SearchComponent;
