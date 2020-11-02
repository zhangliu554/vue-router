<template>
	<el-container>
		<el-header><Header /></el-header>
		<el-container>
			<el-aside><Aside /></el-aside>
			<el-main>
				<div class="main-breadcrumb clearfix" v-if="!noHasBreadcrumb">
					<Breadcrum class="breadcrumb" />
				</div>
				<div class="main-contain">
					<router-view></router-view>
				</div>
			</el-main>
		</el-container>
	</el-container>
</template>
<script>
import Header from "./header";
import Aside from "./aside";
import Breadcrum from "./breadcrum";
import { mapState } from "vuex";
export default {
	name: "index-page",
	components: {
		Header,
		Aside,
		Breadcrum,
	},
	computed: {
		...mapState(["noHasBreadcrumb"]),
	},
};
</script>
<style lang="scss" scoped>
@import "@/style/_handle.scss";
.el-header {
	background-color: #37a2da;
	@include background_color("background_color1");
	color: #333;
	height: 50px !important;
}

/deep/.el-aside {
	background-color: #333;
	color: #333;
	position: absolute;
	top: 50px;
	left: 0;
	bottom: 0;
	width: 200px !important;
	text-align: left;
	.el-menu {
		border-right: none !important;
	}
}

.el-main {
	color: #333;
	text-align: center;
	margin-left: 130px;
	box-sizing: border-box;
	padding: 5px !important;
	.main-breadcrumb {
		height: 48px;
		border-bottom: 1px solid #eaeaea;
		background-color: #f9f9f9;
		margin-bottom: 10px;
	}
	/deep/.main-container {
		position: relative;
		height: calc(100% - 49px);
		padding: 10px;
	}
}
</style>
