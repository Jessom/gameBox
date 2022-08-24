<template>
	<w-layout className="about-page">
		<view class="header">
			<u--image :showLoading="true" :src="logo" width="80px" height="80px" radius="10"></u--image>
			<view class="title">{{ appName }}</view>
			<view class="version">版本 {{ appVersion }}</view>
		</view>
		
		<view class="body">
			<u-cell-group>
				<u-cell title="版本更新" @click="onUpdate"></u-cell>
			</u-cell-group>
		</view>
		
		<view class="footer">
			<navigator url="/mine/argument" class="target">《用户协议》</navigator>
			<view class="line"></view>
			<navigator url="/mine/private" class="target">《隐私政策》</navigator>
		</view>
	</w-layout>
</template>

<script>
import config from '@/common/config.js'
export default {
	data() {
		const sys = uni.$u.sys()
		return {
			logo: '../static/logo.png',
			appName: config.appName,
			appVersion: sys.appVersion,
		};
	},
	
	methods: {
		onUpdate() {
			uni.showLoading({ mask: true })
			
			setTimeout(() => {
				uni.hideLoading()
			}, 1500)
		}
	}
}
</script>

<style lang="scss">
.about-page {
	/* #ifdef H5 */
	height: calc(100vh - 44px);
	/* #endif */
	
	/* #ifndef H5 */
	height: 100vh;
	/* #endif */
	position: relative;
	background-color: #fff;
	
	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: 200rpx;
		.title {
			font-size: 40rpx;
			font-weight: 600;
			color: $u-main-color;
			margin-top: 40rpx;
		}
		.version {
			font-size: 32rpx;
			color: $u-tips-color;
			margin-top: 12rpx;
		}
	}
	
	.body {
		padding: 40rpx;
		margin-top: 40rpx;
	}
	
	.footer {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		padding-bottom: calc(constant(safe-area-inset-bottom) + 20px);
		padding-bottom: calc(env(safe-area-inset-bottom) + 20px);
		display: flex;
		align-items: center;
		justify-content: center;
		.target {
			color: rgb(0, 109, 255);
			font-size: 24rpx;
			display: inline-block;
		}
		.line {
			width: 1rpx;
			height: 26rpx;
			background-color: #e3e3e3;
			margin: 0 14rpx;
		}
	}
}
</style>
