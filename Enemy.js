class Enemy {
    constructor(x,y,width,height) {
        this.sprite = createSprite(x,y,width,height);
        this.sprite.addImage("enemy",enemyImg);
        this.sprite.scale = 0.2;
        this.bulletGroup = new Group();
    }
   
    enemyBullet(x,y) {
      var bullet = createSprite(x,y,30,40);
      bullet.addImage(enemyBulletImg);
      bullet.scale = 0.1;
     
       bullet.velocityX = 5;
       this.bulletGroup.add(bullet);
       bullet.lifetime = floor(width/5);
    }
    hide() {
        this.sprite.visible = false;
       
    }
    show() {
        this.sprite.visible = true;
    }
}