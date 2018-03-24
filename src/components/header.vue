<template>
	<div class="header" >
		<div class="register">
			<span>注册 | 登录</span>
		</div>
		<div class="jr-logo">
			<img src="../assets/img/jr-logo.png" />
		</div>
		<div class="downLoad">
			<span>APP下载</span>
		</div>
	</div>
</template>
<script>
export default{

}
	
</script>
<style scoped>
	.header{
		position:fixed;
		left:0;
		top:0;
		z-index:10;
		height:50px;
		width:100%;
		background:#f9f9f9;
		display:flex;
		padding:11px 12px;
		box-sizing:border-box;
		justify-content:space-between;
		line-height:28px;
	}
	.register{
		color:#666;
		font-size:14px;
	}
	.jr-logo{
		height:28px;
		width:105px;
	}
	.jr-logo img{
		width:100%;
		height:100%;
	}
	.downLoad{
		padding:0 8px;
		color:#fff;
		background:#f04752;
		border-radius:3px;
	}
</style>