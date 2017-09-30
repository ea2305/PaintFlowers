<template>
  <canvas id="canvas" @click="setPointer" class="noSelect"></canvas>
</template>

<script>

import CanvasFrame from '../../scripts/CanvasFrame';
import Flower from '../../scripts/Objects/Flower';
import tools from '../../scripts/windowTools';

export default {

    name: 'test-component',
    data() {
        return {
            canvasLocation: undefined,
            canvasFrame: undefined,
            canvas: undefined,
            ctx:    undefined,
            frame: {},
        }
    },

    // Set up component at the top
    created() {
        this.$nextTick( () => {
            window.scrollTo(0,0);
        });
    },
    
    mounted() {

        this.canvasLocation = document.querySelector('#canvas').getBoundingClientRect();
        this.canvas = document.querySelector('#canvas');

        // Redimensión de cavas.
        this.canvas.width  = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.ctx = this.canvas.getContext('2d');

        this.frame = tools.absoluteLocation( this.canvas );
        this.canvasFrame = new CanvasFrame( this.canvas, this.ctx, this.frame );

        // Inicializamos loop de dibujo
        this.canvasFrame.init();
    },
    methods: {

        setPointer( event ) {

            // Obtenemos el elemento
            let canvasLocation = document
                                    .querySelector('#canvas')
                                    .getBoundingClientRect();
                                    
            // Obtenemos la posición concreta del canvas
            let location = tools.mouseCanvas ( 
                canvasLocation,
                event,
                this.frame 
            );

            this.canvasFrame.setElement( 
                new Flower( location.x - this.frame.x, location.y - this.frame.y)
            );
        }

    }
}
</script>

<style>
    #canvas{
        cursor: pointer;
        height: 100%;
        width: 100% !important;
    }

</style>
