<template>
	<view class="w-search-box" :style="{
		paddingTop: statusBarHeight + 'px', 
		height: statusBarHeight + 44 + 'px', 
		paddingRight: width + 20 + 'px',
		backgroundColor: bgColor
	}">
		<!-- 返回按钮 -->
		<!-- <view class="back-btn" v-if="isBack" @click="onBack">
			<u-icon name="arrow-left" color="#fff" size="42"></u-icon>
		</view> -->
		<view class="back-btn" v-if="isBack"></view>
		
		<!-- 搜索框 -->
		<view class="search-box" @click="$emit('click', null)">
			<u-search
				height="30"
				v-model="keyword"
				searchIconSize="20"
				placeholder="热门游戏"
				@change="$emit('change', keyword)"
				:showAction="false"
				:disabled="disabled"
				bgColor="rgba(242, 242, 242, 0.6)"
				:inputStyle="{backgroundColor: 'transparent'}"
			></u-search>
		</view>
	</view>
</template>

<script>
import props from './props.js'
export default {
	name:"w-search-box",
	props,
	data() {
		// #ifdef MP
		const { statusBarHeight } = uni.$u.sys()
		const { width } = uni.getMenuButtonBoundingClientRect()
		// #endif
		
		// #ifndef MP
		const statusBarHeight = 0
		const width = 0
		// #endif
		return {
			statusBarHeight: statusBarHeight,
			width: width,
			keyword: ''
		};
	},
	
	methods: {
		onBack() {
			uni.navigateBack()
		}
	}
}
</script>

<style lang="scss" scoped>
.w-search-box {
	box-sizing: border-box;
	display: flex;
	align-items: center;
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	z-index: 6;
	.back-btn {
		width: 44px;
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.search-box {
		flex: 1;
	}
}
</style>