<template>
	<w-login className="login-page">
		
		<u--form labelPosition="left" :model="form" ref="form" label-width="55" class="login-form">
			<u-form-item label="+86" prop="mobile" class="login-form-item">
				<u--input v-model="form.mobile" type="number" maxlength="11" border="none" placeholder="请输入手机号" class="login-form-input"></u--input>
			</u-form-item>
			
			<u-form-item label="验证码" prop="code" class="login-form-item">
				<u--input v-model="form.code" type="number" maxlength="6" border="none" placeholder="请输入验证码" class="login-form-input"></u--input>
				<u-button slot="right" type="primary" size="mini" @tap="getCode">{{tips}}</u-button>
			</u-form-item>
		</u--form>
		
		<view class="login-tips">未注册的用户可直接注册登录</view>
		
		<u-button type="primary" class="login-btn" :disabeld="!form.mobile && !form.code" @click="onSubmit" shape="circle">登录</u-button>
		
		<view class="login-small-btn" @click="onNavigator('/mine/pwdlogin')">密码登录</view>
		
		<template slot="footer">
			<view class="login-footer">
				<text class="circle" :class="checked ? 'actived' : ''" @click="checked = !checked"></text>
				<text @click="checked = !checked">登录即代表您同意</text>
				<text class="text" @click="onNavigator('/mine/argument')">《用户协议》</text>
				<text class="text" @click="onNavigator('/mine/private')">《隐私政策》</text>
			</view>
		</template>
		
		<u-code :seconds="seconds" ref="uCode" @change="codeChange"></u-code>
	</w-login>
</template>

<script>
import { smsLogin } from '@/common/apis/mine.api.js'
import { getVerifyCode } from '@/common/apis/base.api.js'
export default {
	data() {
		return {
			tips: "",
			seconds: 60,
			checked: false,
			form: {
				mobile: '',
				code: ''
			}
		};
	},
	
	onNavigationBarButtonTap(e) {
		uni.navigateBack()
	},
	
	methods: {
		onNavigator(url) {
			uni.navigateTo({
				url
			})
		},
		async onSubmit() {
			if(!this.validate(true)) return
			
			uni.showLoading({ title: '登录中...', mask: true })
			const res = await smsLogin(this.form)
			this.$store.commit('save', { 'token': res.data.token })
			await this.$store.dispatch('getMemberInfo', {
				member_id: res.data.user_id,
				username: res.data.username
			})
			uni.navigateBack()
		},
		codeChange(text) {
			this.tips = text;
		},
		validate(getCode = false) {
			const { mobile, code } = this.form
			if(!mobile || !uni.$u.test.mobile(mobile)) {
				uni.$u.toast('手机号格式不正确')
				return false
			} else if(getCode && (!code || !uni.$u.test.code(code, 6))) {
				uni.$u.toast('请输入验证码')
				return false
			} else if(getCode && !this.checked) {
				uni.$u.toast('请阅读并同意我们的条款')
				return false
			}
			
			return true
		},
		async getCode() {
			if(this.$refs.uCode.canGetCode && this.validate(false)) {
				uni.showLoading({ title: '正在获取验证码', mask: true })
				const { mobile, code } = this.form
				const res = await getVerifyCode({
					code: 'code',
					mobile: `86-${mobile}`,
					type: '08'
				})
				uni.hideLoading()
				this.$refs.uCode.start()
			}
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
