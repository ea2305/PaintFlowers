export default class Leaf {

    constructor( posX, posY, sizeX, sizeY, alpha ) {
        
        this.posX = posX || 0;
        this.posY = posY || 0;
        this.sizeX = sizeX || 10;
        this.sizeY = sizeY || 5;
        this.alpha = 0;

    }

    draw ( ctx ) {
        
        ctx.translate( this.posX, this.posY ); // translate to rectangle center 
        ctx.rotate( (Math.PI / 180) * 22.5); // rotate
        ctx.translate( - this.posX, - this.posY ); // translate back
        
        ctx.globalAlpha = Math.pow( this.alpha, 2 ) ;

        ctx.beginPath();
        ctx.moveTo(this.posX,this.posY);
        ctx.bezierCurveTo( 
            this.posX,
            this.posY + this.sizeY, 
            (this.posX + this.sizeX) * .98, 
            this.posY + this.sizeY, 
            this.posX + this.sizeX, 
            this.posY
        );
        ctx.bezierCurveTo( 
            (this.posX + this.sizeX) * .99,
            this.posY - this.sizeY, 
            this.posX, 
            this.posY - this.sizeY, 
            this.posX, 
            this.posY
        );

        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        
    }

    incrementAlpha( increment ) {
        this.alpha += increment;
    }

    isVisible() {
        return ( this.alpha >= 0.7 );
    }

}