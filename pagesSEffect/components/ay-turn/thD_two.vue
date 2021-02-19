<template>
	<view>
		
		     <view class="box">
		        <view id="cal">
		            <view v-for="(item,index) in 6" :key="index"><image src="https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg" ></view>
		        </view> 
		    </view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	 
	        .box{ 
	            margin: 4% auto; 
	            width: 210upx; 
	            height: 140upx; 
	            position: relative; 
	            perspective: 1000upx; 
	        } 
	        #cal{ 
	            width: 100%; 
	            height: 100%; 
	            position: absolute; 
	            transform-style:preserve-3d; 
	            animation: rotation 20s infinite linear; 
	        } 
	        #cal:hover{ 
	            animation-play-state: paused; 
	        } 
	        #cal view{ 
	          display: block;
	            position: absolute; 
	            width: 220upx; 
	            height: 200upx; 
	            left: 10upx; 
	            top: 10upx; 
	            background: black; 
	            overflow: hidden; 
	            border: solid 5upx black; 
	        } 
	        #cal image{ 
	            filter: grayscale(0); 
	            cursor: pointer; 
	            transition:all 0.3s ease 0s; 
	            width: 100%; 
	            height: 100%; 
	        } 
	        #cal image:hover{ 
	            filter: grayscale(1); 
	            transform: scale(1.2,1.2); 
	        } 
	        #cal view:nth-child(1){transform: rotateY(0deg) translateZ(288upx);} 
	        #cal view:nth-child(2) { transform: rotateY(60deg) translateZ(288upx);} 
	        #cal view:nth-child(3) { transform: rotateY(120deg) translateZ(288upx);} 
	        #cal view:nth-child(4) { transform: rotateY(180deg) translateZ(288upx);} 
	        #cal view:nth-child(5) { transform: rotateY(240deg) translateZ(288upx);} 
	        #cal view:nth-child(6) { transform: rotateY(300deg) translateZ(288upx);} 
	   
	        @keyframes rotation{ 
	            from{ 
	                transform: rotateY(0deg); 
	            } 
	            to{ 
	                transform: rotateY(360deg); 
	            } 
	        } 
</style>
