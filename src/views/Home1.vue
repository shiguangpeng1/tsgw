<template>
    <div class="content">
        <div class="top">
            <div>
                <h1 class="title">用心服务 追求客户满意</h1>
                <h3 class="sub_title">技术跨界，创意自由。专业APP研发</h3>
                <div class="serve">
                    <el-row>
                        <el-col :span="6">
                            <i class="iconfont icon-computer_icon"></i>
                            <p>[品牌网站建设]</p>
                            <span class="sub">BRAND WEBSITE CONSTRUCTION</span>
                        </el-col>
                        <el-col :span="6">
                            <i class="iconfont icon-phone_icon"></i>
                            <p>[专业APP定制]</p>
                            <span class="sub">PROFESSIONAL APP CUSTOMIZATION</span>
                        </el-col>
                        <el-col :span="6">
                            <i class="iconfont icon-xiaochengxu"></i>
                            <p>[微信小程序定制开发]</p>
                            <span class="sub">SMALL PROGRAM CUSTOM DEVELOPMENT</span>
                        </el-col>
                        <el-col :span="6">
                            <i class="iconfont icon-xietongyanfa"></i>
                            <p>[软件研发]</p>
                            <span class="sub">SOFTWARE DEVELOPMENT</span>
                        </el-col>
                    </el-row>
                </div>

                <div class="detail clear">
                    <div>
                        <i class="iconfont icon-tuandui"></i>
                        <p></p>
                    </div>
                    <div>
                        <i class="iconfont icon-anli"></i>
                        <p></p>
                    </div>
                    <div>
                        <i class="iconfont icon-sheji"></i>
                        <p></p>
                    </div>
                    <div>
                        <i class="iconfont icon-shouru"></i>
                        <p></p>
                    </div>
                    <div>
                        <i class="iconfont icon-dingshi"></i>
                        <p></p>
                    </div>
                    <div>
                        <i class="iconfont icon-RNicon"></i>
                        <p></p>
                    </div>
                    <div>
                        <i class="iconfont icon-huzhu"></i>
                        <p></p>
                    </div>
                </div>
            </div>

        </div>
        <div class="sort">
            <h1 class="title">为您量身打造原生APP</h1>
            <h3 class="sub_title">我们认真服务好每一位客户，让客户满意是我们的宗旨</h3>
            <div class="clear">
                <div @mouseenter="enter()" @mouseleave="leave()" :style="{'background-color':sort[0].bg}" class="item" v-for="i in 6" :key="i">
                    <div>
                        <img v-if="sort[0].act" :src="sort[0].img_foc" alt="">
                        <img v-else :src="sort[0].img" alt="">
                        <p>餐饮外卖</p>
                        <p class="sub">餐饮展示、美食展示、定位就餐、用餐评价、</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                title: 'aaaa',
                sort: [
                    {
                        img: require("../assets/demo/canyin.png"),
                        img_foc: require("../assets/demo/canyin_foc.png"),
                        act: false,
                        bg:'#fff',
                        act_bg: "#f0a228",
                    }
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .content {
        text-align: center;

        .top {
            background-color: #fff;
            border: 1px solid #fff;

            > div {
                width: 1200px;
                margin: auto;

                .title {
                    color: #417ee4;
                    border-bottom: 2px solid #f5f5f5;
                }

                .sub_title {
                    color: #999999;
                }

                .serve {
                    .iconfont {
                        display: block;
                        width: 100px;
                        height: 100px;
                        margin: 30px auto 0;
                        border: 2px solid #b6cdf5;
                        -webkit-border-radius: 50%;
                        -moz-border-radius: 50%;
                        border-radius: 50%;
                        line-height: 100px;
                        font-size: 50px;
                        color: #4888f4;
                        transition: all .5s;
                    }

                    .iconfont:hover {
                        border-color: #417ee4;
                        background-color: #417ee4;
                        color: #fff;
                    }

                    .sub {
                        font-size: 14px;
                        color: #c1c1c1;
                        word-break: break-all;
                    }
                }

                .detail {
                    width: 80%;
                    margin: 20px auto;

                    div {
                        float: left;
                        width: 14.28%;

                        .iconfont {
                            display: block;
                            width: 50px;
                            height: 50px;
                            margin: auto;
                            line-height: 50px;
                            font-size: 26px;
                            border: 1px solid #ccc;
                            -webkit-border-radius: 50%;
                            -moz-border-radius: 50%;
                            border-radius: 50%;
                            color: #ccc;
                            transition: all .5s;
                        }

                        .iconfont:hover {
                            color: #fff;
                            background-color: #ccc;
                            border-color: #ccc;
                        }
                    }
                }
            }

        }

        .sort {
            background-color: #f9fafc;

            .title {
                color: #417ee4;
            }

            .sub_title {
                color: #999999;
            }

            > div {
                width: 1200px;
                margin: auto;

                .item {
                    float: left;
                    width: 33.33%;
                    margin-bottom: 20px;

                    div {
                        width: 90%;
                        margin: auto;
                        background-color: #fff;
                        padding: 30px 0;

                        img {
                            width: 15%;
                        }

                        .sub {
                            color: #b4b4b4;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }

</style>