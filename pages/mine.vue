<template>
	<w-layout className="mine-page">
		<view class="mine-header u-border-bottom" @click="onNavigator({openType: 'navigator', url: '/mine/account'})">
			<view class="avatar">
				<u-avatar size="56" :src="userInfo ? userInfo.icon_link : ''"></u-avatar>
			</view>
			<view class="mine-meta">
				<view class="title"><text>{{ userInfo ? userInfo.nick_name : "点击登录" }}</text></view>
				<view class="subtitle" v-if="userInfo"><text>账号：{{ userInfo.member_name }}</text></view>
				<view class="subtitle" v-if="userInfo"><text>手机：{{ userInfo.mobile }}</text></view>
			</view>
			<u-icon name="arrow-right" size="24" color="rgba(0,0,0,0.2)"></u-icon>
		</view>
		
		<block v-for="(item, index) in list" :key="index">
			<u-cell-group class="u-m-t-20" :customStyle="{background: '#fff'}" :border="false">
				<block v-for="(it, idx) in item" :key="idx">
					<u-cell @click="onNavigator(it)" :isLink="true">
						<template slot="icon">
							<text class="iconfont u-m-r-20 cell-icon" :style="{color: it.color}" :class="it.icon"></text>
						</template>
						<template slot="title">
							<text class="cell-title">{{it.title}}</text>
						</template>
					</u-cell>
				</block>
			</u-cell-group>
		</block>
	</w-layout>
</template>

<script>
import { mapState } from 'vuex'
export default {
	data() {
		return {
			list: [[
				{ title: '我的礼包', color: "#3082ff", icon: 'icon-gift', url: '/pages/message', openType: 'switchTab' },
				{ title: '我的代金券', color: "#00b853", icon: 'icon-dollar', url: '/mine/tickets', openType: 'navigator' },
				{ title: '我的收藏', color: "#fb8c2a", icon: 'icon-like', url: '/mine/collection', openType: 'navigator' },
			], [
				{ title: '意见反馈', color: "#ff6f69", icon: 'icon-edit', url: '/mine/feedback', openType: 'navigator' },
				{ title: '联系客服', color: "#ffac00", icon: 'icon-headset', url: '/pages/message', openType: 'switchTab' },
			], [
				{ title: '设置', color: "#1ba7ff", icon: 'icon-cog', url: '/mine/setting', openType: 'navigator' }
			]]
		};
	},
	
	computed: {
		...mapState({
			userInfo: state => state.userInfo
		})
	},
	
	methods: {
		onNavigator(it) {
			switch (it.openType){
				case "navigator":
					uni.navigateTo({
						url: it.url
					})
					break;
				case "switchTab":
					uni.switchTab({
						url: it.url
					})
					break;
				default:
					uni.navigateTo({
						url: it.url
					})
					break;
			}
		}
	}
}
</script>

<style lang="scss">
.mine-page {
	height: 100vh;
	background-color: $background;
	.mine-header {
		padding: 50rpx 20rpx;
		background-color: #fff;
		display: flex;
		flex-direction: row;
		align-items: center;
		.avatar {
			width: 56px;
			height: 56px;
			border-radius: 50%;
		}
		.mine-meta {
			flex: 1;
			padding-left: 30rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			.title {
				font-size: 38rpx;
				color: $u-main-color;
				font-weight: 600;
			}
			.subtitle {
				font-size: 28rpx;
				margin-top: 8rpx;
				color: $u-tips-color;
			}
		}
	}
}
</style>
