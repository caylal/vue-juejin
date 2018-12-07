<template>
    <div class="syn-view">
        <div class="syn-top">
            <div class="logout" v-if="!isLogin">
                <img src="../../assets/focus.png" alt="">
                <p>登录后可以查看关注动态</p>
                <i-button type="primary" class="btn" @click="login()">登录&nbsp;/&nbsp;注册</i-button>
            </div>
            <div class="logined" v-else></div>
        </div>
        <div class="syn-bottom">
            <div class="title">
                <p>你可能感兴趣的人</p>
            </div>
            <focus-list :items="list"></focus-list>            
        </div>
        <div class="syn-change">
            <div><Icon type="ios-refresh" size="22"/>换一批</div>
        </div>
    </div>
</template>
<script>
import focusList from '../../components/focus'
export default {
    data() {
        return {
            isLogin: false,
            list: [
                { id: 1, name: "张三", intro: "前端开发者", focus: "1k+人关注" },
                { id: 2, name: "李四", intro: "前端开发者", focus: "2k+人关注" },
                { id: 3, name: "王五", intro: "前端开发者", focus: "14k+人关注" },
                { id: 4, name: "赵六", intro: "前端开发者", focus: "1k+人关注" }
            ],
        }
    },
    components: {
        focusList
    },    
    methods: {
        isLogined() {
            let user = localStorage.getItem('user_info')
            user ? this.isLogin = true : this.isLogin = false
        },
        login() {
            this.$router.push('/login')
        }
    },
    created() {
        this.isLogined();
    }
}
</script>
<style lang="scss" scoped>
    .syn-view{
        width: 100%;
        height: 100%;
    }
    .syn-top {
        .logout{
            max-height: 20%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img {
                width: 20%;
                height: 20%;
            }
            .btn {
                margin-top: 5px;
                font-size: 12px;
                color: #fff;
            }
            p {
                color: #8a8a8a
            }     
        }
    }
    .syn-bottom{
        margin-top: 2rem;
        .title {
            height: 2rem;
            padding-left: 1rem;
            border-bottom: 1px solid #e6e6e6;
        }
    }
    .syn-change{
        text-align: center;
        font-size: .8rem;
        line-height: 2rem;
        color: #007fff;
    }
</style>

