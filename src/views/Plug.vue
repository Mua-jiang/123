<template>
	<div class="vip">
		<div class="l">
			<span>个人中心</span>
			<van-sidebar class="nav" v-model="activeKey">
			 <van-sidebar-item class="list" to="/" title="会员中心" />
			  <van-sidebar-item class="list" to="/plug" title="我购买的插件" />
			  <van-sidebar-item class="list" title="我购买的视频" />
			  <van-sidebar-item class="list" title="充值余额" />
			  <van-sidebar-item class="list" title="邀请好友" />
			  <van-sidebar-item class="list" title="我的签到" />
			  <van-sidebar-item class="list" title="我的勋章" />
			  <van-sidebar-item class="list" title="我的收藏" />
			  <van-sidebar-item class="list" to="/profile" title="账户设置" />
			</van-sidebar>
			 <span>客户服务</span>
			 <van-sidebar class="nav"  v-model="activeKey">
			  <van-sidebar-item class="list1" title="售后工单" />
			   <van-sidebar-item class="list1" title="我的发票" />
			   <van-sidebar-item class="list1" title="我的优惠券" />
			   
			 </van-sidebar>
		</div>
		<div class="r">
			<div class="right">
				<div class="top">
					<h2>我购买的插件</h2>
				</div>
			</div>	
		</div>
	</div>
</template>

<script>
	export default {
  data() {
    return {
      activeKey: 0,
	   activeKey1: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
	.vip{
		width: 100%;
		background: #F4F6F8;
		display: flex;
		justify-content: space-between;
		.l{
			margin-top: 40px;
			margin-left: 100px;
			width: 15%;
			background: white;
			height: 100%;
			.nav{
				width: 200px;
				
				height: auto;
				margin: 10px auto;
				.list{
					height: 5px;
					line-height: 5px;
				}
				.list1{
					height: 5px;
					line-height: 5px;
				}	
			}
			span{
				font-size: 25px;
				margin-right: 97px;
			}
		}
		.r{
			width: 75%;
			margin-top: 40px;
			margin-bottom: 30px;
			background: white;
			.right{
				    margin-top: 40px;
					margin-left: 30px;
					height: 100%;
					// background: yellow;
					.top{
						// margin-top: 42px;
						display: flex;
						justify-content: space-between;
						border-bottom: 1px solid #f4f4f4;
						h2{
							margin-left: 20px;
							// margin-top: 22px;
							font-size: 20px;
						}						
					}
			}
		}
	}
</style>
