import React from 'react';
import style from './Nav.module.scss';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return <nav className={style.nav}>
        <NavLink to={'/'}>Main</NavLink>
        <NavLink to={'/peoples'}>Peoples</NavLink>
        <NavLink to={'/planets'}>Planets</NavLink>
        <NavLink to={'/starships'}>Starships</NavLink>
        <NavLink to={'/vehicles'}>Vehicles</NavLink>
    </nav>
}

export default Nav