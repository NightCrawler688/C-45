class Obstacles {
    constructor() {
        this.stone1 = createSprite(706,230,30,40);
        this.stone1.addImage("rocks",rockImg);
        this.stone1.scale = 0.5;
        this.stone2 = createSprite(678,568,30,40);
        this.stone2.addImage("rocks",rockImg);
        this.stone2.scale = 0.5;
    }
    hide() {
        this.stone1.visible = false;
        this.stone2.visible = false;
    }
    reveal() {
        this.stone1.visible = true;
        this.stone2.visible = true;
    }

}