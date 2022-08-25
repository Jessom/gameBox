<template>
	<view class="message-page">
		<block v-for="item in 6" :key="item">
			<w-message-cell
				class="u-m-b-20"
				image="https://static.app.985sy.com/attachment/syapp/logo/202206061654505967.jpg!icon_128?v=10"
				name="少年名将-送巅峰阵容"
				account="watasi"
				password="123456"
				time="2022-07-02 12:32"
				:gifts='[
					{ packname: "独家礼包2（社区礼包）", giftCode: "VIP003" },
					{ packname: "独家礼包1（入群礼包）", giftCode: "VIP002" },
					{ packname: "至尊礼包", giftCode: "ZZ999" },
				]'
			></w-message-cell>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.message-page {
	padding: 0 20rpx;
}
</style>
