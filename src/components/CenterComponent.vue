<!-- 3rd fase, decrepted -->
<template>

	<div v-html="template"></div>

</template>

<script>
	export default {
		name: 'center-component',
		props: ['centerStyle'],
		mounted () {

			let styles = ` 	style='opacity: ${this.centerStyle.opacity};
										  background  : ${this.centerStyle.background};
										  borderColor : ${this.centerStyle.borderColor};
										  left   : ${this.centerStyle.left};
										  top    : ${this.centerStyle.top};
										  width  : ${this.centerStyle.width};
										  height : ${this.centerStyle.height}' `;

			this.template = `<div class='center_circle' ${ styles }></div>`
		},
		data () {
			return {
				template: ''
			}
		}
	}
</script>