function sendTEMP () {
    countTEMP = sec
    serial.writeString("!1:TEMP:" + input.temperature() + "#")
}
input.onButtonPressed(Button.A, function () {
    serial.writeString("I'm alive!")
})
serial.onDataReceived(serial.delimiters(Delimiters.Hash), function () {
    cmd = serial.readUntil(serial.delimiters(Delimiters.Hash))
    basic.showString(cmd)
    if (cmd == "0") {
        basic.clearScreen()
    } else if (cmd == "1") {
        basic.showLeds(`
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    } else if (cmd == "2") {
        basic.showLeds(`
            # # # # #
            . # . # .
            . # . # .
            . # . # .
            # # # # #
            `)
    } else if (cmd == "3") {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # . #
            # . # . #
            # . # . #
            `)
    } else if (cmd == "4") {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # . #
            # . . # .
            # . . # .
            `)
    } else if (cmd == "LED_true") {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # . # #
            . # # # .
            # . # . #
            `)
    } else if (cmd == "LED_false") {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
    } else if (cmd == "FAN_true") {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (cmd == "FAN_false") {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showString("xx")
    }
})
function sendLIGHT () {
    countLIGHT = sec
    serial.writeString("!1:LIGHT:" + input.lightLevel() + "#")
}
let cmd = ""
let countLIGHT = 0
let countTEMP = 0
let sec = 0
basic.showIcon(IconNames.Heart)
sec = 0
countTEMP = 0
countLIGHT = 5
basic.forever(function () {
    basic.pause(1000)
    sec += 1
    if (sec - countTEMP >= 10) {
        sendTEMP()
    }
    if (sec - countLIGHT >= 10) {
        sendLIGHT()
    }
})
