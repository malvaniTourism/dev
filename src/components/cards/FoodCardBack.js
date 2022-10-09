import React from 'react'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

const FoodCardBack = ({ flip }) => {

    return (
        <div className='FoodCard' onMouseLeave={() => flip()}
        // style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWeN-0ET-zk9iPPcbAZanQq-F8JxyvbStkyg&usqp=CAU)' }}
        >
            <div>
                <span style={{color: '#0C6980'}}>Butter chicken, traditionally known as murgh makhani, an Indian dish. which is a type of curry made from chicken with a spiced tomato and butter sauce. Its sauce is known for its rich texture. It is similar to chicken tikka masala, which uses a tomato paste.</span>
            </div>
            <div className='justifyBetween alignCenter'>
                <div className='alignCenter' style={{ color: '#FF9636' }}>
                    <LocalFireDepartmentIcon />
                    <text>600 kcal</text>
                </div>
                <div className='vegNonVeg' style={{backgroundColor: '#18A558'}}>
                    <text className='whiteBold'>VEG</text>
                </div>
            </div>

        </div>
    )
}
//#FC2E20
export default FoodCardBack
