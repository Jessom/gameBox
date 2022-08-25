<template>
	<view class="w-layout" :class="[className, fullscreen ? 'fullscreen' : '']">
		<slot></slot>
	</view>
</template>

<script>
export default {
	name:"w-layout",
	props: {
		className: {
			type: String
		},
		fullscreen: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss" scoped>
.w-layout {
	background-color: $background;
	box-sizing: border-box;
}
.fullscreen {
	/* #ifdef H5 */
	height: calc(100vh - 44px);
	/* #endif */
	
	/* #ifndef H5 */
	height: 100vh;
	/* #endif */
}
</style>