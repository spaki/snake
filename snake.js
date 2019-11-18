// -> snake game by Eduardo Spaki
class Snake {
    constructor(x, y) {
        this.body = [createVector(x, y)];
        this.xdir = 0;
        this.ydir = 0;
    }
    
    setDirection(x, y) {
        this.xdir = x;
        this.ydir = y;
    }

    getHead() { 
        return this.body[this.body.length-1];
    }
    
    update() {
        let head = this.getHead().copy();
        this.body.shift();
        head.x += this.xdir;
        head.y += this.ydir;
        this.body.push(head);
    }
    
    grow() {
        this.body.push(this.getHead().copy());
    }
    
    isFail(boardWidth, boardHeight) {
        var head = this.getHead();

        // -> out of board
        if(head.x > boardWidth-1 || head.x < 0 || head.y > boardHeight-1 || head.y < 0) 
            return true;
      
        // -> body conflict
        for(let i = 0; i < this.body.length - 1; i++) 
            if(this.body[i].x == head.x && this.body[i].y == head.y) 
                return true;
        
        return false;
    }
    
    checkFood(food) {
        var head = this.getHead();

        if(head.x == food.x && head.y == food.y) {
            this.grow();
            return true;
        }
      
        return false;
    }
    
    render() {
        for(let i = 0; i < this.body.length; i++) {
            fill(0);
            noStroke();
            rect(this.body[i].x, this.body[i].y, 1, 1);
        }
    }
  }