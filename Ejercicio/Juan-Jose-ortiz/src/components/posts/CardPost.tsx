import React from "react";
import CardAction from "./Card/CardAction";
import CardHeader from "./Card/CardHeader";

const CardPost = (props: any) => {
  return (
    <div className="CardPost">
      <CardHeader post={props.post}/>
      <div className="CardBody-Image">
        <img src={"/assets/imagenPost.jpg"} alt="" />
      </div>
      <CardAction/>
      <div className="CardDescription">
          <div className="CardLikes">
          <span className="CardPost--span"> 600  Me gusta</span>

          </div>
          <p> <span className="CardPost--span"> {props.post.nameProfile}</span>  {props.post.description}</p>
          <p className="CardPost--time">Hace 40 minutos</p>
      </div>
      

    </div>
  );
};

export default CardPost;
