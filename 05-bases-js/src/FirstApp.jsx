import React from "react"
import PropTypes from "prop-types"

export const App = ({ title, subtitle, name }) => {
    return (
        <>
            <h1 data-testid="test-title">{title}</h1>
            <h2>{subtitle}</h2>
            <p>{name}</p>
        </>
    )
}

App.propType = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    name: PropTypes.string,
}

App.defaultProps = {
    name: 'Michael Rodriguez',
    subtitle: 'Programando en React'
}
