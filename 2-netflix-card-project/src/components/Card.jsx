import React from "react";
import data from "../api/data.json";
import ListItem from "./ListItem";

const Card = () => {
  return (
    <ul className="grid">
      {data.map((elem) => {
        return (
          <ListItem key={elem.id} elem={elem} />
        )
      })}
    </ul>
  );
};

export default Card;
