<template>
	<w-layout className="home-page">
		<w-card className="u-m-b-20">
			<template slot="header">
				<w-section title="礼包"></w-section>
			</template>
			<w-gift-cell
				image='https://static.app.985sy.com/attachment/syapp/logo/202206061654505967.jpg!icon_128?v=10'
				title="礼包"
				content="3倍经验药水*1、下品灵石*20、 上品灵石*5(每个账号限领一次)"
				time="2022-06-10 至 2025-05-06"
				code="abcd"
			></w-gift-cell>
		</w-card>
		
		<w-ticket-cell
			:style="{marginBottom: '20rpx'}"
			title="代金券"
			time="2022-03-10 ~ 2022-03-10"
			name="少年名将-送巅峰阵容"
			total="9999.00"
			price="9999.00"
			disabled
			over
		></w-ticket-cell>
		
		<w-card className="u-m-b-20">
			<template slot="header">
				<w-section title="热门游戏"></w-section>
			</template>
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
				:style="{marginBottom: '20rpx'}"
			/>
		</w-card>
		
		<w-card className="u-m-b-20">
			<template slot="header">
				<w-section title="精选游戏"></w-section>
			</template>
			<view class="game-item-list">
				<w-game-item
					v-for="item in games"
					:key="item.id"
					class="item"
					:image="item.image"
					:name="item.name"
					:classify="item.classify"
				/>
			</view>
		</w-card>
		
		<view class="head">
			<w-game-header
				:video="game.video"
				:poster="game.poster"
				:images="game.images"
			/>
		</view>
	</w-layout>
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
				game: {
					video: 'https://static.app.985sy.com/video/20220531104637.mp4',
					poster: 'https://static.app.985sy.com/video/20220531104637.mp4?x-oss-process=video/snapshot,t_200,w_800',
					images: [
						'https://static.app.985sy.com/attachment/android/images/2205/16539652141.jpg!gameDetail_new',
						'https://static.app.985sy.com/attachment/android/images/2205/16539652142.jpg!gameDetail_new',
						'https://static.app.985sy.com/attachment/android/images/2205/16539652143.jpg!gameDetail_new',
						'https://static.app.985sy.com/attachment/android/images/2205/16539652144.jpg!gameDetail_new',
						'https://static.app.985sy.com/attachment/android/images/2205/16539652145.jpg!gameDetail_new'
					]
				}
			};
		},
		
		
	}
</script>

<style lang="scss">
.home-page {
	padding: 20rpx;
}
.game-item-list {
	display: flex;
	flex-direction: row;
	.item {
		flex: 1;
		width: 100%;
	}
}
</style>
