/<template>
    <div class="movieDetail">
        <div>
            <img :src="details.images.large" alt="">
            <p class="movie_name">{{ details.original_title }}</p>
            <div class="detail_content">
                <span>评分{{ details.rating.average }}</span>
                <span>导演{{ details.directors[0].name}}</span>
                <span>演员{{details.casts[0].name}} | {{details.casts[1].name}} |{{details.casts[2].name}}  </span>
            </div>
            <button>我要观影</button>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return {
            details:{}
        }
    },
    computed: {
        ...mapState(['MovieList'])
    },
    beforeMount() {
        this.details = this.MovieList[this.$mp.query.index]
        console.log(this.details)
    },
}
</script>

<style>
.movieDetail {
    display: flex;
    flex-direction: column;
}
.movieDetail img {
    width: 80%;
    height: 700rpx;
    margin: 50rpx 10%;
}
.movie_name {
    font-size: 40rpx;
    text-align: center;
    font-weight: bold;
}

.detail_content{
    display: flex;
    flex-direction: column;
    margin-left: 20%;
    margin-top: 30rpx;
    line-height: 50rpx;
    font-size: 26rpx;
}

button{
    width: 70%;
    height: 80rpx;
    background: green;
    line-height: 80rpx;
    color:#fff;
    font-size: 28rpx;
    margin-top: 20rpx;
}
</style>
