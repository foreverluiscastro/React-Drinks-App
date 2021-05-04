import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <NavLink
            style={{ marginRight: '10px' }}
            to="/"
            >
                Home
            </NavLink>
            <NavLink
            style={{ marginRight: '10px' }}
            to="/beers"
            >
                Beers 
            </NavLink>
            <NavLink
            style={{ marginRight: '10px' }}
            to='/cart'
            >
                Cart
            </NavLink>
        </div>
    )
}

export default NavBar