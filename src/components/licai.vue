<template>
	<div class="licai" >
		<div class="item border-top-1px" v-for="item in dataList">
			<div class="title">
				<span class="tit">{{item.tit}}</span>
				<div class="tip">{{item.tip}}</div>
			</div>
			<div class="percent">{{item.perc}}</div>
			<div class="desc">{{item.desc}}</div>
		</div>
	</div>
</template>
<script>
export default{
	props:{
		dataList:{
			type:Array,
			default:[]
		}
	}
}
	
</script>
<style scoped>
    .licai{
    	overflow:hidden;
    	background:#fff;
    	font-family:PingFangSC-Medium;
    }
	.item{
		width:50%;
		height:109px;
		padding-left:16px;
		box-sizing:border-box;
		float:left;
	}
	.item.border-top-1px:after{

	}
	.title{
		margin:17px 0 8px;
		height:21px;
		line-height:21px;
		color:#333;
	}
	.tit{
		font-weight:700;
		font-size:15px;
		float:left;
	}
	.tip{
		position:relative;
		float:left;
		left:4px;
		top:1.5px;
		font-size:13px;
		color:#FF5155;
		padding:0 4px;
		height:17px;
		line-height:17px;
	}
	.tip:after{
		position:absolute;
		content:'';
		left:0;
		top:0;
		width:100%;
		height:100%;
		border:1px solid;
	}
	@media (-webkit-min-device-pixel-ratio:1.5),(min-device-pixel-ratio:1.5){
		.tip:after{
			width:150%;
			height:150%;
			transform:scale(.7,.7);
			transform-origin:0 0;
		}
	}
	@media (-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2){
		.tip:after{
		    width:200%;
			height:200%;
			transform:scale(.5,.5);
			transform-origin:0 0;
		}
	}
	.percent{
		font-size:22px;
		font-weight:700;
		color:#FF5155;
		height:29px;
		line-height:29px;
		font-family: PingFangSC-Regular,Arial,"Helvetica Neue",Helvetica,sans-serif;
	}
	.desc{
		height:17px;
		line-height:17px;
		color:#999;
		font-size:12px;

		text-overflow:ellipsis;
		white-space:no-wrap;
		overflow:hidden;
	}
</style>