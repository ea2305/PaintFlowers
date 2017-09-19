<template>
  
    <!-- Contenedor principal para aplicación -->    
    <div class="gift">

      <!-- Espacio de animación -->
      <div id="mapping" class="noSelect" @click.prevent="createFlower($event)">

          <!-- Slow implementation, I know that i'm not using all the vue tools but in this case is slower -->
          <!--flower-component :flowers="flowers"></flower-component-->

          <!-- String template : String template base render -->
          <transition-group name="flower" tag="div"> 
            <div v-for="(frame, index) of template" :key="index + '_flower'">
              

                <div v-show="true" v-html="frame" :key="index + '_flower'"></div>

              
            </div>
          </transition-group>

      </div>

      <!-- Title -->  
      <h1 class="base-font"> {{ primary_msg }} <span class="special-font"> {{ important_name }} </span> !</h1>
      
      <!-- Mensaje -->
      <p class="content-font">{{ second_msg }}</p>

      <!-- Mmensaje random -->
      <span class="content-font note-font min-frame">{{ note }}</span>

    </div>
    
    
  
</template>

<script>

/**
 * @author Elihu A. Cruz
 * Simulador de flores :)
 */
import {colors,centerColors} from './assets/js/colors.js';
import { increment,TWO_PI, nElements, circleDegrees } from './assets/js/variables.js';

import FlowerComponent from './components/FlowerComponent';

export default {
  
  name: 'app',

  components: {
    'flower-component' : FlowerComponent,
  },

  data () {
    // Definimos contenedor de elementos
    return { 
      primary_msg: 'Feliz Cumpleaños',
      important_name: 'Paula',
      second_msg: 'Deseo que te la pases muy bien hoy en tu cumpleaños, que tengas un día lleno de sorpresas ;) y primero Dios cumplas muchos más ;). Felicidades !!',
      note: 'Toque la pantalla para ver algo interesante :)',
      flowers : [],
      template: []
    }
  },  

  methods: {

    createFlower ( event ) {
      
      // conteo de elementos
      let index = 0;
      
      // Captura de evento de tecadlo para posicionamiento
      let startX = event.clientX,
          startY = event.clientY;
      
      // Utilidades
      let colorFill    = Math.floor( colors.length * Math.random()),
          colorStroke  = Math.floor( colors.length * Math.random()),
          flowerRadius = Math.floor( (((window.innerWidth / 7) * .4) - 35) * Math.random()) + 35,
          leafHeight   = flowerRadius * 2,
          leafWidth    = Math.floor( ( (window.innerWidth / 50) - 10 ) * Math.random()) + 10;
      
      // Contenedor de hojas
      // let leafsComponents = [];
      // let layers = 1 / ( Math.floor( 2 * Math.random() ) + 1 );

      // Template string
      let templateLeaf = '';
      // Generamos datos para hojas
      let layer = 1;
      // for( let layer = 1 ; layer >= 0 ; layer -= layers ){

        for ( let angle = 0 ; angle < TWO_PI ; angle += increment ) {
        
          // Posicionamiento
          let posX = ( startX - ( leafWidth / 2 ))  + Math.cos( angle ) * flowerRadius ,
              posY = ( startY - ( leafHeight / 2 )) + Math.sin( angle ) * flowerRadius ,
              rotation = ( circleDegrees * index++ ) + 90;

// IMPORTANT
          templateLeaf += this.getStringLeaf( 0.75, colorFill, colorStroke, rotation, layer, posX, posY, leafWidth, leafHeight );

/*
          let leafFlower = this.getLeafTemplate( 0.75, colorFill, colorStroke, rotation, layer, posX, posY, leafWidth, leafHeight );
          // Agregamos hojas
          leafsComponents.push( leafFlower );
*/
        }
      // }
      
      // Calculo de centro
      let center_width = (flowerRadius * .9),
          centerColor  = Math.floor( centerColors.length * Math.random());

// IMPORTANT
      let templateCenter = this.getStringCenter( 0.93, centerColor, startX, startY, center_width );
      this.template.push(`<div v-if='true'>  ${ templateLeaf } ${ templateCenter } </div>`);

/*

      let centerFlower = this.getCenterTemplate( 0.93, centerColor, startX, startY, center_width );
      // Quitamos ultimo petalo
      leafsComponents.pop();

      // Agrupamos datos
      
      let flowerComponent = {
        index  : new Date().valueOf(),
        leafs  : leafsComponents,
        center : centerFlower
      }

      // Cargamos datos
      // this.flowers.push( flowerComponent );
*/

    },

    getCenterTemplate ( opacity, centerColor, startX, startY, center_width ) {

      // Configuración de estilos para flor
      return {
        id: new Date().valueOf(),
        centerStyle : {
          opacity : opacity,
          background  : '#' + centerColors[ centerColor ],
          borderColor : 'yellow',
          left   : ( startX - center_width / 2 ) + 'px',
          top    : ( startY - center_width / 2 ) + 'px',
          width  : center_width + 'px',
          height : center_width +'px'
        }
      }
    },

    getLeafTemplate ( opacity, colorFill, colorStroke, rotation, layer, posX, posY, leafWidth, leafHeight ) {
      return {
        id: new Date().valueOf(),
        leafStyle : {
          opacity   : opacity,
          background  : '#' + colors[ colorFill ],
          borderColor : '#' + colors[ colorStroke ],
          transform   : 'rotate(' + rotation + 'deg) scale(' + layer + ','+ layer + ')',
          left   : posX + 'px',
          top    : posY + 'px',
          width  : leafWidth + 'px',
          height : leafHeight + 'px'
        }
      }
    },

    getStringLeaf( opacity, colorFill, colorStroke, rotation, layer, posX, posY, leafWidth, leafHeight ) {
      let styles = ` style='opacity: ${opacity};
                            background  : ${ '#' + colors[ colorFill ] };
                            borderColor : ${ '#' + colors[ colorStroke ] };
                            transform   : ${ 'rotate(' + rotation + 'deg) scale(' + layer + ','+ layer + ')' };
                            left   : ${ posX + 'px' };
                            top    : ${ posY + 'px' };
                            width  : ${ leafWidth + 'px' };
                            height : ${ leafHeight + 'px' }' `;
                  
      let id     = `id= '${ new Date().valueOf() }'`;

      return `<div class='leaf' ${id} ${styles.trim()}></div>`;
    },

    getStringCenter( opacity, centerColor, startX, startY, center_width ) {
      let styles = `  style='opacity: ${ opacity };
                              background  : ${ '#' + centerColors[ centerColor ] };
                              borderColor : ${ 'yellow' };
                              left   : ${ ( startX - center_width / 2 ) + 'px' };
                              top    : ${ ( startY - center_width / 2 ) + 'px' };
                              width  : ${ center_width + 'px' };
                              height : ${ center_width +'px' }' `;

      return `<div class='center_circle' ${ styles }></div>`
    }
  }
}
</script>
