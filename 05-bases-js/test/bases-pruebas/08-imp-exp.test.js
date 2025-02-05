import { getHeroeById, getHeroesByOwner } from "../../src/bases-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Prueba en 08-imp-exp', () => {
    test('getHeroeById debe retornar un heroe por ID', () => {
        const id = 1;
        const heroe = getHeroeById(id)
        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    });

    test('getHeroeById debe retornar undefined si no existe un ID', () => {
        const id = 100;
        const heroe = getHeroeById(id)
        expect(heroe).toBeFalsy()
    })

    test('getHeroeByOwner debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        expect(heroe).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);
        expect(heroe.length).toEqual(3);
    })
    test('getHeroeByOwner debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect(heroes).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]);
        expect(heroes.length).toEqual(2);

        //Si queremos que compruebe lo que realmente se espera, mas realista.
        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner))
    })

});