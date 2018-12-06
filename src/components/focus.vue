<template>
    <div>
        <div class="focus" v-for="item in items" :key="item.id">
            <div class="f-box">
                <img src="../assets/default_avatar.png" alt="">
            </div>
            <div class="f-box">
                <div class="f-info">{{item.name}}</div>
                <div class="f-info">{{item.intro}}</div>
                <div class="f-info">{{item.focus}}</div>
            </div>
            <div class="f-box">
                <div class="btn" @click="foucs(item.id)"><Icon type="plus"></Icon>关注</div>
            </div>
        </div>
    </div>
    
</template>
<script>
export default {
    props: ['items'],
    methods: {
        focus(id) {
            console.log(id)
        }
    }
}
</script>

