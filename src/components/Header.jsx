import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../actions.js";
import { Logo } from "loft-taxi-mui-theme";

const Header = (props) => {

    const NAVS = [{name: 'home', text: 'Карта'}, {name: 'profile', text: 'Профиль'}, {name: 'login', text: 'Выйти'}]
    return (
        <header className="header">
             <Logo/>
            <nav className="navigation">
                <ul className="navigation-list">
                    { NAVS.map(item => (
                        <li className="navigation-list__item">
                            {/* <span className="navigation-list__button" onClick={() => {
                                        logOut();
                                        props.navigate(item.name)}
                                        }> {item.text}</span> */}
                            <span>
                            <Link className="navigation-list__button" to={"/"+item.name}> {item.text} </Link>
                            </span>
                        </li>
                        ))}
                </ul>
            </nav>
        </header>
    )
}

const HeaderWithAuth = connect(
    null,
    { logOut }
) (Header);
export default HeaderWithAuth;