import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../store/AppContext'
import { ThemeContext } from '../store/ThemeContext';

import { FaMoon, FaSun } from 'react-icons/fa'

const Menu = () => {
    const { store } = useContext(AppContext);
    const { theme, handleThemeChange } = useContext(ThemeContext);

    useEffect(() => {
        console.log(theme);
        document.body.setAttribute('data-theme', theme);
    }, [theme])

    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
                <span className='nav-link'>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={handleThemeChange} checked={theme === 'dark' ? true : false} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{theme !== 'dark' ? (<FaMoon />) : (<FaSun />)}</label>
                    </div>
                </span>
            </li>
            <li className="nav-item">
                <span className='nav-link disabled'>{!!store.currentUser ? store?.currentUser?.name : "anonimous"}</span>
            </li>
        </ul>
    )
}

export default Menu