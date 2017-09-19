<!-- 3rd fase, decrepted -->

<template id="leaf-component" >
  
	<!--div class="leaf" :id="leaf.id" :key="leaf.id" :style="leaf.leafStyle"></div-->
	<div v-html="template">{{ template }}</div>

</template>

<script>
export default {
  
  name: 'leaf-component',
  props: ['leaf'],
  mounted () {

		/*
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
		*/
  	let styles = ` style='opacity: ${this.leaf.leafStyle.opacity};
								  background  : ${this.leaf.leafStyle.background};
								  borderColor : ${this.leaf.leafStyle.borderColor};
								  transform   : ${this.leaf.leafStyle.transform};
								  left   : ${this.leaf.leafStyle.left};
								  top    : ${this.leaf.leafStyle.top};
								  width  : ${this.leaf.leafStyle.width};
								  height : ${this.leaf.leafStyle.height}' `;

  	let id     = `id= '${this.leaf.id}'`;

  	this.template = `<div class='leaf' ${id} ${styles}></div>`;
  },
  data () {
  	return {
  		template: ''
  	}
  }

}
</script>