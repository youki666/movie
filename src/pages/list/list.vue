<template>
    <div class="list">
        <swiper indicator-dots="true" indicator-color="#111" indicator-active-color="green">
            <swiper-item>
                <img src="/static/images/detail/carousel/01.jpg" alt="">
            </swiper-item>
            <swiper-item>
                <img src="/static/images/detail/carousel/02.jpg" alt="">
            </swiper-item>
            <swiper-item>
                <img src="/static/images/detail/carousel/03.jpg" alt="">
            </swiper-item>
            <swiper-item>
                <img src="/static/images/detail/carousel/01.jpg" alt="">
            </swiper-item>
        </swiper>
        <div class="temp">
            <ListTmp v-for="(item, index) in ListTmp" :key="index" :item='item' :index='index'></ListTmp>
        </div>
    </div>
</template>

<script>
import ListTmp from '../list_template/list_template'
import {mapState} from 'vuex'
export default {
    data(){
        return {
        }
    },
    components: {
        ListTmp,
    },
    beforeMount() {
        this.$store.dispatch('getList')
    },
    computed: mapState({
        ListTmp: state => state.ListTmp
    })
}
</script>

<style>
.list swiper {
    width: 100%;
    height: 300rpx;
}
.list swiper img {
    width: 100%;
    height: 100%;
}
</style>
