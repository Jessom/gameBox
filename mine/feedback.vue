<template>
	<w-layout className="feedback-page">
		<u-cell-group class="u-m-b-20" :border="false" :customStyle="{background: '#fff'}">
			<u-cell :title="sys.deviceBrand || sys.deviceModel" :value="'v' + sys.appVersion"></u-cell>
		</u-cell-group>
		
		<u--form labelPosition="top" :model="form" :rules="rules" ref="form1" labelWidth="150" class="form">
			<u-form-item label="反馈类型" prop="type" borderBottom>
				<u-radio-group v-model="form.type">
					<u-radio 
						v-for="(item, index) in list" :key="index" 
						class="radio-item"
						:name="item.name"
						:label="item.name"
					></u-radio>
				</u-radio-group>
			</u-form-item>
			<u-form-item label="反馈内容" prop="content" borderBottom>
				<u--textarea v-model="form.content" confirmType="done" placeholder="请输入内容" ></u--textarea>
			</u-form-item>
		</u--form>
		<view class="up-box" style="background-color: #fff;">
			<u-upload
					:fileList="form.files"
					@afterRead="afterRead"
					@delete="deletePic"
					name="1"
					multiple
					:maxCount="9"
				></u-upload>
		</view>
		
		<view class="btn">
			<u-button text="提交" shape="circle" type="primary" @click="onSubmit" :disabled="!form.content || !form.type"></u-button>
		</view>
	</w-layout>
</template>

<script>
export default {
	data() {
		return {
			sys: uni.$u.sys(),
			form: {
				type: "",
				content: "",
				files: []
			},
			rules: {
				"type": {
					type: 'string',
					required: true,
					message: '请选择反馈类型',
					trigger: ['blur', 'change']
				},
				"content": {
					type: 'string',
					required: true,
					message: '请填写反馈内容',
					trigger: ['blur', 'change']
				}
			},
			list: [
				{ id: 1, name: '程序BUG' },
				{ id: 2, name: '功能建议' },
				{ id: 3, name: '内容建议' },
				{ id: 4, name: 'UI建议' },
				{ id: 5, name: '网络问题' },
				{ id: 6, name: '其他' },
			]
		};
	},
	
	methods: {
		// 删除图片
		deletePic(event) {
			this.form.files.splice(event.index, 1)
		},
		
		// 新增图片
		async afterRead(event) {
			// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
			let lists = [].concat(event.file)
			let fileListLen = this.form.files.length
			lists.map((item) => {
				this.form.files.push({
					...item,
					status: 'success',
					message: ''
				})
			})
		},
		
		onSubmit() {
			uni.showLoading({ mask: true })
			setTimeout(() => {
				uni.hideLoading()
				uni.showModal({
					title: '提示',
					content: '提交成功',
					showCancel: false,
					success() {
						uni.navigateBack()
					}
				})
			})
		}
	}
}
</script>

<style lang="scss">
.feedback-page {
	.form {
		background-color: #fff;
		.radio-item {
			padding: 15rpx 20rpx;
		}
	}
	.up-box {
		padding: 20rpx;
	}
	.btn {
		padding: 20rpx;
	}
}
</style>
