class Paper {
    constructor(x,y){
        var options= {
            isStatic:false,
            restitution:0.8,
            friction:1,
            density:1.2,
        }
        this.body = Bodies.circle(x,y,20,options);
        this.radius = 20;
        World.add(world,this.body);   
    }
    display (){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(255);
        ellipse(pos.x,pos.y,20,20);
    }
}