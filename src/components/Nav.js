import React from 'react'

function Nav(props) {
    return (
        <div className={props.className} onClick={props.onClick}>
            <button className="nav-menu-x"></button>

        </div>
    )
}

export default Nav;