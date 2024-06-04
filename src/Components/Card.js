import React, { useEffect, useState } from "react";
import "../css/CommentCard.css";
import Principal from "../Assets/Principal.JPG";
import manager from "../Assets/manager.JPG";
const CommentCards = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cards = [
    {
      title: "Manager Message",
      content:
        "Dear Parents/Teachers/Students, a very warm welcome for visiting J D Public School website I have been associated with this institution since 2013 Education plays a very vital role and works as a solid foundation in an individual's career and intellectual development. COVID 19 taught us lot of new things and made us realize the potential of our teachers who took on the challenge of teaching online, with full zest and courage. I take this opportunity to thank all the staff members and the Management for inspiring, guiding and supporting each other towards betterment of this institution",
      color:"rgba(18, 148, 204, 0.9)",
      image: manager,
    },
    {
      title: "Principal Message",
      content:
        " Dear Students and Parents Welcome to another exciting school year! Our dedicated staff and faculty are committed to providing a supportive and enriching environment where every student can thrive. We look forward to partnering with you to ensure a successful and rewarding academic journey.Let's work together to make this year our best one yet",
        color:"rgba(18, 148, 204, 0.9)",
        // image: "url('/path/to/image2.jpg')",
      image: Principal,
    },
  ];

  const handleCardClick = (index) => {
    setCurrentCardIndex(index);
  };

  return (
    <ul className="cards">
      {cards.map((card, index) => (
        <li
          key={index}
          className={`card ${
            currentCardIndex === index ? "card--current" : ""
          } ${
            currentCardIndex === (index + 1) % cards.length ? "card--next" : ""
          } ${
            currentCardIndex !== index &&
            currentCardIndex !== (index + 1) % cards.length
              ? "card--out"
              : ""
          }`}
          onClick={() => handleCardClick(index)}
          style={{
            backgroundColor: card.color,
          }}
        >
          <h1 >{card.title}</h1>

          <img src={card.image} alt={card.title} className="card-image" />
          <p style={{color:'white'}}>{card.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default CommentCards;
