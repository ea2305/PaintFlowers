<template>
  
    <!-- Contenedor principal para aplicación -->    
    <div class="gift">

      <!-- Espacio de animación -->
      <canvas-component></canvas-component>

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
import CanvasComponent from './components/CanvasComponents/CanvasComponent';

export default {
  
  name: 'app',
  components: { 
    'canvas-component': CanvasComponent
  },
  data () {
    // Definimos contenedor de elementos
    return { 
      primary_msg: 'Feliz Cumpleaños',
      important_name: 'Paula',
      second_msg: 'Deseo que te la pases muy bien hoy en tu cumpleaños, que tengas un día lleno de sorpresas ;) y primero Dios cumplas muchos más ;). Felicidades !!',
      note: 'Toque la pantalla para ver algo interesante :)'
    }
  }
}
</script>
