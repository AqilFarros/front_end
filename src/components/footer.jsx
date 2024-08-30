import React from 'react'

const footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="about">
                    <h1>WebTechID</h1>
                    <p>
                        At WebTechID, we are dedicated to driving digital success through expert web development, hands-on
                        coding courses, and data analytics services. Our mission is to empower businesses and individuals
                        with the tools and knowledge needed to thrive in the ever-evolving tech landscape. From creating
                        stunning websites to offering practical coding education and turning data into actionable insights,
                        we are here to support your journey in the digital world.
                    </p>
                </div>
                <div className="link">
                    <ul>
                        <li>
                            <a href="landing_page.html">Home</a>
                        </li>
                        <li>
                            <a href="blog.html">Blog</a>
                        </li>
                        <li>
                            <a href="blog.html">Popular</a>
                        </li>
                        <li>
                            <a href="portfolio.html">Portfolio</a>
                        </li>
                        <li>
                            <a href="admin_dashboard.html">Admin</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>Designed by : Aqil Farros Al Ghonim</p>
                <ul>
                    <li>
                        <a href="#">
                            <img src="../design/assets/images/youtube.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../design/assets/images/facebook.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../design/assets/images/twitter.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../design/assets/images/linkedin.png" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default footer
