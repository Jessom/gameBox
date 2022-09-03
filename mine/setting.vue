<template>
	<w-layout className="setting-page">
		<block v-for="(item, index) in list" :key="index">
			<u-cell-group class="u-m-b-20" :customStyle="{background: '#fff'}" :border="false">
				<block v-for="(it, idx) in item" :key="idx">
					<u-cell @click="onNavigator(it)" :isLink="!it.switch" :value="it.subtitle">
						<template slot="title">
							<text class="cell-title">{{it.title}}</text>
						</template>
						
						<template slot="right-icon" v-if="it.switch">
							<u-switch slot="right-icon" v-model="checked"></u-switch>
						</template>
					</u-cell>
				</block>
			</u-cell-group>
		</block>
		
		<u-cell-group class="u-m-b-20" :border="false" :customStyle="{background: '#fff'}">
			<u-cell @click="logout">
				<view slot="title" class="logout cell-title">退出登录</view>
			</u-cell>
		</u-cell-group>
	</w-layout>
</template>

<script>
export default {
	data() {
		let _push = uni.getStorageSync('__push')
		return {
			checked: _push === 0 ? false : true,
			list: [[
				{ title: '账号设置', url: '/mine/account', subtitle: '' }
			], [
				{ title: '消息通知', url: '', subtitle: '', switch: true }
			], [
				{ title: '意见反馈', url: '/mine/feedback', subtitle: '' },
				{ title: '关于我们', url: '/mine/about', subtitle: `版本1.0.0` },
			], [
				{ title: '隐私政策', url: '/mine/private', subtitle: '' },
				{ title: '用户协议', url: '/mine/argument', subtitle: '' },
			]]
		};
	},
	
	methods: {
		onNavigator(it) {
			if(it.url) {
				uni.navigateTo({
					url: it.url
				})
			} else if(it.switch) {
				uni.setStorageSync('__push', Number(this.checked))
			}
		},
		
		logout() {
			uni.showModal({
				title: '提示',
				content: '确定退出登录吗？',
				success: (e) => {
					if(e.confirm) {
						this.$store.commit('save', {
							userInfo: null,
							username: "",
							member_id: "",
							token: ""
						})
						uni.navigateBack()
					}
				}
			})
		}
	}
}
</script>

<style lang="scss">
.setting-page {
	.logout {
		text-align: center;
	}
}
</style>
