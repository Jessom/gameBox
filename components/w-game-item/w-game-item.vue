<template>
	<view class="w-game-item" @click="$emit('click', null)">
		<u--image 
			class="w-game-item_image"
			v-if="image"
			:showLoading="true" 
			:src="image" 
			:width="`${imageSize}rpx`" 
			:height="`${imageSize}rpx`"
		/>
		<view class="w-game-item_meta">
			<view class="" v-if="name">
				<text class="name u-line-1">{{ name }}</text>
			</view>
			<view class="u-line-1" v-if="classify">
				<text class="classify">{{ classify }}</text>
			</view>
		</view>
	</view>
</template>

<script>
import props from './props.js';
/**
 * 游戏条状列表
 * @property {String} 			image 		游戏logo，不传则不显示
 * @property {String | Number} 	imageSize 	logo图片大小(正方形)，默认143
 * @property {String} 			name 		游戏名称，不传不显示
 * @property {String} 			classify 	游戏分类，不传不显示
 * @event    {Function}			click		点击组件时触发
 */
export default {
	name:"w-game-item",
	props,
	data() {
		return {
			
		};
	}
}
</script>

<style lang="scss" scoped>
.w-game-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	&_image {
		
	}
	&_meta {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.name, .classify {
			line-height: 32rpx;
		}
		.name {
			font-weight: 700;
			font-size: 26rpx;
			color: #282828;
			margin-top: 5px;
		}
		.classify {
			font-size: 24rpx;
			color: #999;
		}
	}
}
</style>