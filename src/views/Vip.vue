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
					<h2>会员中心</h2>
					
					<div class="pull-right"><el-button type="primary" @click="toPage">个人资料</el-button></div>
				</div>
				<div class="body">
					<div class="ll">
						<img src="../img/0002e33220c256c671ea0a2448fd301.png" />
					</div>
					<div class="rr">
						<div class="title"><h4><a>百威不加冰</a></h4>
						<p><a>这家伙很懒！什么也没写</a></p></div>
						
						<div style="margin-top: -15px;">
							 <table class="table">
							  <tbody>
							      <tr>
							          <th>UID</th>
							          <td><a href="javascript:;">37470</a></td>
							          <th>Lv</th>
							          <td><a href="javascript:;" data-toggle="tooltip" title="查看等级升级说明" class="viewlv">1</a></td>
							      </tr>
							      <tr>
							          <th>积分</th>
							          <td><a href="/user/scorelog.html" data-toggle="tooltip" title="查看积分日志">0</a></td>
							          <th>余额</th>
							          <td><a href="/user/moneylog.html" data-toggle="tooltip" title="查看余额日志">0.00</a></td>
							      </tr>
							      <tr>
							          <th>加入时间</th>
							          <td>2020-11-27 15:08:37</td>
							          <th>上次登录</th>
							          <td>2020-11-27 15:08:37</td>
							      </tr>
							      </tbody>
							  </table>                                      
						</div>
					</div>
				</div>
				<div class="body-bottom">
					<h2>统计数据</h2>
					
					<h2></h2>
				</div>
				<div class="bottom">
					<div class="main">
						<div class="xs">
							<div class="xsss">
								<van-icon name="medal" color='#E74C3C'/>
								<h4>
									<span>0</span>
									<!-- <small>提问</small> -->
								</h4>
								<p>你在社区提问次数</p>
							</div>
							<div class="xsss">
								<van-icon name="volume" color='#3498DB' />
								<h4>
									<span>0</span>
									<!-- <small>提问</small> -->
								</h4>
								<p>你在社区回答次数</p>
							</div>
							<div class="xsss">
								<van-icon name="point-gift" color='#F012BE'/>
								<h4>
									<span>0</span>
									<!-- <small>提问</small> -->
								</h4>
								<p>你在社区被采纳次数</p>
							</div>
							<div class="xsss">
								<van-icon name="send-gift" color='#F012BE'/>
								<h4>
									<span>0</span>
									<!-- <small>提问</small> -->
								</h4>
								<p>你在官网的签到次数</p>
							</div>
							<div class="xsss">
								<van-icon name="good-job" color='#F39C12'/>
								<h4>
									<span>0</span>
									<!-- <small>提问</small> -->
								</h4>
								<p>你在社区被关注次数</p>
							</div>
							<div class="xsss">
								<van-icon name="share" color='#605CA8'/>
								<h4>
									<span>0</span>
									<!-- <small>提问</small> -->
								</h4>
								<p>你邀请好友加入人数</p>
							</div>
						</div>
					</div>
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
  methods:{
	toPage() {
	  //跳转
	  this.$router.push({
	    path: "/profile",
	  });
	},  
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
						.pull-right{
							margin-right: 20px;
							// margin-top: 22px;
							margin-bottom: 10px;
						}
					}
					.body{
						display: flex;
						justify-content: space-between;
						margin-top: 20px;
						.ll{
							width: 25%;
							// background: blanchedalmond;
							img{
								margin-top: 10px;
								height: 150px;
								width: 150px;
								border-radius: 150px;    
							}
						}
						.rr{
							width: 75%;
							.title{
								margin-top: 30px;
							}
							h4{
								font-size: 14px;
								color: blue;
								font-weight: 100;
								margin-right: 615px; 
							}
							p{
								 font-size: 12px;
								 color: blue;
								 margin-right: 600px;
								 font-weight: 100;
								 margin-top: 5px;
								 margin-bottom: 40px;
							}
							.table{
								width: 568px;
								max-width: 100%;
								margin-bottom: 17px;
								background-color: transparent;
								border-collapse: collapse;
								border-spacing: 0;
								th{
									border-top: 1px solid #f4f4f4;
									padding: 8px;
									line-height: 1.42857143;
									vertical-align: top;
									font-size: 14px;
								}
								td{
									border-top: 1px solid #f4f4f4;
								}
							}
					}
				}
				.body-bottom{
					background: transparent;
					    /* border-bottom: none; */
					    margin: 0 0 30px 0;
					    padding: 0;
						display: flex;
						justify-content: space-between;
						border-bottom: 1px solid #f4f4f4;
						// margin-top: 20px;
						h2{
						margin-top: 10px;
						margin-left: 20px;
						font-size: 20px;
						margin-bottom: 20px;
						}
				}
				.bottom{
					padding-top: 0px !important;
					padding-right: 0px !important;
					padding-bottom: 0px !important;
					adding-left: 0px !important;
					.main{
						margin: 0px;
						padding: 0;    
						.xs{
							margin: 0;
							padding: 0;
							.xsss{
								width:29.3%;
								max-width: 360px;
								margin: 10px auto;
								padding: 10px 10px;
								float: left;
								.van-icon{
									width: 75px;
									height: 75px;
									line-height: 73px;
									font-size: 35px;
									text-align: center;
									border-radius: 50%;
									float: left;
									// border: 1px solid #f6f6f6;    
								}
								h4{
									position: relative;
									margin-top: 0;
									margin-bottom: 0;
									font-size: 30px;
									font-weight: 400;
									line-height: 50px;
									height: 50px;
									color: #444;
									font-family: Helvetica, Arial;    
								}
								p{
									color: #999;
								}
							}
						}
					}
				}	
		}
		
	}

</style>