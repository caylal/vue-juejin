<template>
    <footer class="footer">
        <nav class="nav">
            <router-link to="/index">
                <div class="nav-icon">
                    <img v-show="route !== '/index/home'" src="../assets/tab_home_normal.png" alt="">
                    <img v-show="route === '/index/home'" src="../assets/tab_home.png" alt="">
                </div>
            </router-link>
        </nav>
        <nav class="nav">
             <router-link to="/index/synthesize">
                <div class="nav-icon">
                    <img v-show="route !== '/index/synthesize'" src="../assets/tab_feidian_normal.png" alt="">
                    <img v-show="route === '/index/synthesize'" src="../assets/tab_feidian.png" alt="">
                </div>
            </router-link>
        </nav>
        <nav class="nav">
             <router-link to="/index/search">
                <div class="nav-icon">
                    <img v-show="route !== '/index/search'" src="../assets/tab_explore_normal.png" alt="">
                    <img v-show="route === '/index/search'" src="../assets/tab_explore.png" alt="">
                </div>
            </router-link>
        </nav>
        <nav class="nav">
             <router-link to="/index/xiaoce">
                <div class="nav-icon">
                    <img v-show="route !== '/index/xiaoce'" src="../assets/tab_xiaoce_normal.png" alt="">
                    <img v-show="route === '/index/xiaoce'" src="../assets/tab_xiaoce.png" alt="">
                </div>
            </router-link>
        </nav>
        <nav class="nav">
             <router-link to="/index/me">
                <div class="nav-icon">
                    <img v-show="route !== '/index/me'" src="../assets/tab_profile_normal.png" alt="">
                    <img v-show="route === '/index/me'" src="../assets/tab_profile.png" alt="">
                </div>
            </router-link>
        </nav>
    </footer>
</template>
<script>
export default {
    computed:{
        route () {
            return this.$route.path
        }
    }
}
</script>
<style lang="scss" scoped>
    footer{
        width: 100%;
        max-width: 768px;
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 3rem;
        border-top: 1px solid #ececec;
        box-shadow:  0 2px 8px rgba(0,0,0,.15);
        z-index: 12;
        nav{
            flex: 1,                            
        }
        .nav-icon{
            text-align: center;
                img{
                    width: 35px;
                    height: 35px;
                    vertical-align: middle;
                }
            }        
    }
</style>


