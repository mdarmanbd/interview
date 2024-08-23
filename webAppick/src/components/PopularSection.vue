<script>
    import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        // console.log(swiper);
      };
      const onSlideChange = () => {
        // console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
  };
  
</script>

<template>
  <section class="w-full py-20 bg-colorPrimary relative">
    <img class="absolute left-5 lg:left-44 top-9 lg:top-32 w-9 h-9 lg:w-12 lg:h-12" src="../images/right-angle-orange.png" alt="right-angle.png">
    <img class="absolute right-3 lg:right-44 top-14 lg:top-24 w-9 h-9 lg:w-6 lg:h-6" src="../images/circle-orange.png" alt="circle.png">
    <div class="text-center pb-10 lg:pb-12">
        <h2 class="text-lg lg:text-4xl leading-[54px] font-semibold text-white pb-5 lg:pb-2.5">
            Popular courses of the week
        </h2>
        <p class="w-[311px] lg:w-[347px] m-auto text-white opacity-60 text-xs lg:text-base lg:leading-9 font-normal">
            List of the most popular lists that are often studied by our members
        </p>
    </div>
    <div class="lg:w-11/12 xl:w-container m-auto pt-12">
        <swiper
            :modules="modules"
            :space-between="30"
            navigation
            :pagination="{ clickable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :breakpoints="{ 

                375:{
                        slidesPerView: 1,
                        spaceBetween: 15,
                        pagination: false,

                    },
                768:{
                        slidesPerView: 2,
                        spaceBetween: 30,
                        pagination: false,
                    },
                1024:{
                    
                        slidesPerView: 2,
                        spaceBetween: 50,
                        pagination: false,
                    
                    },
                1280:{
                        slidesPerView: 3,
                        spaceBetween: 40,
                        pagination: false,
                    }
                   
            }"
            class="custom-swiper"    
        >
            <swiper-slide>
                <div class=" ">
                    <div class="bg-card-one rounded-t-2xl">
                        <img 
                            class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border-[12px] border-white border-opacity-25 rounded-full cursor-pointer"
                            src="../svg/play-card.svg" alt="play.svg"
                        >
                    </div>
                    <div class="bg-white p-4 lg:pt-7 lg:px-7 lg:pb-4 rounded-b-2xl">
                        <h4 class="text-sm lg:text-2xl text-lightBlack lg:leading-9 font-semibold">
                            Basic of learning team management
                        </h4>
                        <div class="flex items-center justify-between pt-5 pb-7 lg:pb-10">
                            <div class="flex items-center space-x-2">
                                <img class="w-8 h-8 lg:w-auto lg:h-auto" src="../images/jone-owel.png" alt="jone.png">
                                <div class="">
                                    <p class="text-[10px] lg:text-sm text-lightBlack font-normal lg:font-medium">
                                        Jone Owel
                                    </p>
                                    <small class="block text-[10px] font-normal text-lightGray leading-[15px]">
                                        IT Manager
                                    </small>
                                </div>
                            </div>
                            <div class="flex items-center space-x-2">
                                <img class="w-6 h-6 lg:w-auto lg:h-auto" src="../images/person.png" alt="person.png">
                                <div class="">
                                    <p class="text-[10px] lg:text-base text-lightBlack font-normal lg:font-medium">
                                        120
                                    </p>
                                    <small class="block text-[10px] font-normal text-lightGray leading-[15px]">
                                        Participant
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <button class="w-20 lg:w-24 bg-colorPrimary text-white rounded-md text-center text-xs font-semibold py-0.5 lg:py-3 leading-7">
                                Buy Now
                            </button>
                            <div class="">
                                <h4 class="text-base lg:text-2xl lg:leading-9 font-semibold text-lightBlack">
                                    $120 
                                    <span class="text-lightGray text-[8px] lg:text-xs leading-7">
                                    /25 Video
                                    </span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class=" ">
                    <div class="bg-card-two rounded-t-2xl">
                        <img 
                            class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border-[12px] border-white border-opacity-25 rounded-full cursor-pointer"
                            src="../svg/play-card.svg" alt="play.svg"
                        >
                    </div>
                    <div class="bg-white p-4 lg:pt-7 lg:px-7 lg:pb-4 rounded-b-2xl">
                        <h4 class="text-sm lg:text-2xl text-lightBlack lg:leading-9 font-semibold">
                            Learn basic database structure
                        </h4>
                        <div class="flex items-center justify-between pt-5 pb-7 lg:pb-10">
                            <div class="flex items-center space-x-2">
                                <img class="w-8 h-8 lg:w-auto lg:h-auto" src="../images/roynaldo-jr.png" alt="roynaldo.png">
                                <div class="">
                                    <p class="text-[10px] lg:text-sm text-lightBlack font-normal lg:font-medium">
                                        Roynaldo Jr
                                    </p>
                                    <small class="block text-[10px] font-normal text-lightGray leading-[15px]">
                                        Data Science
                                    </small>
                                </div>
                            </div>
                            <div class="flex items-center space-x-2">
                                <img class="w-6 h-6 lg:w-auto lg:h-auto" src="../images/person.png" alt="person.png">
                                <div class="">
                                    <p class="text-[10px] lg:text-base text-lightBlack font-normal lg:font-medium">
                                        55
                                    </p>
                                    <small class="block text-[10px] font-normal text-lightGray leading-[15px]">
                                        Participant
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <button class="w-20 lg:w-24 bg-colorPrimary text-white rounded-md text-center text-xs font-semibold py-0.5 lg:py-3 leading-7">
                                Buy Now
                            </button>
                            <div class="">
                                <h4 class="text-base lg:text-2xl lg:leading-9 font-semibold text-lightBlack">
                                    $180 
                                    <span class="text-lightGray text-[8px] lg:text-xs leading-7">
                                    /20 Video
                                    </span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class=" ">
                    <div class="bg-card-three rounded-t-2xl">
                        <img 
                            class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border-[12px] border-white border-opacity-25 rounded-full cursor-pointer"
                            src="../svg/play-card.svg" alt="play.svg"
                        >
                    </div>
                    <div class="bg-white p-4 lg:pt-7 lg:px-7 lg:pb-4 rounded-b-2xl">
                        <h4 class="text-sm lg:text-2xl text-lightBlack lg:leading-9 font-semibold">
                            Create dynamic website with basic php
                        </h4>
                        <div class="flex items-center justify-between pt-5 pb-7 lg:pb-10">
                            <div class="flex items-center space-x-2">
                                <img class="w-8 h-8 lg:w-auto lg:h-auto" src="../images/markus.png" alt="roynaldo.png">
                                <div class="">
                                    <p class="text-[10px] lg:text-sm text-lightBlack font-normal lg:font-medium">
                                        Markus Low
                                    </p>
                                    <small class="block text-[10px] font-normal text-lightGray leading-[15px]">
                                        Programer
                                    </small>
                                </div>
                            </div>
                            <div class="flex items-center space-x-2">
                                <img class="w-6 h-6 lg:w-auto lg:h-auto" src="../images/person.png" alt="person.png">
                                <div class="">
                                    <p class="text-[10px] lg:text-base text-lightBlack font-normal lg:font-medium">
                                        98
                                    </p>
                                    <small class="block text-[10px] font-normal text-lightGray leading-[15px]">
                                        Participant
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <button class="w-20 lg:w-24 bg-colorPrimary text-white rounded-md text-center text-xs font-semibold py-0.5 lg:py-3 leading-7">
                                Buy Now
                            </button>
                            <div class="">
                                <h4 class="text-base lg:text-2xl lg:leading-9 font-semibold text-lightBlack">
                                    $135 
                                    <span class="text-lightGray text-[8px] lg:text-xs leading-7">
                                    /20 Video
                                    </span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class=" ">
                    <div class="bg-card-one rounded-t-2xl">
                        <img 
                            class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border-[12px] border-white border-opacity-25 rounded-full cursor-pointer"
                            src="../svg/play-card.svg" alt="play.svg"
                        >
                    </div>
                    <div class="bg-white p-4 lg:pt-7 lg:px-7 lg:pb-4 rounded-b-2xl">
                        <h4 class="text-sm lg:text-2xl text-lightBlack lg:leading-9 font-semibold">
                            Basic of learning team management
                        </h4>
                        <div class="flex items-center justify-between pt-5 pb-7 lg:pb-10">
                            <div class="flex items-center space-x-2">
                                <img class="w-8 h-8 lg:w-auto lg:h-auto" src="../images/jone-owel.png" alt="jone.png">
                                <div class="">
                                    <p class="text-[10px] lg:text-sm text-lightBlack font-normal lg:font-medium">
                                        Jone Owel
                                    </p>
                                    <small class="block text-[10px] font-normal text-lightGray leading-[15px]">
                                        IT Manager
                                    </small>
                                </div>
                            </div>
                            <div class="flex items-center space-x-2">
                                <img class="w-6 h-6 lg:w-auto lg:h-auto" src="../images/person.png" alt="person.png">
                                <div class="">
                                    <p class="text-[10px] lg:text-base text-lightBlack font-normal lg:font-medium">
                                        120
                                    </p>
                                    <small class="block text-[10px] font-normal text-lightGray leading-[15px]">
                                        Participant
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <button class="w-20 lg:w-24 bg-colorPrimary text-white rounded-md text-center text-xs font-semibold py-0.5 lg:py-3 leading-7">
                                Buy Now
                            </button>
                            <div class="">
                                <h4 class="text-base lg:text-2xl lg:leading-9 font-semibold text-lightBlack">
                                    $120 
                                    <span class="text-lightGray text-[8px] lg:text-xs leading-7">
                                    /25 Video
                                    </span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class=" ">
                    <div class="bg-card-two rounded-t-2xl">
                        <img 
                            class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border-[12px] border-white border-opacity-25 rounded-full cursor-pointer"
                            src="../svg/play-card.svg" alt="play.svg"
                        >
                    </div>
                    <div class="bg-white p-4 lg:pt-7 lg:px-7 lg:pb-4 rounded-b-2xl">
                        <h4 class="text-sm lg:text-2xl text-lightBlack lg:leading-9 font-semibold">
                            Learn basic database structure
                        </h4>
                        <div class="flex items-center justify-between pt-5 pb-7 lg:pb-10">
                            <div class="flex items-center space-x-2">
                                <img class="w-8 h-8 lg:w-auto lg:h-auto" src="../images/roynaldo-jr.png" alt="roynaldo.png">
                                <div class="">
                                    <p class="text-[10px] lg:text-sm text-lightBlack font-normal lg:font-medium">
                                        Roynaldo Jr
                                    </p>
                                    <small class="block text-[10px] font-normal text-lightGray leading-[15px]">
                                        Data Science
                                    </small>
                                </div>
                            </div>
                            <div class="flex items-center space-x-2">
                                <img class="w-6 h-6 lg:w-auto lg:h-auto" src="../images/person.png" alt="person.png">
                                <div class="">
                                    <p class="text-[10px] lg:text-base text-lightBlack font-normal lg:font-medium">
                                        55
                                    </p>
                                    <small class="block text-[10px] font-normal text-lightGray leading-[15px]">
                                        Participant
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <button class="w-20 lg:w-24 bg-colorPrimary text-white rounded-md text-center text-xs font-semibold py-0.5 lg:py-3 leading-7">
                                Buy Now
                            </button>
                            <div class="">
                                <h4 class="text-base lg:text-2xl lg:leading-9 font-semibold text-lightBlack">
                                    $180 
                                    <span class="text-lightGray text-[8px] lg:text-xs leading-7">
                                    /20 Video
                                    </span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class=" ">
                    <div class="bg-card-three rounded-t-2xl">
                        <img 
                            class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border-[12px] border-white border-opacity-25 rounded-full cursor-pointer"
                            src="../svg/play-card.svg" alt="play.svg"
                        >
                    </div>
                    <div class="bg-white p-4 lg:pt-7 lg:px-7 lg:pb-4 rounded-b-2xl">
                        <h4 class="text-sm lg:text-2xl text-lightBlack lg:leading-9 font-semibold">
                            Create dynamic website with basic php
                        </h4>
                        <div class="flex items-center justify-between pt-5 pb-7 lg:pb-10">
                            <div class="flex items-center space-x-2">
                                <img class="w-8 h-8 lg:w-auto lg:h-auto" src="../images/markus.png" alt="roynaldo.png">
                                <div class="">
                                    <p class="text-[10px] lg:text-sm text-lightBlack font-normal lg:font-medium">
                                        Markus Low
                                    </p>
                                    <small class="block text-[10px] font-normal text-lightGray leading-[15px]">
                                        Programer
                                    </small>
                                </div>
                            </div>
                            <div class="flex items-center space-x-2">
                                <img class="w-6 h-6 lg:w-auto lg:h-auto" src="../images/person.png" alt="person.png">
                                <div class="">
                                    <p class="text-[10px] lg:text-base text-lightBlack font-normal lg:font-medium">
                                        98
                                    </p>
                                    <small class="block text-[10px] font-normal text-lightGray leading-[15px]">
                                        Participant
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <button class="w-20 lg:w-24 bg-colorPrimary text-white rounded-md text-center text-xs font-semibold py-0.5 lg:py-3 leading-7">
                                Buy Now
                            </button>
                            <div class="">
                                <h4 class="text-base lg:text-2xl lg:leading-9 font-semibold text-lightBlack">
                                    $135 
                                    <span class="text-lightGray text-[8px] lg:text-xs leading-7">
                                    /20 Video
                                    </span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
  </section>
</template>

<style>

.bg-card-one {
    background-image: url("../images/card-one.png");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width: 100%;
    height: 165px;
}

.bg-card-two {
    background-image: url("../images/card-two.png");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width: 100%;
    height: 165px;
}

.bg-card-three {
    background-image: url("../images/card-three.png");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width: 100%;
    height: 165px;
}

.swiper-button-prev {
    width: 45px;
    height: 45px;
    background-color: white;
    border: 7px solid #F5F5F5;
    border-radius: 50%;
    transition: 0.4s all; 
}

.swiper-button-next {
    width: 45px;
    height: 45px;
    background-color: white;
    border: 7px solid #F5F5F5;
    border-radius: 50%;
    transition: 0.4s all; 
}

.swiper-button-prev:hover {
    background-color: #245D51;
}

.swiper-button-next:hover {
    background-color: #245D51;
}


.swiper-button-prev:after {
    content: '';
    font-family: '';
    background-image: url("../images/prev.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 15px;
    height: 13px;
    
}

.swiper-button-next:after {
    content: '';
    font-family: '';
    background-image: url("../images/next.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 15px;
    height: 13px;
}

.swiper-button-prev:hover:after {
    background-image: url("../svg/prev-white.svg"); 
}

.swiper-button-next:hover:after {
    background-image: url("../svg/next-white.svg"); 
}

.custom-swiper {
  padding: 0 60px; 
}

.custom-swiper .swiper-wrapper {
  overflow: visible; 
}

@media (min-width:375px) {
   
}

@media (min-width: 992px) {

    .bg-card-one, .bg-card-two, .bg-card-three{
        height: 250px;
    }

    .swiper-button-prev:after{
        background-image: url("../svg/prev-icon.svg");
        width: 34px;
        height: 34px;
    }

    .swiper-button-next:after {
        background-image: url("../svg/next-icon.svg");
        width: 34px;
        height: 34px;
    }

    .custom-swiper {
        padding: 0 40px;
        margin: 0 50px;
    }

    .swiper-button-prev {
        width: 67px;
        height: 67px;
    }

    .swiper-button-next {
        width: 67px;
        height: 67px;
    }
}

</style>