<template>
	<div class="header-contain">
		<h1>信息网后台管理系统</h1>
		<p class="header-item">
			<span> {{ user.username }}</span>
			<span class="change-theme">
				<button @click="toggleTheme(1)" class="theme-button">白天</button>
				<button @click="toggleTheme(0)" class="theme-button">晚上</button>
			</span>
		</p>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
	computed: {
		...mapState({
			user: (state) => state.userStore.user,
		}),
	},
	methods: {
		toggleTheme(index) {
			window.document.documentElement.setAttribute(
				"data-theme",
				index ? "light" : "dark"
			);
		},
	},
};
</script>

<style lang="scss" scoped>
.header-contain {
	display: flex;
	justify-content: space-between;
	align-items: center;
	line-height: 50px;
	color: #fff;
	.header-item {
		width: 50%;
		text-align: right;
		cursor: pointer;
	}
	.change-theme {
		margin-left: 20px;
		cursor: pointer;
		font-size: 14px;
		.theme-button{
			margin-right: 10px;
			background: #fff;
			border: 0;
			outline: none;
		}
	}
}
</style>
