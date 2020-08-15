function part5 () {
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Double))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(622, music.beat(BeatFraction.Double))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(622, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Whole))
}
function part4 () {
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(659, music.beat(BeatFraction.Double))
    music.playTone(523, music.beat(BeatFraction.Half))
}
function part6 () {
    music.playTone(659, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Double))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Double))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Double))
    music.playTone(740, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Double))
}
function part2 () {
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Double))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Double))
    music.playTone(139, music.beat(BeatFraction.Whole))
}
function part3 () {
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Double))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Double))
}
function part7 () {
    music.playTone(554, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(622, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Double))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Double))
}
function part1 () {
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Double))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Double))
    music.playTone(494, music.beat(BeatFraction.Double))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Double))
}
let nivelparainiciar = 20
basic.pause(1000)
basic.forever(function () {
    if (input.lightLevel() >= nivelparainiciar) {
        part1()
    }
    if (input.lightLevel() >= nivelparainiciar) {
        part2()
    }
    if (input.lightLevel() >= nivelparainiciar) {
        part3()
    }
    if (input.lightLevel() >= nivelparainiciar) {
        part4()
    }
    if (input.lightLevel() >= nivelparainiciar) {
        part5()
    }
    if (input.lightLevel() >= nivelparainiciar) {
        part6()
    }
    if (input.lightLevel() >= nivelparainiciar) {
        part7()
    }
})
basic.forever(function () {
    basic.pause(1000)
    if (input.lightLevel() >= nivelparainiciar) {
        basic.showIcon(IconNames.EigthNote)
        basic.showIcon(IconNames.QuarterNote)
    } else {
        basic.clearScreen()
    }
})
