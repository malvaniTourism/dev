import React from 'react'

const RoundCard = () => {

    const clickFood = () => {

    }

    return (
        <div>
            <div onClick={() => clickFood()} className="roundCard" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7pPxxfN7Ui6jX_-EyL83vpmcJpsFxt78B2g&usqp=CAU)' }}>
            </div>
            <div className='justifyCenter bold'>
                <text style={{ color: '#AF0171', flexGrow: 'wrap' }}>Butter Chicken</text>
            </div>
        </div>
    )
}

export default RoundCard
