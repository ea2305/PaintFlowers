<!-- 3rd fase, decrepted -->

<!-- Creación de componente -->
<template id="flower-component">

  <!-- Componente incial -->
  <div id="root_garden">

    <transition-group name="flower" tag="div">    

      <!-- Iterator -->
      <div v-for="( flower, index ) of flowers" :key="index">

        <!-- Hojas -->
        <!--leaf-component  :flower="flower" :key="index +'_flower'"></leaf-component-->
        <root-leaf-component :flower="flower" :key="index +'_flower'"></root-leaf-component>

        <!-- Centro -->
        <center-component :centerStyle="flower.center.centerStyle" :key="index + '_center'"></center-component>

        <!--div v-html="flower.html">
        </div-->

      </div>

    </transition-group>

  </div>

</template>

<script>

import RootLeafComponent from './RootLeafComponent';
import LeafComponent from './LeafComponent';
import CenterCompnent from './CenterComponent';

export default {

  name: 'flower-component',
  props: ['flowers'],

  components: {
    'root-leaf-component': RootLeafComponent,
    'leaf-component': LeafComponent,
    'center-component': CenterCompnent
  }

}

</script>