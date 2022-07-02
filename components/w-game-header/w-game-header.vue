<template>
	<view class="w-game-header">
		<scroll-view scroll-x="true" class="w-game-header_inner">
			<view class="video-box" v-if="video">
				<video 
					class="item video"
					:controls="true"
					:poster="poster"
					:src="video"
				/>
			</view>
			<view class="video-box" v-else @click="preview(poster)">
				<u--image
					:showLoading="true"
					:lazyLoad="true"
					:src="poster" 
					width="600rpx"
					height="360rpx"
				/>
			</view>
			
			<block v-for="(item, index) in images" :key="index">
				<view class="image-box" @click="preview(item)">
					<u--image 
						class="image"
						:showLoading="true" 
						:src="item" 
						width="210rpx"
						height="360rpx"
						:lazyLoad="true"
						:style="{borderRadius: '14rpx'}"
					/>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
import props from './props.js'
/**
 * 
 */
export default {
	name:"w-game-header",
	props,
	methods: {
		preview(url) {
			let urls = []
			if(!this.video) {
				urls = [
					this.poster,
					...this.images
				]
			} else {
				urls = this.images
			}
			
			uni.previewImage({
				current: url,
				urls: urls
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.w-game-header {
	&_inner {
		white-space: nowrap;
	}
	.video-box, .image-box {
		display: inline-block;
		border-radius: 14rpx;
		overflow: hidden;
		height: 360rpx;
	}
	.video-box {
		width: 600rpx;
		.video {
			width: 600rpx;
			height: 360rpx;
		}
	}
	.image-box {
		width: 210rpx;
		margin-left: 20rpx;
	}
}
</style>