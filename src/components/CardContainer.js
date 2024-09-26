import React from "react";
import Card from "./Card";
import "./CardContainer.css";
import img1 from "./images/Webdesign&Development.png";
import img2 from "./images/Logos&Branding.png";
import img3 from "./images/GraphicDesign.png";
import img4 from "./images/Video&MotionGraphics.png";
import avatar1 from "./images/avator.png";

const CardContainer = () => {
  const cardsData = [
    {
      id: 1,
      title: "Ux Studio",
      imageUrl: img1,
      avatarUrl: avatar1,
      description:
        "I will design web UI, dashboard or UX and app UI design in Figma",
      price: "20",
      orders: "19",
    },
    {
      id: 2,
      title: "Data Entry",
      imageUrl: img2,
      avatarUrl: avatar1,
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      price: "05",
      orders: "10",
    },
    {
      id: 3,
      title: "AI Expert",
      imageUrl: img3,
      avatarUrl: avatar1,
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      price: "60",
      orders: "15",
    },
    {
      id: 4,
      title: "AI Expert",
      imageUrl: img4,
      avatarUrl: avatar1,
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      price: "60",
      orders: "5",
    },
    {
      id: 1,
      title: "Ux Studio",
      imageUrl: img1,
      avatarUrl: avatar1,
      description:
        "I will design web UI, dashboard or UX and app UI design in Figma",
      price: "20",
      orders: "19",
    },
    {
      id: 2,
      title: "Data Entry",
      imageUrl: img2,
      avatarUrl: avatar1,
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      price: "05",
      orders: "10",
    },
    {
      id: 3,
      title: "AI Expert",
      imageUrl: img3,
      avatarUrl: avatar1,
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      price: "60",
      orders: "15",
    },
    {
      id: 4,
      title: "AI Expert",
      imageUrl: img4,
      avatarUrl: avatar1,
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      price: "60",
      orders: "5",
    },
  ];
  const cardsData2 = [
    {
      id: 1,
      title: "Ux Studio",
      imageUrl: img1,
      avatarUrl: avatar1,
      description:
        "I will design web UI, dashboard or UX and app UI design in Figma",
      price: "20",
      orders: "19",
    },
    {
      id: 2,
      title: "Data Entry",
      imageUrl: img2,
      avatarUrl: avatar1,
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      price: "05",
      orders: "10",
    },
    {
      id: 3,
      title: "AI Expert",
      imageUrl: img3,
      avatarUrl: avatar1,
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      price: "60",
      orders: "15",
    },
  ];

  return (
    <>
      <h3 className="section-title">Graphics & Designs</h3>
      <div className="card-container">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            imageUrl={card.imageUrl}
            avatarUrl={card.avatarUrl}
            description={card.description}
            price={card.price}
            orders={card.orders}
          />
        ))}
      </div>
      <h3
        className="section-title"
        style={{ margin: "1.2rem", paddingBottom: "2rem" }}
      >
        Saved Services!
      </h3>
      <div className="card-container">
        {cardsData2.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            imageUrl={card.imageUrl}
            avatarUrl={card.avatarUrl}
            description={card.description}
            price={card.price}
            orders={card.orders}
          />
        ))}
      </div>
    </>
  );
};

export default CardContainer;
