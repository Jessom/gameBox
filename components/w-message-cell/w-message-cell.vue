<template>
	<view class="w-message-cell">
		<view class="w-message-cell_header u-border-bottom">
			<view class="game" @click="$emit('onGame', null)">
				<u--image
					class="image"
					v-if="image"
					:showLoading="true" 
					:lazyLoad="true"
					:src="image" 
					:width="`${imageSize}rpx`" 
					:height="`${imageSize}rpx`"
				/>
				<text class="title">{{ name }}</text>
			</view>
			
			<view class="btn" @click="$emit('click', null)">
				<text class="text">查看详情</text>
				<u-icon name="arrow-right-double" size="26rpx" color="#3c9cff"></u-icon>
			</view>
		</view>
		
		<view class="w-message-cell_body">
			<view class="cell" v-if="account">
				<text class="label">账号：</text>
				<text class="text">{{ account }}</text>
			</view>
			<view class="cell" v-if="password">
				<text class="label">密码：</text>
				<text class="text">{{ password }}</text>
			</view>
			<block v-for="(item, idx) in gifts" :key="idx">
				<view class="cell">
					<text class="label">{{ item.packname }}：</text>
					<view class="right">
						<text class="text">{{ item.giftCode }}</text>
						<view class="btn" @click="onCopy(item)">复制</view>
					</view>
				</view>
			</block>
			<view class="cell" v-if="time">
				<text class="label">领取时间：</text>
				<text class="text">{{ time }}</text>
			</view>
			<view class="cell">
				<text class="label">区服：</text>
				<text class="text">全区通用</text>
			</view>
			<view class="tips">
				<u-icon name="warning-fill" size="34rpx" color="#ff5e00"></u-icon>
				<text class="text">领取成功，请复制下方下载链接，到浏览器下载游戏体验特权福利。</text>
			</view>
		</view>
		
		<view class="w-message-cell_footer u-border-top" @click="$emit('onCopy', null)">
			<u-icon name="file-text-fill" size="38rpx" color="#3c9cff"></u-icon>
			<text class="text">复制下载链接</text>
		</view>
	</view>
</template>

<script>
import props from './props.js'
export default {
	name:"w-message-cell",
	props,
	data() {
		return {
			
		};
	},
	methods: {
		onCopy(item) {
			uni.setClipboardData({
				data: item.giftCode,
				success() {
					uni.$u.toast('礼包码复制成功')
				}
			})
		}
	}
}
</script>

<style lang="scss">
.w-message-cell {
	background-color: #fff;
	border-radius: 20rpx;
	&_header {
		padding: 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.game {
			flex: 1;
			display: flex;
			align-items: center;
			.title {
				font-size: 32rpx;
				font-weight: 700;
				color: #282828;
				margin-left: 14rpx;
			}
		}
		.btn {
			display: flex;
			align-items: center;
			font-size: 26rpx;
			color: $theme;
		}
	}
	&_body {
		padding: 20rpx;
		.cell {
			font-size: 30rpx;
			margin-bottom: 10rpx;
			display: flex;
			align-items: center;
			.label {
				color: #969696;
			}
			.text {
				color: #636363;
			}
			.right {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
			.btn {
				background-color: $theme;
				color: $btnColor;
				font-size: 24rpx;
				line-height: 48rpx;
				border-radius: 48rpx;
				width: 88rpx;
				text-align: center;
			}
		}
		.tips {
			font-size: 30rpx;
			color: #666;
			display: flex;
			align-items: flex-start;
			.text {
				margin-left: 6rpx;
			}
		}
	}
	&_footer {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 32rpx;
		padding: 20rpx;
		color: #666;
		.text {
			margin-left: 6rpx;
		}
	}
}
</style>