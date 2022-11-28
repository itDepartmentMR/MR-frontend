import React, { useState, createContext } from 'react';

export const AuthContext = createContext()

export function AuthProvider({children}) {
    const [selectCurs, setSelectCurs] = useState();
    return ( 
        <AuthContext.Provider value={{selectCurs, setSelectCurs}}>
            {children}
        </AuthContext.Provider>
     );
}
