<template>
    <div class='container' @click="toDetail">
        <div class="avatar">
            <img :src="item.avatar" alt="">
            <span>{{ item.date }}</span>
        </div>
        <p class='company'>{{ item.title }}</p>
        <img class='img' :src="item.detail_img" alt="">
        <p class="content">{{ item.detail_content }}</p>
        <div class='view'>
            <img src="/static/images/icon/star.png" alt="">
            <span>{{ item.love_count }}</span>
            <img src="/static/images/icon/view.png" alt="">
            <span>{{ item.attention_count }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'item','index'
    ],
    methods: {
        toDetail(){
            wx.navigateTo( {
                url: '/pages/detail/main?index=' + this.index
            } )
        }
    },
}
</script>

<style>
.container {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #eee;
}
.avatar {
    padding: 10rpx;
}
.avatar img {
    width: 60rpx;
    height: 60rpx;
    vertical-align: middle
}
.avatar span {
    font-size: 28rpx;
    color: #333;
}
.company {
    font-size: 40rpx;
    font-weight: bold;
    padding: 10rpx;
}
.img {
    width: 100%;
    height: 460rpx;
}
.content {
    font-size: 32rpx;
    text-indent: 32rpx;
    line-height: 50rpx;
    word-spacing: 10rpx;
}
.view img {
    width: 32rpx;
    height: 32rpx;
    vertical-align: middle
}
.view span {
    font-size: 24rpx;
    color: #333;
    margin-left: 10rpx;
}
</style>
