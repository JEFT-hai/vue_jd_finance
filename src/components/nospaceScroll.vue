<template>
<div class="auto-scroll" ref="autoScroll">
	<div class="auto-scroll-wrap" >
		<ul>
			<li class="item" v-for="item in dataList">
				<span>{{item.text}}</span>
				<img src="../assets/img/icon_arrow1.png" />
			</li>
			<li class="item" v-show="key==0" v-for="(item,key) in dataList">
				<span>{{item.text}}</span>
				<img src="../assets/img/icon_arrow1.png" />
			</li>
		</ul>
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
			inv:20,
			H:36,
			timer:''
		}
	},
	mounted(){
		this.$nextTick(()=>{
			this.init_scroll();
			
		})
	},
	computed:{
		sH(){
			return this.H*this.dataList.length;
		}
	},
	methods:{
		init_scroll(){
			this.timer = setTimeout(()=>{
				if(this.$refs.autoScroll.scrollTop >= this.sH){
					this.$refs.autoScroll.scrollTop = 0;
					clearTimeout(this.timer);
					this.init_scroll();
				}else{
					this.$refs.autoScroll.scrollTop += 1;
					if(this.$refs.autoScroll.scrollTop%this.H == 0){
						clearTimeout(this.timer);
						this.inv = 2000;
						this.init_scroll()
					}else{
						this.inv = 20;
						clearTimeout(this.timer);
						this.init_scroll()
					}
				}
			},this.inv);
		}
	}
}
	
</script>
<style scoped>
	.auto-scroll{
		padding-left:73px;
		width:100%;
		height:36px;
		background:url(../assets/img/scroll_img.png) no-repeat;
		background-size:73px 100%;
		overflow:hidden;
		box-sizing:border-box;
	}
	.auto-scroll-wrap ul{
		margin:0;
		padding:0;
		height:36px
	}
	.item{
		height:36px;
		line-height:36px;
		width:100%;
		position:relative;
		padding:0 32px 0 16px;
		background:#fff;
		box-sizing:border-box;
	}
	.item span{
		margin-right:6px;
		font-family: PingFangSC-Medium;
		color:#333;
		font-size:14px;
	}
	.item img{
		position:absolute;
		display:block;
		width:8px;
		height:14px;
		margin-top:-7px;
		top:50%;
		right:16px;
	}
</style>