let LightsOn = false
let Temp = 0
bluetooth.onBluetoothConnected(function () {
	
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
        }
    }
})
basic.forever(function () {
	
})
