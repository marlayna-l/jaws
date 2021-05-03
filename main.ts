controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    Shark.follow(Person_you, 20)
    shark2.follow(Person_you, 35)
    shark3.follow(Person_you, 50)
})
let shark3: Sprite = null
let shark2: Sprite = null
let Shark: Sprite = null
let Person_you: Sprite = null
scene.setBackgroundImage(assets.image`Becah`)
Person_you = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . e e e e e e e e . . . . . 
    . . . e e 5 5 5 5 e e . . . . . 
    . . . e 5 6 5 5 6 5 e . . . . . 
    . . . e 5 5 5 5 5 5 e . . . . . 
    . . . e 5 5 5 5 5 5 e . . . . . 
    . . . e 5 5 5 5 5 5 e . . . . . 
    . . . e e 3 3 3 3 e e . . . . . 
    . . 5 5 5 3 3 3 3 5 5 5 . . . . 
    . . . . . 3 3 3 3 . . . . . . . 
    . . . . . 3 3 3 3 . . . . . . . 
    . . . . . 3 3 3 3 . . . . . . . 
    . . . . . 5 . . 5 . . . . . . . 
    . . . . . 5 . . 5 . . . . . . . 
    . . . . 5 5 . . 5 5 . . . . . . 
    `, SpriteKind.Player)
Shark = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b . . . . . . . . 
    . . . . . . b b b . . . . . . . 
    . . . . . . b b b . . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . b b b b b b b b b b b . . 
    . b b b b b b b b b b b b b b . 
    b b f b b b b b b b b b b b b . 
    b b b b b b b b b b b b b b b b 
    . b b b b b b b b b b b b b b b 
    . . b b b b b b b b b b b b b . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
shark2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b . . . . . . . . 
    . . . . . . b b b . . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . b b b b b b b b b b b b . . 
    b b b b b b b b b b b b b b b . 
    b f b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b . 
    . . b b b b b b b b b b b b . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
shark3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b . . . . . . . . 
    . . . . . . b b b . . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . b b b b b b b b b b b b . . 
    b b b b b b b b b b b b b b b . 
    b f b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b . 
    . . b b b b b b b b b b b b . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
music.playMelody("C E E C D C C C ", 120)
controller.moveSprite(Person_you)
