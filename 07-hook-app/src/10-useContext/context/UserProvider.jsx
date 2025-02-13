import { useState } from "react"
import { UserContext } from "./UserContext"

export const UserProvider = ({ children }) => {

    // const user = {
    //     id: 123,
    //     name: 'Michael R.',
    //     email: 'michael@gmail.com'
    // }

    const [user, setUser] = useState();


    return (
        // <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
