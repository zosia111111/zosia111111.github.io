import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("obrazekbez","obrazekbez.png")
loadSprite("balwan","balwanludek.png")
loadSound("panna","panna.mp3")


add([
    sprite("obrazekbez"),
    pos(0,0)
])



const balwan = add([
    sprite("balwan"),
    pos(0,430)
])

onUpdate(()=>{

    if(balwan.pos.x < 367)

    balwan.pos.x = balwan.pos.x+3 
})

onKeyPress(("space"),()=>{play("panna")})