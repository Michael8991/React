import { usContext } from "../../src/bases-pruebas/06-deses-obj";

describe('Prueba en 06-desestructuracion', () => {
    test('usContext debe retornar un objeto', () => {
        const clave = 'alfa';
        const edad = 26
        const user = usContext({ clave, edad });
        expect(user).toStrictEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })
    });

});