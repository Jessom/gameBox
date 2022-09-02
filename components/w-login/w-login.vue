<template>
	<view class="w-login" :class="className">
		<u--image :showLoading="true" :src="logo" width="80px" height="80px" radius="10"></u--image>
		
		<view class="body">
			<slot></slot>
		</view>
		
		<view class="footer">
			<slot name="footer"></slot>
		</view>
	</view>
</template>

<script>
export default {
	name:"w-login",
	
	props: {
		className: String,
	},
	
	data() {
		return {
			logo: '../static/logo.png',
		};
	}
}
</script>

<style lang="scss" scoped>
.w-login {
	/* #ifdef H5 */
	height: calc(100vh - 44px);
	/* #endif */
	
	/* #ifndef H5 */
	height: 100vh;
	/* #endif */
	display: flex;
	flex-direction: column;
	// justify-content: space-around;
	align-items: center;
	padding-top: 140rpx;
	position: relative;
	box-sizing: border-box;
	background-color: $background;
	
	.body {
		width: 100%;
		padding: 0 60rpx;
		box-sizing: border-box;
	}
	
	.footer {
		position: absolute;
		left: 0;
		bottom: calc(constant(safe-area-inset-bottom) + 30px);
		bottom: calc(env(safe-area-inset-bottom) + 30px);
		width: 100%;
	}
}
</style>