import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
    function showNavigation() {
        return(
            <ul>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
            </ul>
        )
    }
}
export default Nav

