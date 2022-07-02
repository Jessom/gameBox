<template>
	<w-layout className="mine-page">
		<view class="mine-header">
			<view class="avatar">
				<u-avatar size="56" src=""></u-avatar>
			</view>
			<view class="mine-meta">
				<view class="title"><text>点击登录</text></view>
				<view class="subtitle"><text>账号：watasi</text></view>
			</view>
			<u-icon name="arrow-right" size="40" color="rgba(255,255,255,0.3)"></u-icon>
		</view>
	</w-layout>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.mine-page {
	.mine-header {
		padding: 20rpx;
		background-color: $theme;
		display: flex;
		flex-direction: row;
		align-items: center;
		.avatar {
			width: 56px;
			height: 56px;
			border-radius: 50%;
			border: 4px solid rgba(#fff, 0.2);
		}
		.mine-meta {
			flex: 1;
			padding-left: 20rpx;
			.title {
				font-size: 38rpx;
				color: #fff;
				font-weight: 700;
			}
			.subtitle {
				font-size: 30rpx;
				margin-top: 14rpx;
				color: rgba(#fff, 0.9);
			}
		}
	}
}
</style>
