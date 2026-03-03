# Vorlage: Reaktionsspiel
# Lerneinheit 02 – Ein- und Ausgabe
# =========================================
# Zwei Spieler reagieren auf ein Signal.
# Wer zuerst drueckt, bekommt einen Punkt.
# Ergaenze die fehlenden Teile (markiert mit TODO).

# --- Variablen ---
punkteA = 0
punkteB = 0
signal = False
runde = 1
MAX_RUNDEN = 5

def zeige_punkte():
    basic.show_string("A:" + str(punkteA) + " B:" + str(punkteB))

def naechste_runde():
    global signal, runde
    signal = False
    basic.show_string("Runde " + str(runde))
    basic.pause(500)
    # Zufaellige Wartezeit zwischen 1 und 4 Sekunden
    wartezeit = randint(1000, 4000)
    basic.pause(wartezeit)
    # Signal geben: Ton + Symbol
    music.play_tone(880, 200)
    basic.show_icon(IconNames.DIAMOND)
    # TODO: RGB-LED gruen leuchten lassen waehrend des Signals
    # pins.set_rgb(0, 255, 0) falls unterstuetzt, oder:
    # neopixel o.ae. – einfach weglassen wenn nicht unterstuetzt
    signal = True

def spiel_ende():
    basic.show_string("ENDE")
    if punkteA > punkteB:
        basic.show_string("A gewinnt!")
        # TODO: RGB-LED gruen
    elif punkteB > punkteA:
        basic.show_string("B gewinnt!")
        # TODO: RGB-LED blau
    else:
        basic.show_string("Unentschieden!")
    zeige_punkte()

# Taste A – Spieler A
def on_button_pressed_a():
    global punkteA, runde, signal
    if signal:
        # Spieler A war schneller!
        punkteA += 1
        basic.show_icon(IconNames.HAPPY)
        basic.pause(500)
        signal = False
        # TODO: Ton fuer Spieler A (hoher Ton = Jubel)
        # music.play_tone(???, 300)
        runde += 1
        if runde <= MAX_RUNDEN:
            naechste_runde()
        else:
            spiel_ende()
    else:
        # Zu frueh oder falscher Zeitpunkt
        basic.show_icon(IconNames.SAD)
        basic.pause(300)
input.on_button_pressed(Button.A, on_button_pressed_a)

# Taste B – Spieler B
def on_button_pressed_b():
    global punkteB, runde, signal
    if signal:
        # TODO: Genauso wie Taste A, aber fuer Spieler B
        # Kopiere den Code von on_button_pressed_a und passe ihn an!
        pass
    else:
        basic.show_icon(IconNames.SAD)
        basic.pause(300)
input.on_button_pressed(Button.B, on_button_pressed_b)

# Taste A+B – Spiel neu starten
def on_button_pressed_ab():
    global punkteA, punkteB, runde
    punkteA = 0
    punkteB = 0
    runde = 1
    basic.show_string("START")
    basic.pause(500)
    naechste_runde()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

# Beim Starten
def on_start():
    basic.show_string("Druecke A+B")
basic.show_string("Druecke A+B")
