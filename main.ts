function update_scoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("player A" + Player_A)
    OLED.writeStringNewLine("player B" + Ties)
    OLED.writeStringNewLine("ties" + Player_B)
    OLED.writeStringNewLine("rounds" + rounds)
}
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
let rounds = 0
let Player_B = 0
let Ties = 0
let Player_A = 0
reset()
