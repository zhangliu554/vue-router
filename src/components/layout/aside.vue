<template>
	<div>
		<el-menu
			default-active="0"
			class="el-menu-vertical-demo"
			text-color="#fff"
			background-color="#333"
			active-text-color="#fff"
		>
			<el-menu-item
				index="index"
				v-for="(item, index) in menuTree"
				:key="index"
				class="menu-item"
				@click="clickRouter(item)"
			>
				<svg class="iconfont icon-svg" aria-hidden="true">
					<use :xlink:href="`#${item.icon}`"></use>
				</svg>
				<span slot="title">{{ item.name }}</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
	computed: {
		...mapState({
			menuTree: (state) => state.userStore.menuTree,
		}),
	},
	methods: {
		// 跳转路由
		clickRouter(route) {
			this.$router.push({ path: route.url });
		},
	},
};
</script>

<style lang="scss" scoped>
.icon-svg {
	margin-right: 5px;
	width: 25px;
	height: 25px;
	fill: #fff;
}
.el-menu-item {
	padding: 5px;
	height: 50px;
	line-height: 50px;
}
</style>
