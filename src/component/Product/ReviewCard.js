import React from 'react'
import ReactStars from 'react-rating-stars-component';
import profilePng from "../../images/Profile.png";

const ReviewCard = ({review}) => {
    const options = {
        // size: "large",
        // value: product.ratings,
        // readOnly: true,
        // precision: 0.5,
        edit: false,
        color: "rgba(20,20,20)",
        activeColor: "	rgb(255,105,180)",
        size: window.innerWidth<600?20:25,
        value:review.rating,
        isHalf:true
      };
  return (
    <div className='reviewCard'>
        <img src={profilePng} alt="User" />
        <p>{review.name}</p>
        <ReactStars {...options} />
        <span>{review.comment}</span>
    </div>

  )
}

export default ReviewCard