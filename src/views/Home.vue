<script lang="ts" setup>
import {ref} from 'vue';
// 维护一个user对象，存储用户基本信息
// 后期由用户导入或从default_demo中获取
import user from '@DataConfig/user.json';
import Avatar from '../components/Avatar/index.vue';

// 利用import获取打包文件的动态地址，直接
import avatarPath from '../assets/avatar.jpg';

const avatar_size = ref('300px');
</script>

<template>
	<div class="home">
		<div class="avatar">
			<Avatar :src="avatarPath" :size="avatar_size"></Avatar>
		</div>

		<!-- 用户信息展示 -->
		<div class="user_info">
			<h1>{{ user.name }}</h1>
			<h4>{{ user.description }}</h4>
			<p>{{ user.motto }}</p>
		</div>
	</div>
</template>

<style scoped lang="scss">
.home {
	height: calc(100vh - 64px);
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	// align-items: center; // 交叉轴自动变为space-evenly分布
	align-content: center;

	.avatar {
		width: 100%;
	}

	.user_info {
		width: 100%;
		margin-top: 40px;
		height: 170px;

		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		flex-wrap: wrap;

		h1 {
			font-size: 2rem;
		}

		h4 {
			opacity: 0.7;
		}

		p {
			opacity: 0.5;
		}
	}
}
</style>
