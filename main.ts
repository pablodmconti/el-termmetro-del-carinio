input.onButtonPressed(Button.AB, function () {
    // Guardamos el número aleatorio en la variable 'numero'
    numero = randint(0, 100)
    basic.showNumber(numero)
    // Comparamos la variable 'numero' para decidir qué mensaje mostrar
    if (numero <= 25) {
        music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.InBackground)
        basic.showString("" + ("Sin amor"))
    } else if (numero <= 50) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showString("" + ("Amor de mejores amigos"))
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else if (numero <= 75) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showString("" + ("Amor desconsolado"))
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
        music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.InBackground)
        basic.showString("" + ("Amor ardiente"))
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
let numero = 0
basic.showString("Termómetro del amor")
