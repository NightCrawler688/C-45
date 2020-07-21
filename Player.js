class Player{
    constructor() {
        this.sprite = createSprite(width - 50,height/2,40,30);
        this.sprite.addImage("player",playerImg);
        this.sprite.scale = 0.2;
        this.bulletGroup = new Group();
    }
    controls() {
        if(keyIsDown(UP_ARROW)) {
          this.sprite.y = this.sprite.y - 10;
        }
        if(keyIsDown(DOWN_ARROW))
        {
         this.sprite.y = this.sprite.y + 10;
        }
        if(keyIsDown(LEFT_ARROW)) {
          this.sprite.x = this.sprite.x - 10;
        }
        if(keyIsDown(RIGHT_ARROW)) {
          this.sprite.x = this.sprite.x +10;
        }
        
    }
    collision() {
        this.sprite.collide(edges[0]);
        this.sprite.collide(edges[1]);
        this.sprite.collide(edges[2]);
        this.sprite.collide(edges[3]);
        this.sprite.collide(obstacles.stone1);
        this.sprite.collide(obstacles.stone2);
    }
    shoot() {
      var bullet = createSprite(this.sprite.x,this.sprite.y,40,30);
      bullet.addImage(playerBulletImg);
      bullet.scale = 0.05;
      this.bulletGroup.add(bullet);
      bullet.velocityX = -15;
      bullet.lifetime = floor(width/bullet.velocityX);
    }
      
    
}