import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <div class="navigation">
                <div class="logo">
                    <a href="landing_page.html">
                        <img src="./images/logo_shape.png" alt="" width="50" height="50" />
                            <h3 class="title">WebTechID</h3>
                    </a>
                    <i class="fa-solid fa-bars sidebar-toggle"></i>
                </div>
                <div class="link" id="navigation">
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
                        <li class="auth">
                            <button>Login</button>
                            <button>Signup</button>
                        </li>
                    </ul>
                </div>
                <div class="auth">
                    <div>
                        <button>Login</button>
                        <button>Signup</button>
                    </div>
                </div>
                <i class="fa-solid fa-bars navbar-toggle"></i>
            </div>
        </nav>
    )
}

export default Navbar
