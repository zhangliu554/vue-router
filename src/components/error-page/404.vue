<template>
    <div class="page-container">
            <div class="page-img">
                <img src="@/assets/images/404/404.png" alt="404" class="bg">
            </div>
            <div class="page-back">
                <p>抱歉,您查看的页面不存在~~~
                     <el-link  type="primary" :underline="false" @click="$router.go(-1)">返回</el-link>
                </p>
            </div>
    </div>
</template>
<style lang="scss" scoped>
.page-container{
    transform: translate(-50%,-50%);
    position: absolute;
    top: 45%;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .page-img{
        width: 400px;
        overflow: hidden;
        img{
            width: 100%;
        }
    }
    .page-back{
        white-space: nowrap;
        padding: 60px  0 0;
        font-size: 18px;
        color: #8B8B8B;
        a{
         font-size: 1px;
        }
    }
}
   
</style>