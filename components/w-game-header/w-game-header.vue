<template>
	<view class="w-game-header">
		<scroll-view scroll-x="true" class="w-game-header_inner">
			<!-- #ifdef H5 -->
			<view class="w-game-header_inner">
			<!-- #endif -->
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
							:style="{borderRadius: '14rpx'}"
						/>
					</view>
				</block>
			<!-- #ifdef H5 -->
			</view>
			<!-- #endif -->
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
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.video-box, .image-box {
		display: inline-block;
		border-radius: 14rpx;
		overflow: hidden;
		height: 360rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.video-box {
		width: 600rpx;
		.video {
			width: 600rpx;
		}
	}
	.image-box {
		width: 210rpx;
		margin-left: 20rpx;
	}
}
</style>