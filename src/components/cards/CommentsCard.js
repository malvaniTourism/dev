import React from 'react'
import img9 from '../../assets/img/blog-details/8.png';

const CommentsCard = ({ data, openComment }) => {

    return (
        <div className="single-comment-wrap">
            <div className="thumb">
                <img src={data.users.profile_picture} alt="img" />
            </div>
            <div className="content">
                <h4 className="title">{data.users.name}</h4>
                <span className="date">{data.users.created_at}</span>
                <p>{data.comment}</p>
                <div className="reply btn btn-yellow" onClick={() => openComment(data.id)}>
                    <span>
                        <i className="fa fa-reply" />
                        Reply
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CommentsCard
