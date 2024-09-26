import React from "react";
import profileImg from "./images/avator.png"; // Your profile image path
import serviceImg1 from "./images/GraphicDesign.png"; // Replace with actual images
import serviceImg2 from "./images/GraphicDesign.png";
import projectImg from "./images/GraphicDesign.png"; // Replace with actual project images

import "./SellerGigs.css"; // Importing CSS

const SellerGigs = () => {
  const services = [
    {
      title: "UI Studio",
      rating: 5,
      fromPrice: 20,
      serviceImage: serviceImg1,
      profileImage: profileImg,
    },
    {
      title: "Data Entry",
      rating: 4,
      fromPrice: 50,
      serviceImage: serviceImg2,
      profileImage: profileImg,
    },
  ];

  const projects = [
    { status: "Pending", title: "Graphics & Design", price: 35, daysLeft: 2 },
    { status: "Delivered", title: "Graphics & Design", price: 35, daysLeft: 0 },
    { status: "Pending", title: "Graphics & Design", price: 35, daysLeft: 2 },
    { status: "Completed", title: "Graphics & Design", price: 35, daysLeft: 0 },
  ];

  const inbox = [
    {
      name: "Joe Hendry",
      message: "Hey, can you please help me...",
      profileimg: profileImg,
    },
    {
      name: "Joe Hendry",
      message: "Hey, can you please help me...",
      profileimg: profileImg,
    },
    {
      name: "Joe Hendry",
      message: "Hey, can you please help me...",
      profileimg: profileImg,
    },
    {
      name: "Joe Hendry",
      message: "Hey, can you please help me...",
      profileimg: profileImg,
    },
    {
      name: "Joe Hendry",
      message: "Hey, can you please help me...",
      profileimg: profileImg,
    },
    // Add more inbox items as needed
  ];

  return (
    <div className="seller-gigs-container">
      <div className="left-section">
        <div className="profile-card">
          <img src={profileImg} alt="Profile" className="profile-image" />
          <h3>Joe Hendry</h3>
          <p>Total Services: 34</p>
          <p>Completion Rate: 48%</p>
          <p>Rating: 5.0</p>
        </div>
        <div className="total-earning">
          <p>Total Earning</p>
          <h5>$465</h5>
        </div>
        <div className="inbox">
          <h4>Inbox ({inbox.length})</h4>
          {inbox.map((item, index) => (
            <div className="inbox-item" key={index}>
              <div className="inbox-image-column">
                <img
                  src={item.profileimg}
                  alt="Profile"
                  className="small-inbox-image"
                />
              </div>
              <div className="inbox-text-column">
                <p className="inbox-name">{item.name}</p>
                <p className="inbox-message">{item.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="right-section">
        <div className="services-offered">
          <h4>Services You Offered</h4>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-image-container">
                  <img
                    src={service.serviceImage}
                    alt={service.title}
                    className="service-image"
                  />
                </div>
                <div className="service-content">
                  <div className="service-title-profile">
                    <h5>{service.title}</h5>
                    <img
                      src={service.profileImage}
                      alt="Seller Profile"
                      className="small-profile-image"
                    />
                  </div>
                  <p>★ {service.rating}</p>
                  <p>From ${service.fromPrice}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="projects-queue">
          <h4>Projects in Queue</h4>
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                src={projectImg}
                alt={project.title}
                className="project-image"
              />
              <div className="project-details">
                <p className={`status ${project.status.toLowerCase()}`}>
                  {project.status}
                </p>
                <p>{project.title}</p>
              </div>
              <p>${project.price}</p>
              <p className="days-left">
                {project.daysLeft > 0
                  ? `${project.daysLeft} days left`
                  : "Delivered"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SellerGigs;
