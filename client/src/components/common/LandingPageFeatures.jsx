import React from 'react';
import css from "./LandingPageFeatures.module.css";

function LandingPageFeatures(props) {
  return (
    <div className={css.container}>
        <p className={css.title}>
            {props.title1}
            <br />
            <span>{props.title2}</span>
        </p>

        <p className={css.desc}>
            {props.desc}
        </p>

    </div>
  )
}

export default LandingPageFeatures;