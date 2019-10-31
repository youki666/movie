<template>
    <div class="detail">
        <img class="header" :src="ismusicPlay?detail.music.coverImgUrl:detail.detail_img" alt="">
        <img class="music"  @click="musicPlay" :src="ismusicPlay?'/static/images/music/music-start.png':'/static/images/music/music-stop.png'" alt="">
        <div class="date">
            <img :src="detail.avatar" alt="">
            <span>{{ detail.author }}</span>
            <span>发布于</span>
            <span>{{ detail.date }}</span>
        </div>
        <p class="company">{{ detail.title }}</p>
        <div class="collection">
            <div class="share">
                <img @click="handlerCollection" :src="isCollected?'/static/images/icon/collection.png':'/static/images/icon/collection-anti.png'" alt="">
                <img @tap="handlerShare" src="/static/images/icon/share-anti.png" alt="">
            </div>
            <div class="line"></div>
        </div>
        <button open-type='share'>转发</button>
        <p class="content">{{ detail.detail_content }}</p>
    </div>
</template>

    <script>
    import {mapState} from 'vuex'
    import isPlayobj from './../../datas/isPlay'
    export default {
        beforeMount() {
            let oldStorage = wx.getStorageSync('isCollected')
            if(!oldStorage){
                wx.setStorage({
                    key: 'isCollected',
                    data: {}
                })
            }else {
                this.isCollected = (oldStorage[this.$mp.query.index]? true: false)
            }
            //当前页面音乐是否播放
            isPlayobj.pageIndex ===this.$mp.query.index && isPlayobj.isPlay == true? this.ismusicPlay = true: this.ismusicPlay = false
            ///监听音乐
            wx.onBackgroundAudioPlay(()=> {
                // callback
                this.ismusicPlay = true
                isPlayobj.pageIndex = this.$mp.query.index
                isPlayobj.isPlay = true
            })
            wx.onBackgroundAudioPause(() => {
                // callback
                this.ismusicPlay = false
                isPlayobj.isPlay = false
            })
        },
        mounted() {
            //this.detail = this.ListTmp[this.$mp.query.index]
            //console.log(this.$mp.query.index)
            this.detail = this.$store.state.ListTmp[this.$mp.query.index]
        },
        data(){
            return {
                detail: {},
                isCollected: false,
                ismusicPlay: false
            }
        },
        methods: {
            handlerCollection(){
                let isCollected = !this.isCollected
                this.isCollected = isCollected
                let title = this.isCollected? '收藏成功': '取消收藏'
                wx.showToast({
                    title: title,
                    icon: 'success'
                })
                let oldStorage = wx.getStorageSync('isCollected')
                oldStorage[this.$mp.query.index] = isCollected
                wx.setStorage({
                    key: 'isCollected',
                    data: oldStorage
                })
            },
            musicPlay(){
                let ismusicPlay = !this.ismusicPlay
                this.ismusicPlay = ismusicPlay
                let {dataUrl,title} = this.detail.music
                if(this.ismusicPlay){
                    wx.playBackgroundAudio({
                        dataUrl,
                        title
                    })
                }else {
                    wx.pauseBackgroundAudio()
                }
            },
            handlerShare(){
                console.log('666')
                wx.showActionSheet({
                    itemList: ['分享到朋友圈', '分享给微信好友', '分享到微博'],
                    success (res) {
                        console.log(res.tapIndex)
                    },
                    fail (res) {
                        console.log(res.errMsg)
                    }
                })
            }
        },
    }
    </script>

<style>
.detail {
    display: flex;
    flex-direction: column;
}
.header{
    width: 100%;
    height: 400rpx;
}
.music {
    width: 60rpx;
    height: 60rpx;
    position: absolute;
    top: 100px;
    left: 50%;
    margin-left: -30rpx;
}
.date {
    padding: 10rpx;
}
.date img {
    width: 64rpx;
    height: 64rpx;
    vertical-align: middle;
}
.date span {
    font-weight: 28rpx;
    margin-left: 6rpx;
}
.company {
    font-size: 32rpx;
    font-weight: bold;
    padding: 10rpx;
}
.collection {
    position: relative;
}
.share {
    float: right;
    margin-right: 30rpx;
}
.share img {
    width: 90rpx;
    height: 90rpx;
    padding: 0 10rpx;
}
.line {
    position: absolute;
    top: 45rpx;
    left: 5%;;
    width: 90%;
    height: 1rpx;
    background: #eee;
    z-index: -1;
}
.content {
    font-size: 32rpx;
    text-indent: 32rpx;
    letter-spacing: 12rpx;
    line-height: 50rpx;
}
</style>
