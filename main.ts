namespace SpriteKind {
    export const COIN = SpriteKind.create()
    export const milk = SpriteKind.create()
    export const milkinabag = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (JACOB.vy == 0) {
        JACOB.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`portal`, function (sprite, location) {
    game.over(true, effects.bubbles)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.over(false, effects.melt)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.destroy()
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . . e e e e e e e e e . . . 
        . . . . . e 1 e e 1 e . . . . . 
        . 4 . . . e 1 e e 1 e . . 4 . . 
        . 4 4 . 4 e e e e e e . . . 4 . 
        . . 4 4 4 e 1 1 1 1 e . . 4 4 . 
        . . . . . 8 e e e e 8 4 4 4 . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . 8 8 8 8 8 8 8 . . . . 
        . . . . . . 8 . . . 8 . . . . . 
        . . . 8 8 8 8 8 . . 8 8 8 . . . 
        `, SpriteKind.Player)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.COIN, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
let mySprite: Sprite = null
let milk_in_a_bag: Sprite = null
let COIN: Sprite = null
let JACOB: Sprite = null
scene.setBackgroundColor(9)
JACOB = sprites.create(assets.image`JACOB`, SpriteKind.Player)
controller.moveSprite(JACOB, 80, 100)
tiles.setTilemap(tilemap`level4`)
JACOB.ay += 200
scene.cameraFollowSprite(JACOB)
for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
    COIN = sprites.create(img`
        . . . f f f f f f f . . . . . . 
        . . f 5 5 5 5 5 5 5 f . . . . . 
        . f 5 5 4 4 4 4 4 4 5 f . . . . 
        f 5 5 5 5 5 5 5 5 5 5 5 f . . . 
        f 5 5 5 5 5 5 5 5 5 5 5 f . . . 
        f 5 4 5 5 5 5 5 5 5 5 5 f . . . 
        f 5 5 5 5 5 5 5 5 4 5 5 f . . . 
        f 5 5 5 4 4 5 5 5 4 5 5 f . . . 
        f 5 5 5 5 5 5 5 5 4 5 5 f . . . 
        f 5 5 5 4 4 5 5 5 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 5 5 5 f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.COIN)
    animation.runImageAnimation(
    COIN,
    [img`
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 4 4 4 4 4 4 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 4 4 4 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . f 5 . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . f 5 . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . . f 5 . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 4 4 4 4 4 4 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 4 4 4 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 4 4 4 4 4 4 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 4 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 4 4 4 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    tiles.placeOnTile(COIN, value)
}
for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
    milk_in_a_bag = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . . . 1 1 1 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 1 1 1 . . . 
        . . . . . 9 9 9 9 9 9 9 9 . . . 
        . . . . . 9 9 9 9 9 9 9 9 . . . 
        . . . . . 9 9 9 9 9 9 9 9 . . . 
        . . . . . 9 9 9 9 9 9 9 9 . . . 
        . . . . . 9 9 9 9 9 9 9 9 . . . 
        . . . . . . 9 9 9 9 9 9 . . . . 
        . . . . . . 9 9 9 9 9 9 . . . . 
        . . . . . . 9 9 9 9 9 9 . . . . 
        . . . . . . 9 9 9 9 9 9 . . . . 
        `, SpriteKind.milkinabag)
    tiles.placeOnTile(milk_in_a_bag, value)
}
