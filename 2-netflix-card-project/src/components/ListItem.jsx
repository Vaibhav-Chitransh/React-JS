import React from "react";
import "./ListItem.css";

const ListItem = (props) => {
  const { name, img_url, rating, description, cast, genre, watch_url } =
    props.elem;

    const btnStyle = {
        backgroundColor: `${rating >= 8.5 ? "rgb(100, 225, 100)" : "rgb(220, 220, 22)"}`
    }

  return (
    <li key={props.key}>
      <div className="card">
        <div className="img-box">
          <img src={img_url} alt={name} width="30%" />
        </div>
        <div className="card-contents">
          <h1>{name}</h1>
          <h3>Rating : <span className={rating >= 8.5 ? 'super-hit' : 'average'}>{rating}</span></h3>
          <p>{description}</p>
          <p>Genre : {genre.join(', ')}</p>
          <p>Cast : {cast.join(', ')}</p>
          <a href={watch_url} target="_blank">
            <button style={btnStyle}>Watch Now</button>
          </a>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
