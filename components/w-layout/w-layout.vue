<template>
	<view class="w-layout" :class="className">
		<slot></slot>
	</view>
</template>

<script>
export default {
	name:"w-layout",
	props: {
		className: {
			type: String
		}
	}
}
</script>

<style lang="scss" scoped>
.w-layout {
	background-color: $background;
}
</style>