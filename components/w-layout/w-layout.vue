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
	},
	data() {
		return {
			
		};
	}
}
</script>

<style lang="scss" scoped>
.w-layout {
	min-height: 100vh;
	background-color: #f5f6f8;
}
</style>