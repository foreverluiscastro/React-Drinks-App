import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink style={{ marginRight: '10px', fontSize: '30px' }} to="/">Home</NavLink>
            <NavLink style={{ marginRight: '10px', fontSize: '30px' }} to="/beers">Beers</NavLink>
            <NavLink style={{ marginRight: '10px', fontSize: '30px' }} to="/fridge">Fridge</NavLink>
        </div>
    );
};

export default NavBar