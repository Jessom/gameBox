<template>
	<view class="nickname-page">
		<u--form :model="form" label-width="60" ref="form1">
			<u-form-item label="手机号" prop="phone" borderBottom style="background-color: #fff; padding: 0 20rpx">
				<u--input v-model="form.phone" border="none" placeholder="请输153****9847手机号"></u--input>
			</u-form-item>
			<u-form-item label="验证码" prop="code" borderBottom style="background-color: #fff; padding: 0 20rpx">
				<u--input v-model="form.code" border="none" placeholder="请输验证码"></u--input>
				<u-button @tap="getCode" slot="right" size="mini">{{tips}}</u-button>
			</u-form-item>
		</u--form>
		
		<view class="foot-btn">
			<u-button type="primary" shape="circle" :disabled="!form.phone || !form.code" text="下一步" @click="onSubmit"></u-button>
		</view>
		
		<u-code :seconds="seconds" @end="end" @start="start" ref="uCode" @change="codeChange"></u-code>
	</view>
</template>

<script>
export default {
	data() {
		return {
			form: {
				phone: "",
				code: ""
			},
			tips: '',
			seconds: 10,
		};
	},
	
	methods: {
		onSubmit() {
			uni.redirectTo({
				url: '/mine/nPhone'
			})
		},
		
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
			
		},
		start() {
			
		}
	}
}
</script>

<style lang="scss">
.nickname-page {}
</style>
