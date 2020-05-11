import React from "react";
import tachyons from "tachyons";

const Card = ({name, username, email}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={'https://robohash.org/'+name+'?200x200'} alt=""/>
            <div>
                <h2>{name}</h2>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
