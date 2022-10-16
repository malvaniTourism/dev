import React from 'react'
import Path from '../../services/baseUrl';

const RoundCard = ({ product }) => {

    const clickFood = () => {

    }

    return (
        <div>
            <div onClick={() => clickFood()} className="roundCard" style={{ backgroundImage: `url(${Path.API_PATH + product?.productable.image_url})` }}>
            </div>
            <div className='justifyCenter bold'>
                <text style={{ color: '#AF0171', flexGrow: 'wrap' }}>{product?.productable.name}</text>
            </div>
        </div>
    )
}

export default RoundCard
