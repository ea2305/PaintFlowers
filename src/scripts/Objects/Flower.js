/**
 * Flower render functionality
 * @author Elihu A. Cruz
 * @version 0.1.0
 */
import {colors,centerColors} from '../colors.js';
import Leaf from './Leaf';
import tools from '../windowTools';

export default class Flower {

    constructor ( posX, posY ) {
    
        this.posX  = posX || 0;
        this.posY  = posY || 0;
        this.leafs = [];
        this.token = 0;

        // Colors
        this.colorFill    = '#' + colors[ tools.random( 0, colors.length ) ],
        this.colorStroke  = '#' + colors[ tools.random( 0, colors.length ) ],
        this.centerColor  = '#' + centerColors[ tools.random( 0, centerColors.length ) ];

        // incrementos
        this.sizeY = tools.random( 10, 20 );
        this.sizeX = this.sizeY + tools.random( 30, 80 );

        // Generamos hojas
        this.generateLeafs( this.posX, this.posY, this.sizeX, this.sizeY );

    }

    /**
     * Create flower shape
     * @param {DOMObject} ctx 
     */
    draw ( ctx ) {

        ctx.strokeStyle = this.colorFill;
        ctx.fillStyle   = this.colorStroke;

        this.leafs.forEach( ( item, index ) => {

            /*
            if( this.token == index ){
                if(! item.isVisible() )
                    item.incrementAlpha( 0.15 );
                else
                    this.token++;
            }
            */
            if(! item.isVisible() )
                item.incrementAlpha( 0.09 );
                
            item.draw( ctx );
            
        });

        ctx.globalAlpha = 1;

        ctx.beginPath()
        ctx.fillStyle = this.centerColor;
        ctx.arc( this.posX, this.posY, 20, 0, 2 * Math.PI, false );
        ctx.fill();

    }

    generateLeafs() {

        for(let angle = 0; angle < 16; angle++) {

            this.leafs.push( new Leaf( this.posX, this.posY, this.sizeX, this.sizeY, 1.01 ));

        }
        
    }

}