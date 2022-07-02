<template>
	<view class="w-section">
		<text class="text">{{ title }}</text>
		
		<view class="btn" v-if="more" @click="$emit('click', null)">
			<text>{{ subtitle }}</text>
			<u-icon name="arrow-right" color="#999" size="12"></u-icon>
		</view>
	</view>
</template>

<script>
export default {
	name:"w-section",
	props: {
		title: {
			type: String
		},
		
		more: {
			type: Boolean,
			default: true
		},
		
		subtitle: {
			type: String,
			default: '更多'
		}
	},
}
</script>

<style lang="scss" scoped>
.w-section {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	.text {
		font-size: 36rpx;
		font-weight: bold;
		color: #282828;
	}
	.btn {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
		font-size: 28rpx;
		color: #999;
		text-align: right;
		line-height: 48rpx;
	}
}
</style>