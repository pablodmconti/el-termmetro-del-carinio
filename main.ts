input.onPinPressed(TouchPin.P0, function () {
    // Guardamos el número aleatorio en la variable 'numero'
    numero = randint(0, 100)
    basic.showNumber(numero)
    // Comparamos la variable 'numero' para decidir qué mensaje mostrar
    if (numero <= 25) {
        basic.showString("Sin amor")
    } else if (numero <= 50) {
        basic.showString("Amor de mejores amigos")
    } else if (numero <= 75) {
        basic.showString("Amor desconsolado")
    } else {
        basic.showString("Amor ardiente")
    }
})
let numero = 0
basic.showString("Termometro del carino")
