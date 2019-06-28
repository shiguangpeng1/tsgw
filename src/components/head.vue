<template>
    <div>
        <nav class="navbar" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse"
                            data-target="#example-navbar-collapse">
                        <i class="iconfont icon-caidan" style="font-size: 40px;color:#999"></i>
                    </button>
                    <a class="navbar-brand" href="#"><img src="../assets/img/logo.jpg" alt=""></a>
                </div>

                <span class="navbar-text navbar-right phone hidden-sm hidden-xs"><i class="iconfont icon-dianhua"
                                                                                    style="color: #39def1;"></i>176 3003 22755</span>
                <div class="collapse navbar-collapse navbar-right" id="example-navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><router-link to="/">首页</router-link></li>
                        <li><router-link to="/server">产品服务</router-link></li>
                        <li><router-link to="/case">产品案例</router-link></li>
                        <li><router-link to="/news">新闻动态</router-link></li>
                        <li><router-link to="/about">关于我们</router-link></li>
                        <li><router-link to="/connect">联系我们</router-link></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div id="myCarousel" class="carousel slide">
            <!-- 轮播（Carousel）指标 -->
            <ol class="carousel-indicators">
                <li v-for="i in 5" :key="i" :class="i===1?'active':''" data-target="#myCarousel" :data-slide-to="i-1"></li>
            </ol>
            <!-- 轮播（Carousel）项目 -->
            <div class="carousel-inner">
                <div class="item" v-for="i in 5" :key="i" :class="i===1?'active':''">
                    <img src="../assets/img/banner.jpg" alt="First slide">
                </div>
            </div>
            <!-- 轮播（Carousel）导航 -->
            <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '/',
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style lang="less" scoped>
    .carousel-inner > .item > a > img, .carousel-inner > .item > img, .img-responsive, .thumbnail a > img, .thumbnail > img {
        width: 100%;
    }
    .nav>li>a{
        box-sizing: border-box;
    }
    .nav>li>a:focus, .nav>li>a:hover {
        text-decoration: none;
        background-color: #fff;
        color:#417ee4;
        border-bottom-color: #417ee4;
    }
    .navbar {
        min-height: 100px;
        background-color: #fff;
        margin-bottom: 0;
        border:none;
        .navbar-header {
            min-height: 100px;
        }

        .navbar-brand {
            padding: 0;
        }

        .phone {
            color: #39def1;
            font-size: 16px;
            line-height: 16px;
            padding: 70px 0 14px;
            margin: 0;
        }
    }

    @media (min-width: 768px) {
        .navbar-nav > li > a {
            font-size: 16px;
            line-height: 16px;
            padding-top: 68px;
            padding-bottom: 14px;
            border-bottom: 2px solid transparent;
        }
    }

</style>