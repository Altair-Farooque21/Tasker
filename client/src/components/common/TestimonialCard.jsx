import React from 'react';
import css from "./TestimonialCard.module.css";

function TestimonialCard(props) {
  return (
    <div className={css.cardWrapper}>
        
        <img src={props.img} alt="" className={css.cardImg} width="70" />

        <p className={css.cardTestimonial}>
          {props.review}
        </p>

        <p className={css.cardName}>
          {props.name}
        </p>

    </div>
  )
}

export default TestimonialCard;