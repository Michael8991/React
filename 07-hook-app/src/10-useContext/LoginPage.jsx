import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

    const { user, setUser } = useContext(UserContext);


    return (
        <>
            <h1>Hola desde el Login</h1>
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
            <button className="btn btn-primary" onClick={(() => setUser({ id: 123, name: 'Michael R.', email: 'michael@gmail.com' }))}>Establecer usuario</button>
        </>
    )
}
