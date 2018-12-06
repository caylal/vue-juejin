<template>
    <div class="container">
        <div class="tabs">
            <div class="tab">综合</div>
            <div class="tab">文章</div>
            <div class="tab">沸点</div>
        </div>
        <div class="content">
            <Tabs value="zh">
                <TabPane label="综合" name="zh">
                    <compre-view is-login="islogin" focus-list="focusList"></compre-view>
                </TabPane>
                <TabPane label="文章" name="wz">文章</TabPane>
                <TabPane label="沸点" name="fd">沸点</TabPane>
            </Tabs>
        </div>
       
       <switch-tab/> 
    </div>
</template>
<script>
import switchTab from '../components/switchTab'
import compreView from './synthesize/CompreView'
export default {
    name: 'me',
    data() {
        return {
            islogin: false,
            focusList: [{id: 1, name: "张三", intro: "前端开发者", focus: "1k+人关注"},{id: 2, name: "李四", intro: "前端开发者", focus: "2k+人关注"},
            {id: 3, name: "王五", intro: "前端开发者", focus: "14k+人关注"},{id: 4, name: "赵六", intro: "前端开发者", focus: "1k+人关注"}]
        }
    },
    components: {
        switchTab,
        compreView
    }
}
</script>
<style lang="scss" >  
    .content{
        margin-bottom: 3rem;
    }
    .ivu-tabs-nav-container{
        background: #007fff;
        color: rgba(255,255,255,.5);
    }
    .ivu-tabs-bar{
        box-shadow: 0 1px 4px rgba(0,0,0,.15);
        margin-bottom: 0;
    }
    .ivu-tabs-ink-bar{
        background-color: #fff;
    }
    .ivu-tabs-nav .ivu-tabs-tab-active, .ivu-tabs-nav .ivu-tabs-tab:hover{
        color: #fff;
    }
</style>


