<template>
	<w-layout className="argument-page">
		<web-view :src="src"></web-view>
	</w-layout>
</template>

<script>
import config from '@/common/config.js'
export default {
	data() {
		return {
			src: config.argumentUrl
		};
	}
}
</script>

<style lang="scss">
.argument-page {
	background-color: #fff;
}
</style>
