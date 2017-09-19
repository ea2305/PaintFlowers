<!-- 3rd fase, decrepted -->

<template id="root-leaf-component">
	<div>
		<div id="leaf-container" v-for="(leaf, index) of flower.leafs">
		
			<leaf-component :leaf="leaf"></leaf-component>

		</div>
	</div>
</template>

<script>

	import LeafComponent from './LeafComponent';

	export default {
		name: 'root-leaf-component',
		components: {
		  'leaf-component': LeafComponent,
		},
		props: ['flower'],
		render () {

		}
	}

</script>