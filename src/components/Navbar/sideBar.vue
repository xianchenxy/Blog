<script lang="ts" setup>
import {PropType, ref} from 'vue';
import {InavItem} from './types';

const props = defineProps({
	title: String,
	openDrawer: Boolean,
	sideBarItem: Array as PropType<InavItem[]>
});
const emits = defineEmits(['update:openDrawer']);

// drawer
const direction = ref('ttb');
const size = ref('18%');
const updateDrawerStatus = (status: any): void => {
	emits('update:openDrawer', !!status);
};

// tabs
const tabs_activeName = ref('Home');
</script>

<template>
	<el-drawer :modelValue="openDrawer"
			   :size="size"
			   :direction="direction"
			   :lock-scroll="false"
			   :show-close="false"
			   modal-class="drawer_modal"
			   class="drawer_body"
			   @close="updateDrawerStatus"
	>
		<template #header>
			<div style="text-align: center; height: 47px">
				<span style="font-size: 1.4rem; font-weight: 600">{{ title }}</span>
			</div>
		</template>

		<el-tabs v-model="tabs_activeName">
			<el-tab-pane v-for="item in sideBarItem"
						 :name="item.name" :key="item.name"
			>
				<template #label>
					<router-link :key="item.name" :to="item.url" @click.prevent>
						<span style="font-size: 0.95rem; font-weight: 700; user-select: none">{{ item.name }}</span>
					</router-link>
				</template>
			</el-tab-pane>
		</el-tabs>
	</el-drawer>
</template>

<style scoped lang="scss">
a {
	height: 100%;
	line-height: 40px;
}
</style>
