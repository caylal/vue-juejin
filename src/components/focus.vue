<template>
    <div>
        <div class="focus" v-for="item in items" :key="item.id">
            <div class="f-title">
                <img src="../assets/default_avatar.png" alt="">
            </div>
            <div class="f-box">
                <div class="f-box-f">
                    <div class="f-name">{{item.name}}</div>
                    <div class="f-info">{{item.intro}}</div>
                    <div class="f-info">{{item.focus}}</div>
                </div>
                <div class="f-box-btn">
                    <div class="btn" @click="foucs(item.id)"><Icon type="md-add" size="14"/>&nbsp;关注</div>     
                </div>                           
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
<style lang="scss" scoped>
    .focus{
        width: 100%;
        display: flex;
        align-items: center;
        padding: 5px;   
        border-bottom: 1px solid #e6e6e6;     
        .f-title{
            width: 20%; 
            text-align: center;           
            img{
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
        }
        .f-box{
            width: 80%; 
            padding: 0 5px;          
            display: flex;
            align-items: center;
            justify-content: space-between;
            &-f{
                width: 75%;
                .f-name{
                    font-weight: 600;
                    font-size: .8rem;
                }
                .f-info{
                    color: #8a8a8a;
                }
            }
            &-btn{
                width: 25%;
                padding-right: 5px;
                .btn{
                    text-align: center;
                    line-height: 1.5rem;
                    border: 1px solid #28c302;
                    border-radius: 4px;
                    color: #28c302;
                    i{
                        line-height: 1.5;
                    }
                }
            }
        }
    }

</style>


