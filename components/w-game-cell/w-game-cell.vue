<template>
	<view class="w-game-cell" @click="$emit('click', null)">
		<u--image 
			class="w-game-cell_image"
			v-if="image"
			:showLoading="true" 
			:src="image" 
			:width="`${imageSize}rpx`" 
			:height="`${imageSize}rpx`"
		/>
		<view class="w-game-cell_meta">
			<view class="title" v-if="name">
				<text class="label" v-if="label">{{ label }}</text>
				<text class="name">{{ name }}</text>
			</view>
			<view class="u-line-1" v-if="classify">
				<text class="classify">{{ classify }}</text>
			</view>
			<view class="describe" v-if="describe.length">
				<block v-for="(item, index) in describe" :key="index">
					<text class="item" :class="`item${index}`">{{ item }}</text>
				</block>
			</view>
			<view class="bottom" :class="{'purple': bottomType != 1}" v-if="bottomLabel">
				<text class="blabel">{{ bottomLabel }}</text>
				<text class="content">{{ bottomContent }}</text>
			</view>
		</view>
	</view>
</template>

<script>
import props from './props.js';
/**
 * 游戏条状列表
 * @property {String} 			image 			游戏logo，不传则不显示
 * @property {String | Number} 	imageSize 		logo图片大小(正方形)，默认140
 * @property {String} 			name 			游戏名称，不传不显示
 * @property {String} 			label 			标题右侧tag，不传不显示
 * @property {String} 			classify 		游戏分类，不传不显示
 * @property {Array} 			describe 		游戏描述，不传不显示
 * @property {Array} 			bottomLabel 	
 * @property {Array} 			bottomContent 	
 * @property {Array} 			bottomType 		
 * @event    {Function}			click			点击组件时触发
 */
export default {
	name:"w-game-cell",
	props,
	data() {
		return {
			
		};
	}
}
</script>

<style lang="scss" scoped>
.w-game-cell {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	&_image {
		margin-right: 20rpx;
	}
	&_meta {
		flex: 1;
		width: 100%;
		.name, .classify, .describe {
			line-height: 42rpx;
		}
		.title {
			display: flex;
			flex-direction: row;
			align-items: center;
		}
		.label {
			font-size: 12px;
			border-radius: 3px;
			margin-right: 5px;
			background-image: linear-gradient(90deg,#eebe75,#ffe7bd);
			color: #956528;
			padding: 2rpx 10rpx;
		}
		.name {
			font-weight: 700;
			font-size: 30rpx;
			color: #282828;
		}
		.classify {
			font-size: 24rpx;
			color: #999;
		}
		.describe {
			display: flex;
			flex-direction: row;
			align-items: center;
			.item {
				font-size: 24rpx;
				margin-right: 5px;
				&.item0 { color: #ff4200; }
				&.item1 { color: #75d100; }
				&.item2 { color: #2893ff; }
			}
		}
		.bottom {
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-top: 4px;
			.blabel, .content {
				font-size: 24rpx;
			}
			.blabel {
				padding: 1px 3px;
				color: #fff;
				border-radius: 3px;
				background-color: rgb(255, 140, 80);
			}
			.content {
				color: rgb(255, 140, 80);
				border: 1px solid;
				border-color: rgb(255, 140, 80);
				border-top-right-radius: 3px;
				border-bottom-right-radius: 3px;
				padding: 0 5px;
				margin-left: -2px;
			}
			&.purple {
				.blabel {
					background-color: rgb(159, 157, 252);
				}
				.content {
					color: rgb(159, 157, 252);
					border-color: rgb(159, 157, 252);
				}
			}
		}
	}
}
</style>