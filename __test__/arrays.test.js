const {carsList} = require('../src/arrays')

describe ('verificando los autos existentes', () => {
    test ('El arreglo no es null', ()=>{
        expect (carsList()).not.toBeNull()
    })

    test ('verificar si contiene VW Golf',() => {
        expect(carsList()).toContain('VW Golf')
    })

    test ('probar la longitud del arreglo', () => {
        expect(carsList()).toHaveLength(4)
    })
})