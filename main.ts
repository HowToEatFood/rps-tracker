function update_scoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("player a" + Player_A)
    OLED.writeStringNewLine("player b" + Ties)
    OLED.writeStringNewLine("ties" + Player_B)
    OLED.writeStringNewLine("rounds" + rounds)
}
let Ties = 0
let Player_A = 0
let Player_B = 0
let rounds = 0
OLED.init(128, 64)
OLED.writeStringNewLine("Lets play!")
rounds = 0
Player_B = 0
Player_A = 0
Ties = 0
basic.pause(2000)
