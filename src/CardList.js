import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
    const cardArray = robots.map( (robot, i) => {
        return (
            <Card id={robots[i].id}
                  key={robots[i].id}
                  name={robots[i].name}
                  username={robots[i].username}
                  email={robots[i].email}/>
                  );
    })
    return <div>{cardArray}</div>;
}

export default CardList;
