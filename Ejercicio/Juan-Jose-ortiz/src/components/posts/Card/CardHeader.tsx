import React from "react";

const CardHeader = (props:any) => {
  return (
    <div className="CardHeader">
      <div className="CardHeader-Container">
        <div className="CarHeader-Img">
          <img src={"/assets/estado.jpg"} alt="" />
        </div>
        <div className="CarHeader-Details">
          <p>{props.post.nameProfile}</p>
          <span>{props.post.location}</span>
        </div>
        <div className="CarHeader-Action">
          <p>...</p>
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
