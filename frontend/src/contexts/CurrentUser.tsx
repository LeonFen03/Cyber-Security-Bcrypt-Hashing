import { createContext, useState,useEffect } from "react";
import React from "react";


export const CurrentUser = createContext()

function CurrentUserProvider({ children }: { children: React.ReactNode }) {
    const [currentUser, setCurrentUser] = useState<UserType | null>(null);

    useEffect(() => {
        const getLoggedInUser = async () => {
            // Ensure that your API call and headers are correctly set up
            let response = await fetch(`${process.env.REACT_APP_SERVER_URL}/authentication/profile`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            });
            let user = await response.json();
            setCurrentUser(user);
        };
        getLoggedInUser();
    }, []);

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    );
}

export default CurrentUserProvider;


export default CurrentUserProvider


