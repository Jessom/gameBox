<template>
	<w-layout className="account-page">
		<u-cell-group :customStyle="{background: '#fff'}">
			<u-cell title="头像" @click="onAvatar">
				<u-avatar slot="right-icon" size="50" :src="avatar"></u-avatar>
			</u-cell>
		</u-cell-group>
		
		<u-cell-group class="u-m-t-20" :customStyle="{background: '#fff'}">
			<u-cell title="账号" value="1521235646"></u-cell>
			<u-cell title="昵称" value="张三" :isLink="true" @click="onNavigator('/mine/nickname')"></u-cell>
			<u-cell title="手机绑定" value="153****9847" :isLink="true" @click="onNavigator('/mine/phone')"></u-cell>
		</u-cell-group>
		
		<u-cell-group class="u-m-t-20" :customStyle="{background: '#fff'}">
			<u-cell title="实名认证" value="去认证" :isLink="true" @click="onNavigator('/mine/auth')"></u-cell>
			<u-cell title="登录密码" value="修改密码" :isLink="true" @click="onNavigator('/mine/password')"></u-cell>
			<u-cell title="账号管理" value="注销账号" :isLink="true" @click="onNavigator('/mine/destroyed')"></u-cell>
		</u-cell-group>
		
		<view class="btn">
			<u-button type="primary" shape="circle" @click="logout" text="退出登录"></u-button>
		</view>
	</w-layout>
</template>

<script>
export default {
	data() {
		return {
			avatar: ''
		};
	},
	
	methods: {
		onNavigator(url) {
			uni.navigateTo({
				url
			})
		},
		
		onAvatar() {
			uni.chooseImage({
				count: 1,
				crop: {
					width: 150,
					height: 150
				},
				success: res => {
					console.log(res);
					this.avatar = res.tempFilePaths[0]
				}
			})
		},
		
		logout() {
			uni.showModal({
				title: '提示',
				content: '确定退出登录吗？',
				success(e) {
					if(e.confirm) {
						
					}
				}
			})
		}
	}
}
</script>

<style lang="scss">
.account-page {
	.btn {
		padding: 20rpx;
		margin-top: 50rpx;
	}
}
</style>
