<template>
    <div class="container">
        <div class="context-box">
            <router-view></router-view> 
        </div>
       <switch-tab/>
    </div>
</template>
<script>
import switchTab from '../components/switchTab'
export default {
    components: {
        switchTab
    }
}
</script>
<style>
    .context-box{
        width: 100%;
        height: calc(100%  - 3rem);
        margin-bottom: 3rem;
        overflow-y: scroll;
    }
</style>
