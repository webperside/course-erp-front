import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppContextProvider({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [userData, setUserData] = useState({ username: "Pixsellz"});


    return (
        <AppContext.Provider value={{ isSidebarOpen, setIsSidebarOpen, userData, setUserData }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
