import React from 'react';
<<<<<<< Updated upstream
=======
//mport PropTypes from 'prop-types';
import {Logo, MCIcon} from 'loft-taxi-mui-theme';
import {connect} from "react-redux";
import {logOut} from '../actions'
import { Link } from "react-router-dom";
>>>>>>> Stashed changes

const Header = (props) => {

    const NAVS = [{name: 'home', text: 'Карта'}, {name: 'profile', text: 'Профиль'}, {name: 'login', text: 'Выйти'}]
    return (
        <header className="header">
            <nav className="navigation">
                <ul className="navigation-list">
                    { NAVS.map(item => (
                        <li className="navigation-list__item">
<<<<<<< Updated upstream
                            <span classList="navigation-list__button" onClick={() => {props.navigate(item.name)}}>{item.text}</span>
=======
                            {/* <span className="navigation-list__button" onClick={() => {
                                        logOut();
                                        props.navigate(item.name)}
                                        }> {item.text}</span> */}
                            <span className="navigation-list__button">
                                <Link to={"/"+item.name}>{item.text}</Link>
                            </span>
>>>>>>> Stashed changes
                        </li>
                        ))}
                </ul>
            </nav>
        </header>
    )
}

<<<<<<< Updated upstream
export default Header;
=======
// Header.propTypes = {
//     navigate: PropTypes.func.isRequired
// }

const HeaderWithAuth = connect(
    null,
    { logOut }
) (Header);
export default HeaderWithAuth;
>>>>>>> Stashed changes
