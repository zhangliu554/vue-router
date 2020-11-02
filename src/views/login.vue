<template>
	<div class="login-contain">
		<div class="login-contain">
			<h1 class="login-title">信息网后台管理系统</h1>
			<el-form ref="login-form" :model="infoForm" class="login-form">
				<el-form-item>
					<el-input
						placeholder="请输入用户名"
						v-model="infoForm.username"
					></el-input>
				</el-form-item>
				<el-form-item>
					<el-input
						placeholder="请输入密码"
						v-model="infoForm.password"
						show-password
					></el-input>
				</el-form-item>
				<el-form-item>
					<el-button
						type="primary"
						@click="onSubmit('login-form')"
						class="login-button"
						:loading="this.loading"
						>立即登录</el-button
					>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
import LoginApi from "@/api/login";
import Session from "@/utils/session-util.js";
export default {
	name: "login",

	data() {
		return {
			infoForm: {
				username: "",
				password: "",
			},
			loading: false,
		};
	},
	created() {
		// 清除缓存
		Session.removeAllSession();
	},
	methods: {
		onSubmit(form_name) {
			this.$refs[form_name].validate(async (valid) => {
				if (valid) {
					this.loading = true;
					const { data } = await LoginApi.login(this.infoForm);
					if (data) {
						const { accessToken } = data;
						Session.setLocalSession("token", accessToken);
						const path = await this.$store.dispatch( "userStore/sessionMenuinfo");
						if (path) {
							this.$message({
								type: "success",
								message: "登录成功",
								duration: 1000,
								onClose() {
									location.href = '/';
								},
							});
						}
					}
				}
			});
		},
	},
};
</script>
<style lang="scss" scoped>
.login-contain {
	height: 100vh;
	position: relative;
	background-color: #282c34;
	box-sizing: border-box;
	.login-contain {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 450px;
		background-color: #fff;
		box-shadow: 0 0 5px #eeeeee;
		padding: 65px 50px 50px;
		box-sizing: border-box;
		height: 400px;
		.login-button {
			width: 100%;
		}
	}
	.login-title {
		margin-bottom: 45px;
		text-align: center;
		font-size: 24px;
		letter-spacing: 2px;
		font-weight: 500;
	}
}
</style>
