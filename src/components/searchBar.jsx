import React from 'react'

const searchBar = () => {
    return (
        <div className="search">
            <form action="#">
                <div className="search-bar">
                    <input type="search" placeholder="Search Our News..." />
                        <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </form>
        </div>
    )
}

export default searchBar
