<template>
	<view class="auth-page">
		<u--form :model="form" label-width="80" ref="form1">
			<u-form-item label="真实姓名" prop="name" borderBottom style="background-color: #fff; padding: 0 20rpx">
				<u--input v-model="form.name" border="none" placeholder="请输入姓名"></u--input>
			</u-form-item>
			<u-form-item label="身份证号" prop="code" borderBottom style="background-color: #fff; padding: 0 20rpx">
				<u--input v-model="form.code" type="idcard" border="none" placeholder="请输入身份证号"></u--input>
			</u-form-item>
		</u--form>
		
		<view class="foot-btn">
			<u-button type="primary" shape="circle" :disabled="!form.name || !form.code" text="立即认证" @click="onSubmit"></u-button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			form: {
				name: "",
				code: ""
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
