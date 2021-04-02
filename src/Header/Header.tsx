import React from 'react';
import Nav from '../Nav/Nav';
import style from './Header.module.scss'
import {faJediOrder} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = () => {
    return <header className={style.headerWrapper}>
        <FontAwesomeIcon size={'4x'} icon={faJediOrder}/>
        <Nav/>
    </header>
}

export default Header