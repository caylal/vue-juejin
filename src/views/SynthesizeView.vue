<template>
  <div class="synthesize">
    <div class="tabs">
      <div
        class="tab"
        :class="curIndex === index ? 'tab-active' : ''"
        v-for="(item, index) in tabs"
        :key="index"
        @click="tabChange(index, item.component)"
      >{{item.title}}</div>
    </div>
    <div class="content">
        <component :is="curView" keep-alive></component>
    </div>
  </div>
</template>
<script>
import compreView from "./synthesize/CompreView";
import articleView from "./synthesize/ArticleView";
import pointView from "./synthesize/PointView";
export default {
  name: "me",
  data() {
    return {
      tabs: [
        { id: 1, title: "综合", component: 'compreView' },
        { id: 2, title: "文章", component: 'articleView'},
        { id: 3, title: "沸点", component: 'pointView'}
      ],
      curIndex: 0,
      curView: 'compreView',
    };
  },
  components: {
    compreView,
    articleView,
    pointView
  }, 
  methods: {
      tabChange (index, tab) {
          this.curIndex = index;
          this.curView = tab
      }      
  }
};
</script>
<style lang="scss" >
.synthesize{
    width: 100%;
    height: 100%;
}
.tabs {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2;
  display: flex;
  background-color: #007fff;
  line-height: 2.5rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  .tab {
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.8);
    width: 50px;
    text-align: center;
  }
}
.tab-active {
  border-bottom: 2px solid #fff;
  color: #fff !important;
}
.content {
    margin-top: 2.5rem;
    overflow-y: scroll;
}
.ivu-tabs-nav-container {
  background: #007fff;
  color: rgba(255, 255, 255, 0.5);
}
.ivu-tabs-bar {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  margin-bottom: 0;
}
.ivu-tabs-ink-bar {
  background-color: #fff;
}
.ivu-tabs-nav .ivu-tabs-tab-active,
.ivu-tabs-nav .ivu-tabs-tab:hover {
  color: #fff;
}
</style>


