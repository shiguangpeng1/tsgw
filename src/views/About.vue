<template>
    <div style="background-color: #fff;text-align: center">
        <div class="container">
            <div class="row top">
                <div class="col-md-5">
                    <h4>透视互联网络科技有限公司</h4>
                    <p>透视互联网络科技有限公司（以下简称透视互联），是一家专业的技术服务供应商。致力于为中国企业提供高品质的互联网解决方案服务，以移动互联网、小程序开发、APP开发、网站建设为核心业务，专注于设计体验研究、技术研发、品牌营销，为客户提供一站式互联网解决方案，努力为客户创造最大的价值。</p>
                    <p>在不断积累、不断摸索，逐渐壮大的道路上，透视互联秉承"客户第一 服务第一 效率第一 执行第一" 的经营理念，诚信务实的服务了4000多家企业，成为200多家集团、上市公司的长期合作伙伴。认真聆听客户理念，追求在战略理解上与客户同步；精心制定落地的计划，雕琢每一个面向用户的细节。我们对用户体验与互动、视觉传达、前后台应用系统、国际化标准和流行趋势、进行不断的研究和实践，拥有丰富的经验和理念。透视互联致力于为每个员工提供能使其价值发挥到最大化的平台；在客户第一 服务第一 效率第一 执行第一的响亮的公司宣言声中透视人为了美好明天披荆斩棘，乘风破浪，勇往直前 勇创辉煌。</p>
                </div>
                <div class="col-md-6 col-md-offset-1">
                    <img src="../assets/img/about/wallhaven-500964.png" alt="">
                </div>
            </div>
            <div class="row culture">
                <div class="col-md-3 col-xs-6">
                    <img src="../assets/img/about/bg1.png" alt="">
                    <div>
                        <h4>我们的愿景</h4>
                        <p>为客户提供一站式互联网解决方案，努力为客户创造最大的价值。</p>
                    </div>
                </div>
                <div class="col-md-3 col-xs-6">
                    <img src="../assets/img/about/bg2.png" alt="">
                    <div>
                        <h4>我们的使命</h4>
                        <p>"客户第一 服务第一 效率第一 执行第一"</p>
                    </div>

                </div>
                <div class="col-md-3 col-xs-6">
                    <img src="../assets/img/about/bg3.png" alt="">
                    <div>
                        <h4>我们的宗旨</h4>
                        <p>为了美好明天披荆斩棘，乘风破浪，勇往直前 勇创辉煌。</p>
                    </div>

                </div>
                <div class="col-md-3 col-xs-6">
                    <img src="../assets/img/about/bg4.png" alt="">
                    <div>
                        <h4>我们的核心价值</h4>
                        <p>我们坚持从客户的角度去思考问题，坚持客户价值和透视互联价值的共赢。</p>
                    </div>

                </div>
            </div>
        </div>
        <h2 class="title">我们的团队</h2>
        <h4 class="sub_title">我们是一支经验丰富，热爱工作的团队</h4>
        <div class="container">
            <div class="row team">
                <div class="col-xs-6 col-md-3 col-md-offset-1">
                    <img src="../assets/img/about/img2.png" alt="">
                </div>
                <div class="col-xs-6 col-md-3">
                    <img src="../assets/img/about/img6.png" alt="">
                    <img src="../assets/img/about/img5.png" alt="">
                    <img src="../assets/img/about/img7.png" alt="">
                </div>
                <div class="col-xs-12 col-md-4">
                    <img src="../assets/img/about/img.png" alt="">
                    <img src="../assets/img/about/img1.png" alt="">
                </div>

                <div class="clearfix"></div>
            </div>
            <div class="row consult">
                <div class="col-md-10 col-md-offset-1 hidden-xs">
                    <div class="media">
                        <div class="media-left media-middle">
                            <img src="../assets/img/about/consult.png" alt="">
                        </div>
                        <div class="media-body">
                            <h4>我们期待与您的合作</h4>
                            <h5>联系透视互联，免费获得专属《策划方案》及报价</h5>
                            <p>深入了解您的需求，严谨完成您的产品，想您所想，为您服务，相信透视互联的专业带给您不一样的互联网感受！咨询相关问题或面谈，点击下方按钮在线联系我们</p>
                            <p><router-link class="connect_us" to="/connect">联系我们</router-link></p>

                        </div>
                    </div>
                </div>
                <div class="hidden-sm hidden-md hidden-lg" style="text-align: center"><img src="../assets/img/about/consult.png" alt=""></div>

                <div class="col-xs-12 hidden-sm hidden-md hidden-lg">
                    <h4>我们期待与您的合作</h4>
                    <h5>联系透视互联，免费获得专属《策划方案》及报价</h5>
                    <p>深入了解您的需求，严谨完成您的产品，想您所想，为您服务，相信透视互联的专业带给您不一样的互联网感受！咨询相关问题或面谈，点击下方按钮在线联系我们</p>
                    <p><router-link class="connect_us" to="/connect">联系我们</router-link></p>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style lang="less" scoped>
    .top{
        text-align: left;
        margin: 60px 0 30px;
        img{
            width: 100%;
        }
    }
    .culture{
        >div{
            position: relative;
            margin-bottom: 40px;
            img{
                width: 100%;
            }
            >div{
                position: absolute;
                width: 100%;
                height: 100%;
                padding: 0 30px;
                left: 0;
                top: 0;
                color: #fff;
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: left;
            }
        }
    }
    .title {
        padding: 20px 0 10px;
        color: #417ee4;
        border-bottom: 1px solid #dfdfdf;
    }

    .sub_title {
        color: #999999;
        padding: 20px 0 30px;
        margin: 0;
    }
    .team{
        >div{

        }
    }
    .consult{
        text-align: left;
        margin: 30px 0;
        img{
            width: 120px;
            margin: 0 40px;
        }
        p{margin: 20px 0}
        .connect_us{
            margin: 30px 0;
            padding: 12px 27px;
            background-color: #417ee4;
            color: #fff;
            -webkit-border-radius: 13px;
            -moz-border-radius: 13px;
            border-radius:13px;
        }
    }
</style>