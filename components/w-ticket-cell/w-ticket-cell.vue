<template>
	<view class="w-ticket-cell" :class="[over ? 'over' : '', className]">
		<view class="w-ticket-cell_left">
			<view class="">
				<text class="small">¥</text>
				<text class="price">{{ price }}</text>
			</view>
			<text class="text">
				{{ total == '0' || total == '0.00' ? '任意金额可用' : '满' + total + '元可用' }}
			</text>
		</view>
		<view class="w-ticket-cell_meta">
			<view class="title"><text>{{ title }}</text></view>
			<view class="text u-line-1" v-if="time"><text>{{ time }}</text></view>
			<view class="text u-line-1" v-if="name"><text>仅限《{{ name }}》使用</text></view>
			<view class="btn" @click="$emit('used', null)">
				<text>使用方法 ></text>
				<!-- <u-icon name="arrow-right" color="#3c9cff" size="12"></u-icon> -->
			</view>
		</view>
		<view class="w-ticket-cell_btn" @click="onClick" :class="disabled ? 'disabled' : ''"><text>{{ buttonText }}</text></view>
	</view>
</template>

<script>
import props from './props.js'
export default {
	name:"w-ticket-cell",
	props,
	data() {
		return {
			
		};
	},
	methods: {
		onClick() {
			if(this.disabled || this.over) {} else {
				this.$emit('click', null)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.w-ticket-cell {
	background-color: #fff;
	border-radius: 20rpx;
	display: flex;
	flex-direction: row;
	align-items: center;
	&.over {
		.w-ticket-cell_left {
			background: #b3b3b3;
		}
		.w-ticket-cell_meta {
			.title { color: #999; }
			.text { color: #b3b3b3; }
			.btn { color: #999; }
		}
	}
	&_left {
		position: relative;
		width: 220rpx;
		background: linear-gradient(180deg, #e9753b, #d74e33);
		height: 220rpx;
		border-radius: 20rpx 0 0 20rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #fff;
		&::after {
			content: "";
			position: absolute;
			top: 0px;
			bottom: 0px;
			right: -10rpx;
			width: 20rpx;
			height: 100%;
			background: radial-gradient(circle, #ffffff, #ffffff 8rpx, transparent 10rpx);
			background-size: 10px 10px;
		}
		.small {
			font-size: 26rpx;
		}
		.price {
			font-size: 34rpx;
			font-weight: 700;
			margin-left: 8rpx;
		}
		.text {
			font-size: 26rpx;
		}
	}
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
		.btn {
			display: flex;
			flex-direction: row;
			align-items: center;
			font-size: 30rpx;
			color: $theme;
			padding-top: 10rpx;
		}
	}
	&_btn {
		padding: 30rpx;
		font-size: 28rpx;
		width: 88rpx;
		box-sizing: border-box;
		color: $theme;
		border-left: 1rpx dashed #999;
		position: relative;
		$size: 20rpx;
		&::before, &::after {
			content: "";
			width: $size;
			height: $size;
			position: absolute;
			left: -$size / 2;
			background-color: $background;
			border-radius: 50%;
		}
		&::before {
			top: -$size / 2;
		}
		&::after {
			bottom: -$size / 2;
		}
		&.disabled {
			color: #b3b3b3;
		}
	}
}
</style>