<template>
    <div>
        <ul>
            <li class="fl"><i class="iconfont icon-bianji"></i>537</li>
            <li class="fl"><i class="iconfont icon-tianjia"></i>添加元素</li>
            <li class="fl"><i class="iconfont icon-biaoqian"></i>关注</li>
        </ul>
    </div>
</template>

<script>

    export default {
        data() {
            return {}
        }
    }

</script>

<style scoped lang="less">
    ul {
        border-top: solid 1px #D4D4D4;
        li {
            width: 33.33333333333333333333%;
            text-align: center;
            height: 50px;
            line-height: 50px;
        }
        li:nth-child(1) {
            border-right: solid 1px #D4D4D4;
        }
        li:nth-child(2) {
            border-right: solid 1px #D4D4D4;
        }
    }

</style>