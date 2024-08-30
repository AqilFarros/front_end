import React from 'react'

const BlogCard = () => {
    return (
        <div className="blog-card">
            <div className="card-image">
                <img src="../design/assets/images/portfolio2.jpg" alt="" />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>Lorem, ipsum dolor.</h3>
                    <h5>08 August 2024</h5>
                </div>
                <div className="card-profile">
                    <img src="../design/assets/images/avatar.jpg" alt="" />
                        <p>username</p>
                </div>
                <div className="card-views">
                    <i className="fa-regular fa-eye"></i>
                    1000 views
                </div>
                <div className="card-description">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo eius perferendis soluta
                        magni
                        provident ullam esse quisquam facilis illum obcaecati optio tempora distinctio nostrum
                        neque
                        saepe modi praesentium, architecto asperiores.
                    </p>
                </div>
                <div className="card-tag">
                    <a href="#">#lorem</a>
                    <a href="#">#lorem</a>
                    <a href="#">#lorem</a>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
