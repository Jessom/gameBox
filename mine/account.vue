<template>
	<w-layout className="account-page">
		<u-cell-group :customStyle="{background: '#fff'}">
			<u-cell title="头像" @click="onAvatar">
				<u-avatar slot="right-icon" size="50" :src="userInfo.icon_link"></u-avatar>
			</u-cell>
		</u-cell-group>
		
		<u-cell-group class="u-m-t-20" :customStyle="{background: '#fff'}">
			<u-cell title="账号" :value="userInfo.member_name"></u-cell>
			<u-cell title="昵称" :value="userInfo.nick_name" :isLink="true" @click="onNavigator('/mine/nickname')"></u-cell>
			<u-cell title="手机绑定" :value="userInfo.mobile" :isLink="true" @click="onNavigator('/mine/phone')"></u-cell>
		</u-cell-group>
		
		<u-cell-group class="u-m-t-20" :customStyle="{background: '#fff'}">
			<u-cell title="实名认证" :value="userInfo.identity_card | idcard" :isLink="!userInfo.identity_card" @click="onAuth('/mine/auth')"></u-cell>
			<u-cell title="登录密码" value="修改密码" :isLink="true" @click="onNavigator('/mine/password')"></u-cell>
			<u-cell title="账号管理" value="注销账号" :isLink="true" @click="onNavigator('/mine/destroyed')"></u-cell>
		</u-cell-group>
	</w-layout>
</template>

<script>
import { mapState } from 'vuex'
import { upload } from '@/common/utils.js'
import config from '@/common/config.js'
export default {
	data() {
		return {
		};
	},
	
	computed: {
		...mapState({
			userInfo: state => state.userInfo
		})
	},
	
	filters: {
		idcard(value) {
			if(!value) {
				return '去认证'
			}
			return value.replace(/^(.{3})(?:\d+)(.{4})$/,  "\$1*******\$2")
		}
	},
	
	methods: {
		onNavigator(url) {
			uni.navigateTo({
				url
			})
		},
		
		onAuth(url) {
			if(this.userInfo.identity_card) return
			
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
					try{
						upload(res.tempFilePaths[0])
					}catch(e){
						console.log(e);
					}
				}
			})
		}
	}
}
</script>

<style lang="scss">
.account-page {
	
}
</style>
