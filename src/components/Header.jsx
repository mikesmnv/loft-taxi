import React from 'react';

const Header = (props) => {

    const NAVS = [{name: 'home', text: 'Карта'}, {name: 'profile', text: 'Профиль'}, {name: 'login', text: 'Выйти'}]
    return (
        <header className="header">
            <nav className="navigation">
                <ul className="navigation-list">
                    { NAVS.map(item => (
                        <li className="navigation-list__item">
                            <span classList="navigation-list__button" onClick={() => {props.navigate(item.name)}}>{item.text}</span>
                        </li>
                        ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;