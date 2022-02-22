import React from 'react'
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <div className='navigation'>
            <nav className='navbar navbar-expand navbar-dark bg-dark'>
                <div className='container'>
                    <NavLink className='navbar-brand' to='/'>
                        Calvin Donner Portfolio
                    </NavLink>
                    <div>
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/'>
                                    Home
                                    {/* <span className='sr-only'>(Home)</span> */}
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/resume'>
                                    Resume
                                    {/* {/* <span className='sr-only'>(Resume)</span> */}
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/lists'>
                                    Lists
                                    {/* {/* <span className='sr-only'>(Lists)</span> */}
                                </NavLink>
                            </li>                                
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/contact'>
                                    Contact
                                    {/* {/* <span className='sr-only'>(Contact)</span> */}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav

