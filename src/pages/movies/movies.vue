/<template>
    <div class="movie" >
        <div class="contianer" v-for="(item, index) in list" :key='index' @click="toMovieDetail(index)">
            <img class="movie_img" :src="item.images.large" alt="">
            <div class="info">
                <p class="title">{{ item.original_title }}</p>
                <p class="year">年份{{ item.year }}</p>
                <p class="dir">导演{{ item.directors[0].name }}</p>
            </div>
            <p class="rank">{{ item.rating.average }}</p>
        </div>
    </div>
</template>

<script>
const movie_url = "http://t.yushu.im/v2/movie/top250"
export default {
        beforeMount() {
            this.$fly.get(movie_url).then(res =>{
                //console.log(res.data)
                let list = res.data.subjects
                console.log(list)
                this.$store.dispatch('getMovie', list)
                this.list = list
            })
        },
        data(){
            return {
                list: []
            }
        },
        methods: {
            toMovieDetail(index){
                console.log(index)
                wx.navigateTo({
                    url: '/pages/moviedetail/main?index='+ index
                })
            }
        },
}
</script>

<style>
.contianer {
    display: flex;
    padding: 10rpx;
    border-bottom: 1rpx solid #eee;
}
.movie_img {
    width: 128rpx;
    height: 128rpx;
    margin-right: 20rpx;
}
.info {
    width: 70%;
}
.title {
    font-size: 32rpx;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}
.yaar {
    font-size: 28rpx;
    color: #333;
    margin: 5rpx 0;
}
.dir {
    font-size: 28rpx;
    color: #333;
}
.rank {
    font-size: 36rpx;
    font-weight: bold;
    color: red;
    margin-top: 30rpx;
}
</style>
