import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div>
        <h3>Rooms Data Loading</h3>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loading;
