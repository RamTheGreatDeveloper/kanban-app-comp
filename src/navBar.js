import React from "react";
import "./styles.css";

const ListGroup = () => {
  return (
    <ul className="main">
      <li className="js">
        Tickets
        <ul className="l3">
          <li className="js2">ALL</li>
          <li className="js2">ONLY MY TICKETS</li>
          <li className="js2">RECENTLY UPDATED</li>
        </ul>
      </li>
    </ul>
  );
};

export default ListGroup;
