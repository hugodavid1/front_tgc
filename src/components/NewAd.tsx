import React from "react";

export function AdCard(props: any): React.ReactNode {

  return (
    <div className="ad-card-container">
      <a className="ad-card-link" href={props.link}>
        <img src={props.imgUrl} alt="" className="ad-card-image" />
        <div className="ad-card-text">
          <div className="ad-card-title">{props.title}</div>
          <div className="ad-card-price">{props.price}</div>
        </div>
      </a>
    </div>
  );
}
