class Game {
    constructor() {
     this.playButton = createSprite(width/2,height/2 + 200,30,40);
     this.playButton.addImage(startImg);
     this.playButton.scale = 0.3;
     this.gameOverButton = createSprite(width/2,height/2,30,40);
     this.gameOverButton.addImage(gameOverImg);
     this.winButton = createSprite(width/2,height/2,30,40);
     this.winButton.addImage(winImg);
     this.winButton.visible = false;
     this.superWeapon = createSprite(91,532,30,40);
     this.superWeapon.addImage(superWeaponImg);
     this.superWeapon.scale = 0.3;
     this.superWeapon.visible = false;
    this.flag1 = 0;
    this.flag2 = 0;
    this.flag3 = 0;
    this.flag4 = 0;
    this.flag5 = 0;
     this.gameOverButton.visible = false;
     this.level = 3;
    }
    start() {
        textSize(60);
        textStyle(BOLD);
        fill("red");
        text("SUPER WEAPON",width/2 - 250,height/2);
        
        if(mousePressedOver(this.playButton)) {
            gameState = 1;
        }
        player.sprite.visible = false;
        obstacles.hide();
        enemy1.hide();
        enemy2.hide();
        enemy3.hide();
        enemy4.hide();
        enemy5.hide();
        textSize(30);
        text("Hi Soldier, Your Mission is to acquire the super weapon that has fallen into the hands of terrorists.",45,417)
    }
    play() {
      player.sprite.visible= true;
      this.playButton.visible = false;
      this.superWeapon.visible = true;
      player.controls();
      player.collision();
      obstacles.reveal();
      enemy1.show();
      enemy2.show();
      enemy3.show();
      enemy4.show();
      enemy5.show();
      if(frameCount%50 === 0 && this.flag1===0) {
          enemy1.enemyBullet(458,281);

      }
      if(frameCount%75 === 0 && this.flag2===0) {
          enemy2.enemyBullet(414,502);
      }
      if(frameCount%100 === 0 && this.flag3 === 0) {
          enemy3.enemyBullet(184,377); 
      }
      if(frameCount%120 === 0 && this.flag4 === 0) {
        enemy4.enemyBullet(104,650); 
    }
    if(frameCount%150 === 0 && this.flag5 === 0) {
        enemy4.enemyBullet(79,439); 
    }
      if(enemy1.bulletGroup.isTouching(player.sprite) || enemy2.bulletGroup.isTouching(player.sprite) || enemy3.bulletGroup.isTouching(player.sprite) || enemy4.bulletGroup.isTouching(player.sprite) || enemy5.bulletGroup.isTouching(player.sprite)) {
          this.level = this.level - 1;
          player.sprite.x = width - 50;
          player.sprite.y = height/2;
      }
      if(this.level === 0) {
          gameState = 2;
      }
      if(player.sprite.isTouching(this.superWeapon)) {
          gameState = 3;
      }
      if(keyWentDown(32)) {
          player.shoot();
      }
      if(player.bulletGroup.isTouching(enemy1.sprite)) {
          enemy1.sprite.destroy();
          enemy1.bulletGroup.destroyEach();
          this.flag1 = 1;
      }
      if(player.bulletGroup.isTouching(enemy2.sprite)) {
        enemy2.sprite.destroy();
        enemy2.bulletGroup.destroyEach();
        this.flag2 = 1;
    }
    if(player.bulletGroup.isTouching(enemy3.sprite)) {
        enemy3.sprite.destroy();
        enemy3.bulletGroup.destroyEach();
        this.flag3 = 1;
    }
    if(player.bulletGroup.isTouching(enemy4.sprite)) {
        enemy4.sprite.destroy();
        enemy4.bulletGroup.destroyEach();
        this.flag4 = 1;
    }
    if(player.bulletGroup.isTouching(enemy5.sprite)) {
        enemy5.sprite.destroy();
        enemy5.bulletGroup.destroyEach();
        this.flag5 = 1;
    }
      text("Number Of Lives: " + this.level,1117,646);
      
    }
    end() {
        this.gameOverButton.visible = true;
        player.sprite.visible = false;
        this.superWeapon.visible = false;
        enemy1.bulletGroup.destroyEach();
        enemy2.bulletGroup.destroyEach();
        enemy3.bulletGroup.destroyEach();
        enemy4.bulletGroup.destroyEach();
        enemy5.bulletGroup.destroyEach();
        player.bulletGroup.destroyEach();
        obstacles.hide();
        enemy1.hide();
        enemy2.hide();
        enemy3.hide();
        enemy4.hide();
       enemy5.hide();

    }
    win() {
        this.winButton.visible = true;
        player.sprite.visible = false;
        this.superWeapon.visible = false;
        enemy1.bulletGroup.destroyEach();
        enemy2.bulletGroup.destroyEach();
        enemy3.bulletGroup.destroyEach();
        enemy4.bulletGroup.destroyEach();
        enemy5.bulletGroup.destroyEach();
        player.bulletGroup.destroyEach();
        obstacles.hide();
        enemy1.hide();
        enemy2.hide();
        enemy3.hide();
        enemy4.hide();
        enemy5.hide();
        
    }

}