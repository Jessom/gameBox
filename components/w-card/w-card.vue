<template>
	<view class="w-card" :class="className">
		<view class="w-card_header" v-if="$slots.header">
			<slot name="header"></slot>
		</view>
		
		<view class="w-card_body" :class="[$slots.header ? '' : 'body-pt', $slots.footer ? '' : 'body-pb']">
			<slot></slot>
		</view>
		
		<view class="w-card_footer" v-if="$slots.footer">
			<slot name="footer"></slot>
		</view>
	</view>
</template>

<script>
export default {
	name:"w-card",
	props: {
		className: {
			type: String
		}
	},
	data() {
		return {
			
		};
	}
}
</script>

<style lang="scss" scoped>
.w-card {
	border-radius: 20rpx;
	background-color: #fff;
	&_header {
		padding: 20rpx;
	}
	&_body {
		padding: 0 20rpx;
		&.body-pb {
			padding-bottom: 20rpx;
		}
		&.body-pt {
			padding-top: 20rpx;
		}
	}
	&_footer {
		padding: 20rpx;
	}
}
</style>