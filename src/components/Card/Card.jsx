import React from 'react'

const Card = (props) => {
    const { name, image, calories } = props.recipe;

    return (
        <div>
            <img src={image} alt={name} />
            <section>
                <h2>{name}</h2>
                <h3>{calories}</h3>
            </section>
        </div>
    )
}

export default Card;
