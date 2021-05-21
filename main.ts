namespace SpriteKind {
    export const COIN = SpriteKind.create()
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.COIN, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
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
    tiles.placeOnTile(COIN, value)
}
