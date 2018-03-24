<template>
	<div class="item">
		<div class="title">
			<span class="tit1">{{dataList.tit1}}</span><span class="tit2">{{dataList.tit2}}</span>
		</div>
		<div class="desc">{{dataList.desc}}</div>
		<img :src="dataList.src" />
	</div>
</template>
<script>
export default{
	props:{
		dataList:{
			type:Object,
			default:{}
		}
	}
}
	
</script>
<style scoped>
	.item{
		position:absolute;
		width:50%;
		height:50%;
		font-size:14px;
		color:#666;
	}
	.item.big{
		height:100%;
	}
	.item.big .title,.item.big .desc{
		width:100%;
		box-sizing:border-box;
		text-align:center;
		padding: 0 10px;

		text-overflow:ellipsis;
		white-space:no-wrap;
		overflow:hidden;
	}
	.item.big .desc{
		margin-bottom:0;
	}
	.item .tit2{
		color:#f00;
	}
	.item img{
		width:40px;
		height:40px;
		position:absolute;
		right:14px;
		top:16px;
	}
	.item .title,.item .desc{
		padding: 0 54px 0 14px;
	}
	.item .title{
		margin-top:16px;
		height:20px;
		line-height:20px;
	}
	.item .desc{
		font-size:12px;
		margin:3px 0 17px;
	}
	.item.big img{
		position:static;
		display:block;
		width:66px;
		height:66px;
		margin:10px auto 14px;
		left:0;
	}
</style>