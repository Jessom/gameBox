<template>
	<w-login className="login-page">
		
		<u--form labelPosition="left" :model="form" ref="form" label-width="50" class="login-form">
			<u-form-item label="+86" prop="tel" class="login-form-item">
				<u--input v-model="form.tel" type="number" maxlength="11" border="none" placeholder="请输入手机号" class="login-form-input"></u--input>
			</u-form-item>
			
			<u-form-item label="验证码" prop="code" class="login-form-item">
				<u--input v-model="form.code" type="number" border="none" placeholder="请输入验证码" class="login-form-input"></u--input>
				<u-button slot="right" type="primary" size="mini" @tap="getCode">{{tips}}</u-button>
			</u-form-item>
		</u--form>
		
		<u-button type="primary" class="login-btn" shape="circle">登录</u-button>
		
		<template slot="footer">
			<view class="login-footer" @click="checked = !checked">
				<text class="circle" :class="checked ? 'actived' : ''"></text>
				<text>登录即代表您同意</text>
				<text class="text">《用户协议》</text>
				<text class="text">《隐私政策》</text>
			</view>
		</template>
		
		<u-code :seconds="seconds" @end="end" @start="start" ref="uCode" @change="codeChange"></u-code>
	</w-login>
</template>

<script>
export default {
	data() {
		return {
			tips: "",
			seconds: 60,
			checked: false,
			form: {
				tel: '',
				code: ''
			}
		};
	},
	
	onNavigationBarButtonTap(e) {
		uni.navigateBack()
	},
	
	methods: {
		codeChange(text) {
			this.tips = text;
		},
		getCode() {
			if(this.$refs.uCode.canGetCode) {
				// 模拟向后端请求验证码
				uni.showLoading({
					title: '正在获取验证码'
				})
				setTimeout(() => {
					uni.hideLoading();
					// 这里此提示会被this.start()方法中的提示覆盖
					uni.$u.toast('验证码已发送');
					// 通知验证码组件内部开始倒计时
					this.$refs.uCode.start();
				}, 2000);
			} else {
				// uni.$u.toast('倒计时结束后再发送');
			}
		},
		end() {
			uni.$u.toast('倒计时结束');
		},
		start() {
			uni.$u.toast('倒计时开始');
		}
	}
}
</script>

<style lang="scss">
.login-page {
	
}
</style>
