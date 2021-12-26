import React from 'react';
import PropTypes from 'prop-types';
import {Logo, MCIcon} from 'loft-taxi-mui-theme';

const Header = (props) => {

    const NAVS = [{name: 'home', text: 'Карта'}, {name: 'profile', text: 'Профиль'}, {name: 'login', text: 'Выйти'}]
    return (
        <header className="header">
            <Logo/>
            <nav className="navigation">
                <ul className="navigation-list">
                    { NAVS.map(item => (
                        <li className="navigation-list__item">
                            <span className="navigation-list__button" onClick={() => {props.navigate(item.name)}}>{item.text}</span>
                        </li>
                        ))}
                </ul>
            </nav>
        </header>
    )
}

Header.propTypes = {
    navigate: PropTypes.func.isRequired
}

export default Header;