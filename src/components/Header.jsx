import React from 'react';

const Header = (props) => {
    return (
        <header className="header">
            <nav className="navigation">
                <ul className="navigation-list">
                    <li className="navigation-list__item">
                        <button className="navigation-list__button" onClick={props.navigate("home")}>
                            Карта
                        </button>
                    </li>
                    <li className="navigation-list__item">
                        <button className="navigation-list__button" onClick={props.navigate("profile")}>
                            Профиль
                        </button>
                    </li>
                    <li className="navigation-list__item">
                        <button className="navigation-list__button" onClick={props.navigate("login")}>
                            Выйти
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;