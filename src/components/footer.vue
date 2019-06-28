<template>
    <div class="box">
        <div class="foot">
            <div class="left">
<!--                <el-breadcrumb separator="|">-->
<!--                    <el-breadcrumb-item to="/">首页</el-breadcrumb-item>-->
<!--                    <el-breadcrumb-item to="/server">产品服务</el-breadcrumb-item>-->
<!--                    <el-breadcrumb-item to="/case">产品案例</el-breadcrumb-item>-->
<!--                    <el-breadcrumb-item to="/news">新闻动态</el-breadcrumb-item>-->
<!--                    <el-breadcrumb-item to="/connect">联系我们</el-breadcrumb-item>-->
<!--                </el-breadcrumb>-->
            </div>
            <div class="right">

            </div>
        </div>
        <div class="copyright">Copyright ©2008-2020 透视互联版权所有 豫ICP备18041974号-2</div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="less" scoped>
    .box {
        background-image: url("../assets/img/foot_bg.png");
        background-size: 100% 100%;
        .foot {
            width: 1200px;
            height: 191px;
            margin: auto;
            >div{
                padding: 20px;
            }
            .left {
                .el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{
                    color: #fff!important;
                }
            }
            .right{

            }
        }

        .copyright {
            height: 30px;
            color: #fff;
            font-size: 12px;
            line-height: 30px;
            text-align: center;
            border-top: 1px solid #dfdfdf;
        }
    }
</style>