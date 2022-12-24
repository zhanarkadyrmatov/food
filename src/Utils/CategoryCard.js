import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Card } from "react-bootstrap";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { AddContext } from "../App";
import { motion } from "framer-motion";

function CategoryCard({ props }) {
  const item = useParams();
  console.log(props);

  const { user, setUser } = useContext(AddContext);

  const add = (r) => {
    if (user.filter((e) => e.idMeal === r.idMeal)[0]) {
      let aa = user.filter((e) => e.idMeal !== r.idMeal);
      setUser(aa);
    } else {
      setUser((prev) => [...prev, r]);
    }
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <>
      {item.id === "basket" && user[0] === undefined ? (
        <div className="mt-4">
          <div className="d-flex justify-content-center">
            <div className="basket" />
            {/* <img src="https://cdn-icons-gif.flaticon.com/8825/8825123.gif" /> */}
          </div>
          <h4
            style={{
              color: "black",
              marginTop: "-30px",
            }}
            className="text-center"
          >
            У вас нет выбранных товаров
          </h4>
        </div>
      ) : null}
      {(item.id === "basket" ? user : props).map((e) => {
        return (
          <Col className={"mb-3"} sm={6} xs={12} md={4} lg={3}>
            <motion.div
              className="h-100 p-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              // whileHover={{ scale: 1.08 }}
              // whileTap={{ scale: 0.9 }}
            >
              <Card
                className={"h-100 overflow-hidden position-relative"}
                style={{ maxWidth: "30rem" }}
              >
                <BsFillBookmarkHeartFill
                  onClick={() => add(e)}
                  style={{
                    top: "10px",
                    right: "10px",
                    width: "40px",
                    height: "40px",
                    cursor: "pointer",
                    zIndex: "10",
                    fill: user.filter((r) => r.idMeal === e.idMeal)[0]
                      ? "red"
                      : "",
                  }}
                  className={"position-absolute"}
                />
                <Link
                  className="text-decoration-none"
                  to={`/produk/${e.idMeal}`}
                >
                  <Card.Img
                    className="images"
                    variant="top"
                    src={e.strMealThumb}
                  />
                  <Card.Body>
                    <Card.Title className={"m-0 fs-6 text-center"}>
                      {e.strMeal}
                    </Card.Title>
                  </Card.Body>
                </Link>
              </Card>
            </motion.div>
          </Col>
        );
      })}
    </>
  );
}

export default CategoryCard;
