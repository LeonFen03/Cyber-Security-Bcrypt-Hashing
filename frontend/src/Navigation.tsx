import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import { CurrentUser } from './contexts/CurrentUser.tsx';
import React from 'react';
type UserType = {
    firstName?: string;
    lastName?: string;
    role?: string;
};


function Navigation(): JSX.Element {
    const history = useHistory();
    const currentUser: UserType | unknown  = useContext(CurrentUser);
    const handleNavigation = (path: string) => {
        history.push(path);
    };

    let loginActions = (
        <>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => handleNavigation("/sign-up")}>
                    Sign Up
                </a>
            </li>
            <li style={{ float: 'right' }}>
                <a href="#" onClick={() => handleNavigation("/login")}>
                    Login
                </a>
            </li>
        </>
    );

    if (currentUser ) {
        loginActions = (
            <li style={{ float: 'right' }}>
                Logged in as {currentUser.firstName} {currentUser.lastName}
            </li>
        );
    }

    let addPlaceButton: JSX.Element | null = null;
    if (currentUser?.role === 'admin') {
        addPlaceButton = (
            <li>
                <a href="#" onClick={() => handleNavigation("/places/new")}>
                    Add Place
                </a>
            </li>
        );
    }

    return (
        <nav>
            <ul>
                <li>
                    <a href="#" onClick={() => handleNavigation("/")}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" onClick={() => handleNavigation("/places")}>
                        Places
                    </a>
                </li>
                {addPlaceButton && <li>{addPlaceButton}</li>}
                {loginActions}
            </ul>
        </nav>
    );
}

export default Navigation;
