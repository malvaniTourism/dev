import React, { useState } from 'react'
import { connect } from 'react-redux';
import { saveLoginUser } from '../../actions/commonActions';
import { comnPost } from '../../services/comnServ';

const CommentsForm = ({ type, parentId, tableName, postId, isPosted, ...props }) => {
    const [content, setContent] = useState('');
    console.log('login--',props.loginUser);

    const postComment = () => {
        
        let data = {
            "parent_id": parentId || '',
            "user_id": props.loginUser.id,
            "comment": content,
            "commentable_type": tableName,
            "commentable_id": postId
        }

        console.log('payload - ', data);
        comnPost('api/v1/comment', data)
            .then(res => {
                console.log(res);
                isPosted();
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="blog-comment-area">
            <form className="tp-form-wrap bg-gray tp-form-wrap-one">
                <h4 className="single-page-small-title">Write A {type}.</h4>
                <div className="row">
                    {/* <div className="col-lg-6 col-md-6">
                        <label className="single-input-wrap">
                            <span className="single-input-title">Name</span>
                            <input type="text" />
                        </label>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <label className="single-input-wrap">
                            <span className="single-input-title">Email</span>
                            <input type="text" />
                        </label>
                    </div> */}
                    <div className="col-lg-12">
                        <label className="single-input-wrap">
                            <span className="single-input-title">{type}</span>
                            <textarea defaultValue={""} onChange={(e) => setContent(e.target.value)} />
                        </label>
                    </div>
                    <div className="col-12" onClick={() => postComment()}>
                        <text className="btn btn-yellow">
                            Send {type}
                        </text>
                    </div>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loginUser: state.commonState.loginUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveLoginUser: data => {
            dispatch(saveLoginUser(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsForm);