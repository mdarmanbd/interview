<script setup>

</script>

<template>
    <div class="bg-white w-full lg:pt-32">
        <div class="w-11/12 xl:w-container m-auto bg-[#F2E7DB] rounded-md relative">
            <img class="absolute top-0 left-0 w-10 h-10 lg:w-auto lg:h-auto" src="../images/left-Intersect.png" alt="left-intersect.png">
            <img class="lg:hidden absolute bottom-0 right-0 w-10 h-10" src="../images/right-Intersect.png" alt="left-intersect.png">
            <img class="lg:hidden absolute bottom-7 left-12 w-6 h-6" src="../images/circle-orange.png" alt="circle.png">
            <div class="grid grid-cols-1 lg:grid-cols-2 ">
                <div>
                    <div class="px-5 pt-20 pb-24 lg:pt-12 lg:pb-12 lg:px-14 text-center lg:text-start">
                        <h2 class="pb-5 lg:pb-8 text-lg lg:text-3xl xl:text-4xl font-semibold lg:leading-[54px] xl:leading-[54px] text-[#2C2C2C]">
                            Happy 
                            <span class="text-colorSecondary">
                                Chinese New Year
                            </span>
                            , 20% discount for you today
                        </h2>
                        <button class="text-sm lg:text-xl font-semibold lg:font-bold text-white bg-colorPrimary w-44 lg:w-56 m-auto py-4 rounded-md">
                            Subscribe Course
                        </button>
                    </div>
                </div>
                <div class="hidden lg:block">
                    <img class="absolute bottom-0 right-0 " src="../images/right-Intersect.png" alt="left-intersect.png">
                    <div class="w-72 m-auto relative">
                        <div class="bg-subscribe">
                            <img class="absolute top-52 -left-7 " src="../images/square-green.png" alt="square.png">
                            <img class="absolute bottom-10 left-5 " src="../images/circle-orange.png" alt="circle.png">
                            <img class="absolute top-52 -right-12 " src="../images/right-angle-orange.png" alt="angle.png">
                            <img class="absolute bottom-6 -right-5 " src="../images/right-angle-green.png" alt="angle.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

.bg-subscribe{
    background-image: url("../images/subscribe-img.png");
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 433px;
}

@media (min-width: 992px){
    .bg-subscribe{
        top: -84px;
    }
}

@media (min-width: 1200px){
    .bg-subscribe{
        top: -138px;
    }
}




</style>