let LightsOn = false
let Temp = 0
bluetooth.onBluetoothConnected(function () {
    basic.showString("connected")
})
input.onSound(DetectedSound.Loud, function () {
    LightsOn = !(LightsOn)
    input.setSoundThreshold(SoundThreshold.Loud, 163)
    if (LightsOn) {
        basic.showLeds(`
            . . . . #
            # # . # #
            . . . . .
            # # . . #
            . # # # .
            `)
    } else {
        basic.clearScreen()
        Temp = input.temperature()
        if (Temp >= 33) {
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
            music.playMelody("D E G - F G B A ", 120)
        }
    }
})
basic.forever(function () {
	
})
