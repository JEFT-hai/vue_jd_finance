<template>
	<div class="flexList">
		<div class="item  border-1px" :style="{background:item.bg}" v-for="item in dataList">
			<div class="icon"><img :src="item.src" /></div>
			<div class="tit" :style="{color:item.tit_color}">{{item.tit}}</div>
			<div class="desc" :style="{color:item.desc_color}">{{item.desc}}</div>
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
	.flexList{
		background:#fff;
	}
	.item{
		flex:1;
	}
	.flexList{
		display:flex;
		width:100%;
	}
	.icon{
		width:45px;
		height:45px;
		margin:0 auto;
	}
	.icon img{
		width:100%;
		height:100%;
	}
	.tit{
		height:16px;
		line-height:16px;
	}
	.tit,.desc{
		text-align:center;
		font-size:13px;
		color:#666;
		margin-top:6px;

		text-overflow:ellipsis;
		white-space:nowrap;
		overflow:hidden;
	}
	.desc{
		margin-top:4px;
		font-size:11px;
	}
</style>