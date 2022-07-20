import React from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {
    const currentUser = {
        name: "Duane",
        interests: ["Coding", "Biking", "Words ending in 'ing'"],
    }
    return < UserContext.Provider value={curr}</UserContext.Provider>;
}

export { UserContext, UserProvider };