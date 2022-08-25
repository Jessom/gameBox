<template>
	<w-layout className="destoryed-page" fullscreen>
		<view class="text">请确认您的账号是否满足一下注销条件</view>
		<view class="title">账号处于安全状态</view>
		<view class="text">最近一个月内无绑定手机、修改手机号、无找回密码、修改密码等操作。账号为正常使用中且一年内无任何账号被限制的记录。</view>
		
		<view class="tips">*申请注销后，180天后即可完成账号注销。</view>
		
		<view class="foot-btn">
			<u-button type="primary" shape="circle" text="下一步" @click="onSubmit"></u-button>
		</view>
	</w-layout>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		
		methods: {
			onSubmit() {
				
			}
		}
	}
</script>

<style lang="scss">
.destoryed-page {
	color: $u-main-color;
	background-color: #fff;
	padding: 20rpx;
	.text {
		font-size: 28rpx;
	}
	.title {
		font-weight: 600;
		margin-top: 30rpx;
		margin-bottom: 10rpx;
		font-size: 32rpx;
	}
	
	.tips {
		font-size: 28rpx;
		margin-top: 50rpx;
		color: $theme;
	}
}
</style>
