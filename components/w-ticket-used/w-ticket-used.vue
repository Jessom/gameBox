<template>
	<u-popup :show="showModal" mode="center" round="20rpx" class="w-ticket-used" @close="$emit('close', null)">
		<view class="title">使用方法</view>
		<view class="content">
			<view class="text">可用范围：仅限《{{info.game_name}}》</view>
			<view class="text">有效期：{{$u.timeFormat(info.start_time, 'yyyy-mm-dd')}} ~ {{$u.timeFormat(info.end_time, 'yyyy-mm-dd')}}</view>
			<view class="text">使用条件：满{{info.meet_amount}}元可用</view>
			<view class="text">使用方法：</view>
			<view class="text">1.使用App账号登录游戏；</view>
			<view class="text">2.在游戏内购买道具；</view>
			<view class="text">3.在支付页面选择可用的优惠券，完成支付。</view>
			<view class="text">使用说明：</view>
			<view class="text">1.无门槛代金券为一次性消耗代金券，未使用部分不支持补差价。</view>
		</view>
		<view class="footer">
			<u-button @click="showModal = false" type="primary">知道了</u-button>
		</view>
	</u-popup>
</template>

<script>
export default {
	name:"w-ticket-used",
	data() {
		return {
			info: {},
			showModal: false
		};
	},
	
	methods: {
		show(info) {
			this.info = info
			this.showModal = true
		}
	}
}
</script>

<style lang="scss" scoped>
.w-ticket-used {
	.title {
		height: 88rpx;
		line-height: 88rpx;
		text-align: center;
		font-size: 40rpx;
	}
	.content {
		width: 600rpx;
		padding: 0 30rpx 30rpx;
		.text {
			color: #636363;
			line-height: 1.8;
			font-size: 32rpx;
		}
	}
}
</style>