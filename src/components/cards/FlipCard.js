import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import FoodCardBack from './FoodCardBack';
import FoodCardFront from './FoodCardFront';

const FlipCard = ({ data }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    console.log(data);

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <FoodCardFront flip={() => setIsFlipped((prev) => !prev)} />
            <FoodCardBack flip={() => setIsFlipped((prev) => !prev)} />
        </ReactCardFlip>
    )
}

export default FlipCard
