import React from 'react';
import "../styles/cards.scss";
import Stories from "./Stories";
import Card from "./Card";


const Cards = () => {

  return (
    <>

      <div className="cards">
        <Stories />
        <br />

        <Card
          accountName="Juan"
          storyBorder={true}
          image="http://images7.memedroid.com/images/UPLOADED729/5ed50d291be0c.jpeg"
          likedByText="Albeiro"
          likedByNumber={239}
          hours={10}
        />
        <br />
        <Card
          accountName="Jhon"
          image="https://pbs.twimg.com/media/Ev0Qs-OXIAoimNb.jpg"
          likedByText="Alejandro"
          likedByNumber={457}
          hours={9}
        />
        <br />
        <Card
          accountName="Bernardo"
          storyBorder={true}
          image="http://images3.memedroid.com/images/UPLOADED370/5d190e8d363b7.jpeg"
          likedByText="Bryan"
          likedByNumber={190}
          hours={4}
        />
      </div>
    </>
  );
}

export default Cards;