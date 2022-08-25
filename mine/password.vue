<template>
	<view class="auth-page">
		<u--form :model="form" label-width="80" ref="form1">
			<u-form-item label="旧密码" prop="opwd" borderBottom style="background-color: #fff; padding: 0 20rpx">
				<u--input v-model="form.opwd" type="password" border="none" placeholder="请输入旧密码"></u--input>
			</u-form-item>
			<u-form-item label="新密码" prop="pwd" borderBottom style="background-color: #fff; padding: 0 20rpx">
				<u--input v-model="form.pwd" type="password" border="none" placeholder="请输入新密码"></u--input>
			</u-form-item>
			<u-form-item label="确认密码" prop="npwd" borderBottom style="background-color: #fff; padding: 0 20rpx">
				<u--input v-model="form.npwd" type="password" border="none" placeholder="请确认密码"></u--input>
			</u-form-item>
		</u--form>
		
		<view class="foot-btn">
			<u-button type="primary" shape="circle" :disabled="!form.opwd || !form.pwd || !form.npwd" text="保存" @click="onSubmit"></u-button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			form: {
				opwd: "",
				pwd: "",
				npwd: ""
			}
		};
	},
	
	methods: {
		onSubmit() {
			
		}
	}
}
</script>

<style lang="scss">
.auth-page {}
</style>
