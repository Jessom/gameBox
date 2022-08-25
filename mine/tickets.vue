<template>
	<view class="tickets-page">
		<u-navbar bgColor="transparent" :autoBack="true">
			<template slot="center">
				<u-tabs :list="tabs" :current="current" @click="onTab"></u-tabs>
			</template>
		</u-navbar>
		
		<view v-for="item in 5" :key="item">
			<w-ticket-cell
				className="u-m-t-20 u-m-b-20"
				title="代金券"
				time="2022-03-10 ~ 2022-03-10"
				name="少年名将-送巅峰阵容"
				total="9999.00"
				price="9999.00"
				over
			></w-ticket-cell>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			current: 0,
			tabs: [
				{ name: '可使用' },
				{ name: '已使用' },
				{ name: '已过期' },
			]
		};
	},
	
	methods: {
		onTab(e) {
			this.current = e.index
		}
	}
}
</script>

<style lang="scss">
.tickets-page {
	padding-top: calc(var(--status-bar-height) + 44px);
	padding-left: 20rpx;
	padding-right: 20rpx;
}
</style>
