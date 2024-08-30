import React from 'react'

const CommentBox = () => {
    return (
        <div className="comment-card">
            <div className="comment-profile">
                <img src="../design/assets/images/avatar.jpg" alt="" />
                    <p>username</p>
            </div>
            <div className="comment-date">
                <p>08 august 2024</p>
            </div>
            <div className="comment-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vero distinctio voluptatum
                    sapiente pariatur? Praesentium excepturi nihil quod iusto omnis nisi modi cum magni, ut
                    illum dolores autem sed necessitatibus.</p>
            </div>
        </div>
    )
}

export default CommentBox
