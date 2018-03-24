<template>
	<div class="row_two" >
		<div class="item" v-for="(item,key) in dataList">
			<div class="bg">
				<div v-show="item.tip" class="tip">{{item.tip}}</div>
			   	<img :src="item.src">
			   	<p class="tit">{{item.tit}}</p>
			   	<p class="price">
			   		<span class="type">￥</span>
			   		<span class="count">{{item.price}}</span>
			   		<span class="desc">起</span>
			   	</p>
			   	<div v-show="item.percent" class="progress-wrap">
			        <div class="progress">
			        	<div class="progress-inner" :style="{width:w_Per[key]}"></div>
			   	    </div>
			   	    <div class="num">
			   	    	<span>{{item.more}}</span>
			   	    	{{item.percent}}
			   	    </div>
			   	</div>
			   	<div v-show="item.gray" class="gray">{{item.gray}}</div>
			</div>
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
	},
	data(){
		return {
			w_Per:[]
		}
	},
	created(){
		this.filterPer();
	},
	methods:{
		filterPer(){
			for(var i=0;i< this.dataList.length;i++){
				if(parseInt(this.dataList[i].percent) >= 100){
					this.w_Per[i] = '100%';
				}else{
					this.w_Per[i] = this.dataList[i].percent;
				}
			}
		}
	}
}
	
</script>
<style scoped>
	.row_two{
		display:flex;
		width:100%;
	}
	.row_two .item{
	  flex:1;
	  margin-bottom:20px;
	  overflow:hidden;
	  position:relative;
	  text-align:center;	  
	}
	.row_two .item .bg{
		background:rgba(0,0,0,.02);
		position:relative;
		overflow:hidden;
	}
	.row_two .item:nth-child(odd){
	  padding:0 5px 0 10px; 
	}
	.row_two .item:nth-child(even){
	  padding:0 10px 0 5px; 
	}
	.item img{
		width:90px;
		height:90px;
		display:block;
		margin:22px auto 10px;
	}
	.item .tip{
		position:absolute;
		left:0;
		top:0;
		height:18px;
		line-height:18px;
		background:#999;
		color:#f00;
		font-size:12px;
		padding:0 3px;
		border-radius:1px;
	}
	.item .tit{
		height:20px;
		line-height:20px;
		margin:0 12px;
		font-size:14px;
		color:#333;
		font-weight:700;
	}
	.item .price{
		height:24px;
		line-height:24px;
		margin-bottom:8px;
	}
	.item .price .type{
		color:#ff3232;
		font-size:14px;
	}
	.item .price .count{
		font-weight:700;
		color:#ff3232;
		font-size:18px;
	}
	.item .price .desc{
		font-family: PingFangSC-Semibold;
		color:#999;
		margin-left:2px;
		font-size:12px;
		position:relative;
		top:-1px;
	}
	.item .progress{
		width:70%;
		overflow:hidden;
		float:left;
		margin-top:5px;
		background:#f6e6e6;
	}
	.item .progress-wrap{
		height:15px;
		padding:0 12px 9px;
	}
	.item .gray{
		height:24px;
		line-height:24px;
		background:#ededed;
		color:#999;
		font-size:12px;
	}
	.item .progress-inner {
		height:5px;
		background-image: linear-gradient(270deg,#F55 1%,#FF9C31 100%);
		border-radius:1px;
	}
	.item .progress-wrap .num{
		float:right;
		font-size:12px;
		color:#999;
		font-weight:700;
		position:relative;
		top:-1px;
	}
	.item .progress-wrap .num span{
		position:relative;
		left:2px;
	}
</style>