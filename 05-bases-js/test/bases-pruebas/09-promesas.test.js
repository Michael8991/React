import { getHeroeByIdAsync } from '../../src/bases-pruebas/09-promesas';

describe('Prueba en 09-promesas', () => {
    test('getHeroeByIdAsync debe retornar un heroe por ID con promesas', (done) => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })
                done();
            });
    });
    test('getHeroeByIdAsync debe retornar un heroe error si el heroe no existe', (done) => {

        const id = 100;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toBeFalsy();
                done();
            })
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe ' + id)
                done();
            })
    });
});