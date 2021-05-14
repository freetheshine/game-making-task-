controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (JACOB.vy == 0) {
        JACOB.vy = -150
    }
})
let JACOB: Sprite = null
scene.setBackgroundColor(9)
JACOB = sprites.create(assets.image`JACOB`, SpriteKind.Player)
controller.moveSprite(JACOB, 90, 100)
tiles.setTilemap(tilemap`level4`)
JACOB.ay += 200
scene.cameraFollowSprite(JACOB)
