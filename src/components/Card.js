import React from "react";

const Card = ({name, username, email}) => {
    return (
        <div className='dib br3 pa3 ma2 grow bw2 shadow-5 bg-dark-gray white'>
            <img src={'https://robohash.org/' + name + '?200x200'} alt=""/>
            <div>
                <h2>{name}</h2>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
