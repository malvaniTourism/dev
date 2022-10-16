import moment from 'moment';
import React from 'react'
import img9 from '../../assets/img/blog-details/8.png';
import Path from '../../services/baseUrl';

const CommentsCard = ({ data, openComment }) => {

    return (
        <div className="single-comment-wrap">
            <div className="thumb">
                <img src={Path.API_PATH + data.users.profile_picture} alt="img" />
            </div>
            <div className="content">
                <h4 className="title">{data.users.name}</h4>
                <span className="date">{moment(data.users.created_at).format('DD MMMM yyyy')}</span>
                <p>{data.comment}</p>
                <div className="reply btn btn-yellow" onClick={() => openComment(data.id)}>
                    <span >
                        <i className="fa fa-reply" />
                        Reply
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CommentsCard
