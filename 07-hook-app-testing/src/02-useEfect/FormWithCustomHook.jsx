
import { useEffect, useState } from "react"
import { useCustomForm } from "../hooks/useCustomForm"

export const CustomHookForm = () => {

    const { formState, onInputChange, username, email, password, onResetForm } = useCustomForm({
        username: '',
        email: '',
        password: ''
    })

    return (
        <>
            <h1>Formulario con custom hook</h1>
            <hr />

            <input type="text" className="form-control mt-2" placeholder="Username" name="username" value={username} onChange={onInputChange} />
            <input type="email" className="form-control mt-2" placeholder="Email" name="email" value={email} onChange={onInputChange} />
            <input type="password" className="form-control mt-2" placeholder="Password..." name="password" value={password} onChange={onInputChange} />


            <button onClick={onResetForm} className="btn btn-secondary mt-2">Borrar</button>

        </>
    )
}
