function spin_load (_0: number, bool: boolean) {
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . # . .
        . # . . .
        . . . . .
        `)
}
basic.forever(function () {
    spin_load(1, false)
})
