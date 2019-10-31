//<template>
    <div class="container">
        <Button v-if="!isShow" open-type="getUserInfo" @getuserinfo="GetUserInfo">获取用户信息</Button>
        <img v-else class="img" :src="userInfo.avatarUrl" alt="ff">
        <p class="username">hello {{ userInfo.nickName }}</p>
        <div class="go">
            <p @click="goTravel">开启小程序之旅</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            userInfo: {},
            isShow: false
        }
    },
    mounted() {
        this.handlerGetUserInfo()
    },
    methods: {
        GetUserInfo (data) {
            //console.log(data)
            if ( data.mp.detail.rawData ){
                this.handlerGetUserInfo()
            }else {
                console.log('err')
            }
        },
        handlerGetUserInfo () {
            wx.getUserInfo({
                success: (data) =>{
                    this.userInfo = data.userInfo
                    console.log(this.userInfo)
                    this.isShow = true;
                },
                fail: function(err) {
                    console.log(err)
                }
            })
        },
        goTravel(){
            const url = "../list/main"
            wx.switchTab( { url : url } )
        }
    }
}
</script>

<style>
page {
    background: #81a;
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.img {
    width: 200rpx;
    height: 200rpx;
    border-radius: 100rpx;
    margin: 100rpx 0;
}
.username {
    font-size: 40rpx;
    font-weight: bold;
    margin: 100rpx 0;
}
.go {
    width: 220rpx;
    height: 80rpx;
    border: 1rpx solid #eee;
    font-size: 24rpx;
    line-height: 80rpx;
    text-align: center;
    border-radius: 10rpx;
}
</style>
