/**
 * Vorlage: Reaktionsspiel
 */
/**
 * Lerneinheit 02 – Ein- und Ausgabe
 */
/**
 * =========================================
 */
/**
 * Zwei Spieler reagieren auf ein Signal.
 */
/**
 * Wer zuerst drueckt, bekommt einen Punkt.
 */
/**
 * Ergaenze die fehlenden Teile (markiert mit TODO).
 */
/**
 * --- Variablen ---
 */
function naechste_runde () {
    signal = false
    basic.showString("Runde " + ("" + runde))
    basic.pause(500)
    // Zufaellige Wartezeit zwischen 1 und 4 Sekunden
    wartezeit = randint(1000, 4000)
    basic.pause(wartezeit)
    // Signal geben: Ton + Symbol
    music.playTone(880, 200)
    basic.showIcon(IconNames.Diamond)
    // TODO: RGB-LED gruen leuchten lassen waehrend des Signals
    // pins.set_rgb(0, 255, 0) falls unterstuetzt, oder:
    // neopixel o.ae. – einfach weglassen wenn nicht unterstuetzt
    signal = true
}
// Beim Starten
function on_start () {
    basic.showString("Druecke A+B")
}
function zeige_punkte () {
    basic.showString("A:" + ("" + punkteA) + " B:" + ("" + punkteB))
}
function spiel_ende () {
    basic.showString("ENDE")
    if (punkteA > punkteB) {
        basic.showString("A gewinnt!")
    } else if (punkteB > punkteA) {
        // TODO: RGB-LED gruen
        basic.showString("B gewinnt!")
    } else {
        // TODO: RGB-LED blau
        basic.showString("Unentschieden!")
    }
    zeige_punkte()
}
// Taste A – Spieler A
input.onButtonPressed(Button.A, function () {
    if (signal) {
        // Spieler A war schneller!
        punkteA += 1
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
        signal = false
        // TODO: Ton fuer Spieler A (hoher Ton = Jubel)
        // music.play_tone(???, 300)
        runde += 1
        if (runde <= MAX_RUNDEN) {
            naechste_runde()
        } else {
            spiel_ende()
        }
    } else {
        // Zu frueh oder falscher Zeitpunkt
        basic.showIcon(IconNames.Sad)
        basic.pause(300)
    }
})
// Taste A+B – Spiel neu starten
input.onButtonPressed(Button.AB, function () {
    punkteA = 0
    punkteB = 0
    runde = 1
    basic.showString("START")
    basic.pause(500)
    naechste_runde()
})
// Taste B – Spieler B
input.onButtonPressed(Button.B, function () {
    // TODO: Genauso wie Taste A, aber fuer Spieler B
    // Kopiere den Code von on_button_pressed_a und passe ihn an!
    if (signal) {
    	
    } else {
        basic.showIcon(IconNames.Sad)
        basic.pause(300)
    }
})
let punkteB = 0
let punkteA = 0
let wartezeit = 0
let signal = false
let MAX_RUNDEN = 0
let runde = 0
runde = 1
MAX_RUNDEN = 5
basic.showString("Druecke A+B")
