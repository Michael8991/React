import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {
        const onMouseMove = ({ x, y }) => {
            const coords = { x, y }
            console.log(coords)
        }
        window.addEventListener('mousemove', onMouseMove)

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, [])


    return (
        <>
            <h3 className="alert alert-danger mt-3 text-center">El usuario ya existe</h3>
        </>
    )
}
