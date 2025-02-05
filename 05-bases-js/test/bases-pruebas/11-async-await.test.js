import { getImagen } from "../../src/bases-pruebas/11-async-await";

describe('Prueba en 11-async', () => {
    test('getImagen debe retornar la url de la imagen', async () => {
        const url = await getImagen();
        expect(typeof url).toBe('string')
    });
});