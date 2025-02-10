import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../../src/GifExpertApp";
import { GifItem } from "../../src/components/GifItem";



describe('Pruebas en GifItem', () => {

    const title = 'Saitama';
    const url = 'https://media4.giphy.com/media/v1.Y2lkPWRjZWI2YWUyZ2o0M3hqaWgzZmZwYzFnb200OHpoOGM5aGE0Y2FidTc0OXl1ZHQ3NyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VXJWhaO7afRe/giphy.gif'

    test('Debe de hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
    })

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={title} url={url} />)

        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url)
        expect(alt).toBe(title)
    })

    test('Debe de tener un titulo en el componente ', () => {
        render(<GifItem title={title} url={url} />)
        expect(screen.getByText(title)).toBeTruthy()
    })
})