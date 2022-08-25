<template>
	<view class="nickname-page">
		<u--form :model="form" ref="form1">
			<u-form-item prop="nickname" borderBottom style="background-color: #fff; padding: 0 20rpx">
				<u--input v-model="form.nickname" border="none" placeholder="请输入昵称" :focus="true"></u--input>
			</u-form-item>
		</u--form>
		
		<view class="foot-btn">
			<u-button type="primary" shape="circle" :disabled="!form.nickname" text="保存" @click="onSubmit"></u-button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			form: {
				nickname: ""
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
.nickname-page {}
</style>
