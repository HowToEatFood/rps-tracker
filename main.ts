input.onButtonPressed(Button.A, function () {
    Player_A += 1
    rounds += 1
    update_scoreboard()
})
function update_scoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("player A" + Player_A)
    OLED.writeStringNewLine("player B" + Player_B)
    OLED.writeStringNewLine("ties" + Ties)
    OLED.writeStringNewLine("rounds" + rounds)
    if (Player_A == 10) {
        OLED.init(128, 64)
        OLED.writeStringNewLine("PLAYER A WINS!")
        reset()
    }
    if (Player_B == 10) {
        OLED.init(128, 64)
        OLED.writeStringNewLine("PLAYER B WINS!")
        basic.pause(1000)
        reset()
    }
}
input.onButtonPressed(Button.AB, function () {
    Ties += 1
    rounds += 1
    update_scoreboard()
})
input.onButtonPressed(Button.B, function () {
    Player_B += 1
    rounds += 1
    update_scoreboard()
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    OLED.writeStringNewLine("Lets play!")
    rounds = 0
    Player_B = 0
    Player_A = 0
    Ties = 0
    basic.pause(2000)
    update_scoreboard()
}
let Ties = 0
let Player_B = 0
let rounds = 0
let Player_A = 0
reset()
