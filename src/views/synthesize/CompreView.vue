<template>
    <div class="syn-view">
        <div class="syn-top">
            <div class="logout" v-if="isLogin">
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
            <focus-list items="focusList"></focus-list>
            
        </div>
    </div>
</template>
<script>
import focusList from '../../components/focus'
export default {
    components: {
        focusList
    },
    props: ['isLogin','focusList'],
    methods: {
        login() {
            this.$router.push('/login')
        }
    }
}
</script>
<style lang="scss" scoped>
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
</style>

