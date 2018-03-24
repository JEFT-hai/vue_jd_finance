<template>
	<div class="m_slider_wrapper">
		<div class="m_slider" ref="slider" @touchstart="slider_touchstart" @touchend="slider_touchend" @touchmove="slider_touchmove">
			<div class="m_slider_item" v-for="(item,key) in dataList">
				<img :src="item.src" />
			</div>
			<div class="m_slider_item" v-for="(item,key) in dataList">
				<img :src="item.src" />
			</div>
			<div class="m_slider_item" v-for="(item,key) in dataList">
				<img :src="item.src" />
			</div>
		</div>
		<div class="m_slider_indicators" >
			<span @click="translateKey(key)" :class="nowIndex==key+sliderLength||nowIndex==key+sliderLength*2||nowIndex==key+sliderLength*3?'m_slider_indicators_item active':'m_slider_indicators_item'" v-for="(item,key) in dataList">
			</span>
		</div>
	</div>
</template>
<script>
export default{
	props:{
		dataList:{
			type:Array,
			default:[]
		},
		inv:{
			type:Number,
			default:4000
		}
	},
	data(){
		return {
			sliderX:0,
			sliderStart:0,
			sliderEnd:0,
			newX:0,
			nowX:0,
			nowIndex:0,
			startTouchTime:'',
			endTouchTime:'',
			timer:''
		}
	},
	created(){
		this.$nextTick(()=>{
			this.$refs.slider.style.transform = 'translate3d(-'+this.defaultX+'px,0,0)';
			this.$refs.slider.style.transitionDuration = '0ms';
			this.nowX = this.defaultX;
			this.nowIndex = this.sliderLength;
			this.translateRight();
		})
	},
	computed:{
		sliderLength(){
			return this.dataList.length;
		},
		defaultX(){
			return this.$refs.slider.clientWidth*this.sliderLength;
		},
		sliderItemWidth(){
			return this.$refs.slider.clientWidth;
		}
	},
	watch:{
		
	},
	methods:{
		slider_touchstart(e){
			clearInterval(this.timer);
			this.sliderStart = e.changedTouches[0].clientX;
			this.startTouchTime = new Date();
			this.maxIndex();
			this.minIndex();
			this.$refs.slider.style.transitionDuration = '0ms';
		},
		slider_touchmove(e){
			this.sliderX = e.changedTouches[0].clientX - this.sliderStart;
			this.newX = this.nowX-this.sliderX;
			this.$refs.slider.style.transform = 'translate3d(-'+ this.newX+'px,0,0)';
			this.$refs.slider.style.transitionDuration = '0ms';
		},
		slider_touchend(e){
			this.endTouchTime = new Date();
			this.sliderEnd = e.changedTouches[0].clientX;

			if(this.endTouchTime - this.startTouchTime < 200){
				if(this.sliderEnd - this.sliderStart > 20){
					this.toLeft();
				}else if(this.sliderStart - this.sliderEnd > 20){
					this.toRight();
				}
			}else{
				this.nowIndex =  Math.round(this.newX/this.sliderItemWidth);
				this.newX = this.nowIndex*this.sliderItemWidth;
				this.translate();
			}
			setTimeout(()=>{
				this.$refs.slider.style.transitionDuration = '0ms';
			},500);
			this.nowX = this.newX;
			this.sliderStart = 0;
			this.translateRight();
		},

		maxIndex(){
			if(this.newX == this.defaultX*3-this.sliderItemWidth){
				this.newX =  this.defaultX*2-this.sliderItemWidth;
				this.$refs.slider.style.transform = 'translate3d(-'+this.newX+'px,0,0)';
				this.$refs.slider.style.transitionDuration = '0';
				this.nowX = this.newX;
				this.nowIndex = this.sliderLength*2-1;
			}
		},
		minIndex(){
			if(this.newX == this.defaultX-this.sliderItemWidth){
				this.newX =  this.defaultX*2-this.sliderItemWidth;
				this.$refs.slider.style.transform = 'translate3d(-'+this.newX+'px,0,0)';
				this.$refs.slider.style.transitionDuration = '0';
				this.nowX = this.newX;
				this.nowIndex = this.sliderLength*2-1;
			}
		},
		toLeft(){
			this.nowIndex--;
			this.newX = this.nowIndex*this.sliderItemWidth;
			this.translate();
		},
		toRight(){
			this.nowIndex++;
			this.newX = this.nowIndex*this.sliderItemWidth;
			this.translate();	
		},
		translateKey(key){
			this.nowIndex = key + this.sliderLength;
			this.newX = this.nowIndex*this.sliderItemWidth;
			this.translate();
		},
		translate(){
			this.$refs.slider.style.transform = 'translate3d(-'+this.newX+'px,0,0)';
			//console.log(this.$refs.slider.style)
			this.$refs.slider.style.transitionDuration = '1000ms';
			
			setTimeout(()=>{
				this.maxIndex();
				this.minIndex();
				this.$refs.slider.style.transitionDuration = '0ms';
			},1000);

			this.nowX = this.newX;
		},
		translateRight(){
			this.timer = setInterval(()=>{
				this.toRight();
			},this.inv);
		}
	}
}
	
</script>
<style scoped>
	.m_slider_wrapper{
		position:relative;
		width:100%;
		height:100%;
		//overflow-x:scroll;
		overflow:hidden;
	}
	.m_slider{
		position:relative;
		display:flex;
		transition-property:transform;
		box-sizing:content-box;
		width:100%;
		height:100%;
		z-index:1;
	}
	.m_slider_wrapper::-webkit-scrollbar {display:none};
	.m_slider_item{
		position:relative;
		display:flex;
		justify-content:center;
		align-items:center;
		flex-shrink:0;
		width:375px;
		height:100%;
	}
	.m_slider_item img{
		display:block;
		width:375px;
		height:100%;
	}
	.m_slider_indicators{
		position:absolute;
		bottom:10px;
		z-index:10;
		width:100%;
		left:0;
		text-align:center;
	}
	.m_slider_indicators_item.active{
		background:#333;
		border:1px solid #fff;
		opacity:0.5;
	}
	.m_slider_indicators_item{
		display:inline-block;
		width:7px;
		height:7px;
		background:#666;
		border-radius:50%;
		border:1px solid #eee;
		margin:0 3px;
		box-sizing:border-box;
		opacity:0.3;
		transition:all .3s linear;
	}
</style>