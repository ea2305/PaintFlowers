/**
 * Create canvas flower shape
 * @author Elihu A. Cruz
 * @version 0.1.1
 */

import Flower from './Objects/Flower';
import {colors,centerColors} from './colors.js';

export default class CanvasFrame {

    constructor( canvas, ctx, frame ) {

        this.frame = frame || { x: 0, y: 0 };
        this.frames = []; // Frames list  
        this.canvas = canvas || undefined;
        this.ctx    = ctx    || undefined;
        
    }

    init() {

        let framesTimes = setInterval( () => {

            this.ctx.clearRect( 0, 0, this.canvas.width, this.canvas.height);

            this.frames.forEach( ( item, index ) => {

                item.draw( this.ctx );

            });
            
        }, 10 );
    }

    setElement( element ) {
        this.frames.push( element )
    }
    
}