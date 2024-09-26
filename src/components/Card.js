import React from "react";
import "./Card.css";

const Card = ({ imageUrl, avatarUrl, title, description, price, orders }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <div className="card-header">
          <div className="card-header-left">
            <img src={avatarUrl} alt="Avatar" className="card-avatar" />
            <h3 className="card-title">{title}</h3>
          </div>
          <span className="card-rating">★ 5.0</span>
        </div>
        <p className="card-description">{description}</p>
        <div className="card-footer">
          <span className="card-price">From ${price}</span>
          <span className="card-orders">({orders})</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
