<template>
	<div class="hscroll" ref="hscroll">
		<div class="hscroll-inner" ref="hscrollInner">
			<div class="item" v-for="item in dataList" >
				<img :src="item.src" />
			</div>
		</div>
	</div>
</template>
<script>
	import BScroll from 'better-scroll';
	export default{
		props: {
			dataList:{
				type:Array,
				default:[]
			}
		},
		created(){
			this.$nextTick(()=>{
				this.initScroll();
			})
		},
		methods:{
			initScroll(){
				this.$refs.hscrollInner.style.width = this.dataList.length*137+12 + 'px';
				this.hscroll = new BScroll(this.$refs.hscroll,{
					click:true,
					scrollX:true,
					scrollY:false,
					eventPassthrough:'vertical'
				})
			}
		}
	}
</script>
<style scoped>
	.hscroll{
		width:100%;
		height:157px;
		overflow:hidden;
	}
	.hscroll-inner{
		float:left;
		background:#fff;
		position:relative;
		width:500px;
	}
	.item{
		float:left;
		width:125px;
		height:100%;
		margin-right:12px;
	}
	.item:first-child{
		margin-left:12px;
	}
	.item img{
		width:100%;
		height:100%;
	}
</style>