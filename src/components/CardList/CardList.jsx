import React from 'react';
import Card from '../Card';

const CardList = (props) => {
    const {recipes} = props;

    const getCardJsx = (recipe) => {
        <div key={recipe.id}>
            <Card recipe={recipe} />
        </div>
    }

    return (
        <section>
            {recipes.map(getCardJsx)}
        </section>
    )
}

export default CardList
