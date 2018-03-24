<template>
 	<div>
 		<v-header></v-header>
 		<div class="logo_top">
 		</div>
 		<router-view></router-view>
 		<div class="tab_bottom"></div>
 		<div class="tab">
 			<router-link class="tab_item" to="/index">
 				<div class="icon">
 					<img src="./assets/img/icon1.png" />
 				</div>
 				<p class="tab_name">首页</p>
 			</router-link>
 			<router-link class="tab_item" to="/licai">
 				<div class="icon">
 					<img src="./assets/img/icon2.png" />
 				</div>
 				<p class="tab_name">理财</p>
 			</router-link>
 			<router-link class="tab_item" to="/baitiao">
 				<div class="icon">
 					<img src="./assets/img/icon3.png" />
 				</div>
 				<p class="tab_name">白条</p>
 			</router-link>
 			<router-link class="tab_item" to="/zhongchou">
 				<div class="icon">
 					<img src="./assets/img/icon4.png" />
 				</div>
 				<p class="tab_name">众筹</p>
 			</router-link>
 			<router-link class="tab_item" to="/index">
 				<div class="icon">
 					<img src="./assets/img/icon5.png" />
 				</div>
 				<p class="tab_name">我的</p>
 			</router-link>
 		</div>
 	</div>
	
</template>
<script>
import VHeader from './components/header'
	export default {
		data () {
			return {

			}
		},
		components:{
		    VHeader
		}
	}
</script>
<style>
	html,body,ul,li,p{
		padding:0;
		margin:0;
		font-family: PingFangSC-Regular,Arial,"Helvetica Neue",Helvetica,sans-serif;
	}
	html,body{
		background:#f5f5f5;
	}
	li{
		list-style:none;
	}
	.logo_top{
	  height:50px;
	  margin-bottom:10px;
	}
	.tab{
		display:flex;
		background:#fff;
		position:fixed;
		width:100%;
		height:50px;
		bottom:0;
		left:0;
		box-shadow: 0 -3px 4px rgba(0,0,0,.03);
	}
	.tab_item{
		flex:1;
		color:#656565;
		text-decoration:none;
		font-size:12px;
	}
	.tab_item .icon{
		width:22px;
		height:22px;
		margin:6px auto 3px;
	}
	.tab_item .icon img{
		width:100%;
		height:100%;
	}
	.tab_item .tab_name{
		color:#656565;
		text-align:center;
	}
	.tab_bottom{
		height:50px;
		margin-top:10px;
	}
</style>