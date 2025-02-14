import React from 'react' //* React.memo <--Forma mas usada en la realidad
// import { memo } from 'react'

export const Small = React.memo(({ value }) => {
    console.log('Me volví a cargar!! :)')
    return (
        <>
            <small>{value}</small>
        </>
    )
})
