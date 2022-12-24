import React from "react";
import { Spinner } from "react-bootstrap";

function CenterSpinner() {
  return (
    <div className={"d-flex justify-content-center"}>
      <Spinner
        className={""}
        style={{
          width: "50px",
          height: "50px",
          marginTop: "200px",
        }}
        animation="border"
        variant="warning"
      />
    </div>
  );
}

export default CenterSpinner;
