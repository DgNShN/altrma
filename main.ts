basic.forever(function () {
    led.unplot(0, 0)
    basic.pause(500)
    led.unplot(1, 1)
    basic.pause(500)
    led.unplot(3, 3)
    basic.pause(500)
    led.unplot(4, 4)
    basic.pause(500)
    led.unplot(0, 4)
    basic.pause(500)
    led.unplot(1, 3)
    basic.pause(500)
    led.unplot(2, 2)
    basic.pause(500)
    led.unplot(3, 1)
    basic.pause(500)
    led.unplot(4, 0)
    basic.pause(500)
    led.plot(0, 0)
    led.plot(3, 3)
    led.plot(0, 4)
    led.plot(1, 3)
    led.plot(2, 2)
    led.plot(3, 1)
    led.plot(1, 1)
    led.plot(4, 0)
    led.plot(4, 4)
})
