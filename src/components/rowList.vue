<template>
	<div class="rowList" >
		<div class="rowItem border-1px" v-for="item in dataList">
			<div class="icon">
				<img :src="item.src" class="cover" />
			</div>
			<div class="info">
				<span class="tit">{{item.tit}}</span>
				<span class="desc">{{item.desc}}</span>
			</div>
			<div class="benifit">{{item.benifit}}</div>
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

	.rowItem{
		height:70px;
		overflow:hidden;
	}
	.rowItem>div{
		margin-top:13px;
		height:44px;
		line-height:44px;
	}
	.icon,.info{
		float:left;
	}
	.tit{
		display:block;
		font-size:16px;
		line-height:1.8;
		color:#333;
	}
	.desc{
		font-size:12px;
		line-height:1.1;
		display:block;
		color:#ff3232;

		text-overflow:ellipsis;
		white-space:nowrap;
		overflow:hidden;

	}
	.benifit{
		float:right;
		font-size:14px;
		padding:0 16px;
		background:url(../assets/img/icon_arrow1.png) center right no-repeat;
		background-size:9px 14px;
		margin-right:16px;
		color:#FF801A;
	}

	.item{
		flex:1;
	}
	.flexList{
		display:flex;
		width:100%;
	}
	.icon{
		width:44px;
		height:44px;
		margin:12px 16px 0;
	}
	.icon img{
		width:100%;
		height:100%;
	}

</style>