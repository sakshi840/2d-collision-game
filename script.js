var paintbox = document.getElementById('paintbox')
var context = paintbox.getContext('2d')
let gameOn = true
let playerSpeed = 5
class box{
    constructor(size,color){
        this.size=size
        this.color=color
        this.x = 0
        this.y = 0
    }
    
}
class Player extends box{
    constructor(){
        super(50,'blue')
        this.x=0
        this.y =225
        this.speed=0
       
    }
    move() {
            this.x+= this.speed
    }
}
class Enemy extends box{
    constructor(speed,color){
        super(50)
        this.speed = speed
        this.color=color
    }
        move(){
            this.y+= this.speed
            if(this.y+this.size>500){
                this.speed = -(Math.abs(this.speed))
            }
            if(this.y<0){
                this.speed  = Math.abs(this.speed)
            }
        }
    
}
let player= new Player()
let e1 = new Enemy(3,'purple')
let e2 = new Enemy(5,'brown')
let e3 = new Enemy(8,'yellow')
e1.x = 70
e2.x= 200
e3.x = 370

function isCollide(box1,box2){
    if (e1.x < player.x + player.size &&
        e1.x + e1.size > player.x &&
        e1.y < player.y + player.size &&
        e1.y + e1.size > player.y) {
            window.alert('Game Over')
        } if (e2.x < player.x + player.size &&
            e2.x + e1.size > player.x &&
            e2.y < player.y + player.size &&
            e2.y + e2.size > player.y) {
                window.alert('Game Over')
            }
             if (e3.x < player.x + player.size &&
                e3.x + e3.size > player.x &&
                e3.y < player.y + player.size &&
                e3.y + e3.size > player.y) {
                    window.alert('Game Over')
                } 

}

function drawbox(box){
    context.fillStyle = box.color
    context.fillRect(box.x,box.y,box.size,box.size)

}
paintbox.addEventListener('mousedown',()=> {
   player.speed = playerSpeed
})
paintbox.addEventListener('mouseup',()=> {
    player.speed= 0
})
setInterval(() => {
    playerSpeed = 5+ parseInt(Math.random()*10)
    player.y = 100 + (Math.random()*300)
}, 2000)
function gameLoop()  {
    if(!gameOn) return
        context.clearRect(0,0,500,500)
    e1.move()
    e2.move()
    e3.move()
    player.move()

    if(isCollide(e1,player) || isCollide(e2,player) || isCollide(e3,player)){
        gameOn = false
        window.alert('Game Over')
    }
    if(player.x>500){
        window.alert('you win')
    }

    drawbox(e1)
    drawbox(e2)
    drawbox(e3)
    drawbox(player)
    window.requestAnimationFrame(gameLoop)            
}
gameLoop()



