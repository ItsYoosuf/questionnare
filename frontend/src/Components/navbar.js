import React from 'react';
import { Fragment } from 'react';
import '../Assets/styles/navbar.css';

const Navbar = () => {
return (
    <Fragment>
        <nav id="options">
            <a href="/display-books">
                <button type='button' className='butn'>Books</button>
            </a>
            <a href="/display-users">
                <button type='button' className='butn'>Users</button>
            </a>
            <a href="/display-books">
                <button type='button' className='butn'>Refresh</button>
            </a>
        </nav>
    </Fragment>
);
};

export default Navbar;