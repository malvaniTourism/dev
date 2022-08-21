import React from 'react'

const ProductHeader = ({ page, background }) => {
 
    return (
        <div>
            <div className='detPageImgDiv' style={{backgroundImage: `url(${background})`}}>
                <text className='detPageHead'>{page}</text>
                <text className='detPageSubHead'>Special offers & Discounts on the Best hotels!</text>
                <div>
                    <text className='detPageSubs'>Lorem Ipsum is simply dummy text the printing and typesetting industry.</text>
                    <text className='detPageSubs'>Lorem Ipsum is simply dummy text the printing.</text>
                </div>
            </div>
        </div>
    )
};

export default ProductHeader;