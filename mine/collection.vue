<template>
	<view class="collection-page">
		<w-game-cell
			v-for="item in games"
			:key="item.id"
			:image="item.image"
			:name="item.name"
			:label="item.label"
			:classify="item.classify"
			:describe="item.desc"
			:bottomLabel="item.bottomLabel"
			:bottomContent="item.bottomContent"
			:bottomType="item.bottomType"
			imageSize="160"
			:style="{marginBottom: '20rpx', backgroundColor: '#fff', padding: '20rpx', borderRadius: '10rpx'}"
		/>
	</view>
</template>

<script>
export default {
	data() {
		return {
			games: [{
				id: 1,
				image: 'https://static.app.985sy.com/attachment/syapp/logo/202206061654505967.jpg!icon_128?v=10',
				name: '修真世界-真地藏养龙',
				classify: '角色 仙侠',
				label: '爆款',
				desc: ['送V12', '领地藏红包', '赠每日保送千充'],
				bottomContent: '新游热度NO.3',
				bottomLabel: '荐',
				bottomType: 2
			}, {
				id: 2,
				image: 'https://static.app.985sy.com/attachment/syapp/logo/202205101652179079.jpg!icon_128?v=10',
				name: '苍之纪元-免费刷十万充',
				classify: '卡牌 二次元',
				label: '重磅大作',
				desc: ['送V12', '领专属神器', '赠特权豪礼']
			}, {
				id: 3,
				image: 'https://static.app.985sy.com/attachment/syapp/logo/202201251643095651.jpg!icon_128?v=10',
				name: '天天狙击-开局GM剑',
				classify: '放置 武侠',
				desc: ['送V12', '领金叶子99999', '赠翡翠18888'],
				bottomLabel: '赚',
				bottomContent: '10倍返利',
				bottomType: 1
			}, {
				id: 4,
				image: 'https://static.app.985sy.com/attachment/syapp/logo/202206061654508652.jpg!icon_128?v=10',
				name: '幻境觉醒-任选满星万充',
				classify: '卡牌 二次元',
				desc: ['送满V', '领10W钻石', '赠2880W金币']
			}],
		};
	}
}
</script>

<style lang="scss">
.collection-page {
	padding: 0 20rpx;
}
</style>
