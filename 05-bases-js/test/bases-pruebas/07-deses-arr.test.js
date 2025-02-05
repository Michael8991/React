import { retornaArreglo } from "../../src/bases-pruebas/07-deses-arr";

describe('Prueba en 07-desestructuracion-arreglos', () => {
    test('retornaArreglo debe retornar un string y un numero', () => {
        const [letters, numbers] = retornaArreglo();

        expect(typeof letters).toBe('string')
        expect(typeof numbers).toBe('number')

        //Si queremos probar que regrese cualquier tipo de string podemos hacerlo asi:
        // expect(letters).toEqual(expect.any(String))
    });

});