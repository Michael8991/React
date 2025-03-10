import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'strider@hotmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        // console.log('useEffect called!')
    }, [])
    useEffect(() => {
        // console.log('username change!')
    }, [username])
    useEffect(() => {
        // console.log('email change!')
    }, [email])


    return (
        <>
            <h1>Formulario simple</h1>
            <hr />

            <input type="text" className="form-control mt-2" placeholder="Username" name="username" value={username} onChange={onInputChange} />
            <input type="email" className="form-control mt-2" placeholder="Email" name="email" value={email} onChange={onInputChange} />

            {
                (username === 'strider') && <Message />
            }
        </>
    )
}
