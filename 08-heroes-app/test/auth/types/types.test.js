import { types } from "../../../src/auth"

describe('Pruebas en types', () => {
    test('Debe de devolver las mismas pruebas de login y logout', () => {
        expect(types).toEqual({ login: '[Auth] Login', logout: '[Auth] Logout' })
    })
})