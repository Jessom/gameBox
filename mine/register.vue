<template>
	<w-login className="login-page">
		
		<u--form labelPosition="left" :model="form" ref="form" label-width="55" class="login-form">
			<u-form-item label="账号" prop="username" class="login-form-item">
				<u--input v-model="form.username" border="none" placeholder="请输入账号" class="login-form-input"></u--input>
			</u-form-item>
			
			<u-form-item label="密码" prop="password" class="login-form-item">
				<u--input v-model="form.password" type="password" border="none" placeholder="请输入密码" class="login-form-input"></u--input>
			</u-form-item>
		</u--form>
		
		<u-button type="primary" class="login-btn" :disabeld="!form.username && !form.password" @click="onSubmit" shape="circle">立即注册</u-button>
		
		<template slot="footer">
			<view class="login-footer">
				<text class="circle" :class="checked ? 'actived' : ''" @click="checked = !checked"></text>
				<text @click="checked = !checked">登录即代表您同意</text>
				<text class="text" @click="onNavigator('/mine/argument')">《用户协议》</text>
				<text class="text" @click="onNavigator('/mine/private')">《隐私政策》</text>
			</view>
		</template>
	</w-login>
</template>

<script>
import { register } from '@/common/apis/user.api.js'
import { getVerifyCode } from '@/common/apis/base.api.js'
export default {
	data() {
		return {
			tips: "",
			seconds: 60,
			checked: false,
			form: {
				username: '',
				password: ''
			}
		};
	},
	
	onNavigationBarButtonTap(e) {
		uni.navigateBack()
	},
	
	methods: {
		async onSubmit() {
			if(!this.validate(true)) return
			
			uni.showLoading({ title: '登录中...', mask: true })
			const res = await register({
				...this.form,
				regtype: 5
			})
			this.$store.commit('save', { 'token': res.data.token })
			await this.$store.dispatch('getMemberInfo', {
				member_id: res.data.user_id,
				username: res.data.username
			})
			uni.navigateBack({ delta: 3 })
		},
		validate() {
			const { username, password } = this.form
			if(!username) {
				uni.$u.toast('请输入账号')
				return false
			} else if(!password) {
				uni.$u.toast('请输入密码')
				return false
			} else if(!this.checked) {
				uni.$u.toast('请阅读并同意我们的条款')
				return false
			}
			
			return true
		}
	}
}
</script>

<style lang="scss">
.login-page {
	.login-tips {
		text-align: center;
		color: $u-tips-color;
		font-size: 32rpx;
	}
}
</style>
