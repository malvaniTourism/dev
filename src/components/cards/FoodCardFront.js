import React from 'react'

const FoodCardFront = ({ flip }) => {

    return (
        <div className='FoodCard' onMouseOver={() => flip()} style={{ boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.2)', backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7pPxxfN7Ui6jX_-EyL83vpmcJpsFxt78B2g&usqp=CAU)' }}>
            <div style={{height: '100%', display: 'contents'}}>
            <div className='justifyBetween'>
                <h6 className='whiteBold'>Dinner</h6>
                <h4 className="whiteBold" style={{color: '#FFDB15'}}>200 ₹</h4>
            </div>
            <div>
                <h5 className=" whiteBold whiteAlign">Butter Chicken</h5>
            </div>
            </div>
        </div>
    )
}

export default FoodCardFront
