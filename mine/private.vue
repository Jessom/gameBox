<template>
	<w-layout className="private-page">
		<web-view :src="src"></web-view>
	</w-layout>
</template>

<script>
import config from '@/common/config.js'
export default {
	data() {
		return {
			src: config.privateUrl
		};
	}
}
</script>

<style lang="scss">
.private-page {
	background-color: #fff;
}
</style>
