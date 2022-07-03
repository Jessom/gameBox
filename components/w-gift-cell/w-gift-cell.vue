<template>
	<view class="w-gift-cell" :class="className">
		<u--image
			class="w-gift-cell_image"
			v-if="image"
			:showLoading="true" 
			:lazyLoad="true"
			:src="image" 
			:width="`${imageSize}rpx`" 
			:height="`${imageSize}rpx`"
		/>
		<view class="w-gift-cell_meta">
			<view class="title"><text>{{ title }}</text></view>
			<view class="text u-line-1" v-if="name">
				<text>名称：</text>
				<text>{{ name }}</text>
			</view>
			<view class="text u-line-1" v-if="content">
				<text>内容：</text>
				<text>{{ content }}</text>
			</view>
			<view class="text u-line-1" v-if="code">
				<text>礼包码：</text>
				<text>{{ code }}</text>
			</view>
			<view class="text u-line-1" v-if="time">
				<text>有效日期：</text>
				<text>{{ time }}</text>
			</view>
		</view>
		
		<view class="w-gift-cell_btn" :class="disabled ? 'disabled' : ''" @click="onClick">
			<text>{{ buttonText }}</text>
		</view>
	</view>
</template>

<script>
import props from './props.js'
export default {
	name:"w-gift-cell",
	props,
	data() {
		return {
			
		};
	},
	methods: {
		onClick() {
			if(!this.disabled) {
				this.$emit('click', null)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.w-gift-cell {
	display: flex;
	flex-direction: row;
	align-items: center;
	&_image {}
	&_meta {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 20rpx;
		.title {
			font-weight: 700;
			font-size: 30rpx;
			color: #282828;
			margin-bottom: 5rpx;
		}
		.text {
			color: #999;
			font-size: 24rpx;
			margin-bottom: 5rrpx;
		}
	}
	&_btn {
		width: 110rpx;
		height: 54rpx;
		line-height: 54rpx;
		border-radius: 54rpx;
		text-align: center;
		font-size: 28rpx;
		background-color: $theme;
		color: $btnColor;
		&.disabled {
			opacity: 0.6;
		}
	}
}
</style>