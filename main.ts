input.onButtonPressed(Button.A, function () {
    serial.writeString("I'm alive!")
})
serial.onDataReceived(serial.delimiters(Delimiters.Hash), function () {
    cmd = serial.readUntil(serial.delimiters(Delimiters.Hash))
    basic.showString(cmd)
    if (cmd == "0") {
        basic.clearScreen()
    } else if (cmd == "1") {
        basic.showIcon(IconNames.No)
    } else if (cmd == "2") {
        basic.showIcon(IconNames.Yes)
    } else if (cmd == "3") {
        basic.showIcon(IconNames.Silly)
    } else if (cmd == "4") {
        basic.showIcon(IconNames.StickFigure)
    } else if (cmd == "LED_true") {
    	
    } else if (cmd == "LED_false") {
    	
    } else if (cmd == "FAN_true") {
    	
    } else if (cmd == "FAN_false") {
    	
    } else {
        basic.showString("xx")
    }
})
let cmd = ""
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    serial.writeString("!1:TEMP:" + input.temperature() + "#")
    basic.pause(5000)
    serial.writeString("!1:LIGHT:" + input.lightLevel() + "#")
    basic.pause(5000)
})
