

class Player {
    constructor(){
        this.positionX = 0;
        this.positionY = 0;
        this.playerElm = document.getElementById("player");
    }
    moveLeft(){
        this.positionX--;
        this.playerElm.style.left = this.positionX + "vw";
    }
    moveRight(){
        this.positionX++;
        this.playerElm.style.left = this.positionX + "vw";
    }
}



class Obstacle {
    constructor(){
        this.positionX = 50;
        this.positionY = 100;
        this.obstacleElm = null; //will store a dom element

        this.createDomElement();
    }
    createDomElement(){
        // step1: create the element
        this.obstacleElm = document.createElement('div');

        // step2: add content (ex. innerText) and/or modify attributes 
        this.obstacleElm.className = "obstacle";
        this.obstacleElm.style.left = this.positionX + "vw";

        //step3: append to the dom
        const boardElm = document.getElementById("board");
        boardElm.appendChild(this.obstacleElm);
    }
    moveDown(){
        this.positionY--;
        this.obstacleElm.style.bottom = this.positionY + "vh";
    }
}



const myPlayer = new Player();
const obstaclesArr = []; //will store instances of the class Obstacle


//create new obstacles
setInterval(function(){
    const myObstacle = new Obstacle();
    obstaclesArr.push(myObstacle);
}, 2000);


//move all obstacles
setInterval(function(){
    obstaclesArr.forEach( (obstacleInstance) => {
        obstacleInstance.moveDown();
    });
}, 16);


//attach event listeners
document.addEventListener("keydown", (e) => {
    if(e.key === "ArrowLeft"){
        myPlayer.moveLeft();
    } else if (e.key === "ArrowRight") {
        myPlayer.moveRight();
    }
});

