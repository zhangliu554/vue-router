<template>
	<div class="breadcrumb-comp clearfix">
		<span class="b-icon">
			<svg class="icon-svg" aria-hidden="true">
				<use :xlink:href="`#${routericon}`"></use>
			</svg>
		</span>
		<span class="b-title">{{ routername }}</span>
	</div>
</template>
<script>
export default {
	name: "breadcrumb-comp",
	data() {
		return {
			routername: "",
			routericon: "",
		};
	},
	created() {
		this.setRouterTitle();
	},
	methods: {
		setRouterTitle() {
			const { meta } = this.$route;
			const { name, icon } = meta;
			if (name) this.routername = name;
			if (icon) this.routericon = icon;
		},
	},
	watch: {
		$route: function() {
			this.setRouterTitle();
		},
	},
};
</script>
<style lang="scss" scoped>
@import "@/style/_handle.scss";
.breadcrumb-comp {
	padding: 0 80px;
	box-sizing: border-box;
	.b-icon {
		float: left;
		margin-top: 8px;
		width: 32px;
		height: 32px;
		background-color: #37a2da;
		@include background_color("background_color1");
		border-radius: 50%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		.icon-svg {
			width: 1.4em;
			height: 1.4em;
			vertical-align: middle;
			fill: #fff;
		}
	}
	.b-title {
		float: left;
		height: 100%;
		line-height: 48px;
		margin-left: 20px;
	}
}
</style>
