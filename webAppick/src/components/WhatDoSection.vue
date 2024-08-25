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
        const nextSlide = swiper.slides[swiper.activeIndex + 1];
        if (nextSlide) {
            nextSlide.style.backgroundColor = 'white';
        }
      };
      const onSlideChange = (swiper) => {
        swiper.slides.forEach(slide => {
            slide.style.backgroundColor = '';
        });

        const nextSlide = swiper.slides[swiper.activeIndex + 1];

        if (nextSlide) {
            nextSlide.style.backgroundColor = 'red !importen';
        }

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
  <section class="w-full pt-16 lg:pt-20 lg:pb-20 bg-offWhiteCream relative">
    <div class="w-11/12 xl:w-container m-auto">
        <div class="pb-12 text-center ">
            <img class="lg:hidden absolute top-14 left-7 w-9 h-9" src="../images/right-angle-green.png" alt="right.png">
            <img class="lg:hidden absolute top-20 right-9" src="../images/green-circule.png" alt="green-circule.png">
            <h2 class="text-lg lg:text-4xl font-semibold text-lightBlack lg:leading-[54px] pb-5 lg:pb-2.5">
                What do they 
                <span class="text-colorSecondary">
                    say?
                </span>
            </h2>
            <P class="w-64 m-auto lg:w-full text-xs lg:text-base leading-8 lg:leading-9 text-lightGray">
                This is an honest review from members who have joined us
            </P>
        </div>
       

        <div class=" ">

            <swiper
            :modules="modules"
            :space-between="0"
            navigation
            :pagination="{ clickable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :breakpoints="{ 

                375:{
                        slidesPerView: 1,
                        spaceBetween: 0,
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
            class="my-swiper "    
        >
            <swiper-slide>
                <div class="p-8 lg:px-12 lg:pt-12 lg:pb-4">
                    <img class="m-auto" src="../images/jason.png" alt="jason.png">
                    <ul class="flex items-center justify-center space-x-2 pt-3 pb-5 lg:pt-4 lg:pb-6">
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                    </ul>
                    <h4 class="text-center text-lg lg:text-2xl text-lightBlack lg:leading-9 font-normal pb-2.5">
                        Jason Bay
                    </h4>
                    <p class="text-center text-lightGray text-xs lg:text-base leading-7 lg:leading-9">
                        I am quite satisfied, because the skills I want or dream of can really be mastered
                    </p>
                </div>
            </swiper-slide>

            <swiper-slide>
                <div class="px-8 py-8 lg:py-0 lg:px-12 lg:pt-12 lg:pb-4">
                    <img class="m-auto" src="../images/nany.png" alt="nany.png">
                    <ul class="flex items-center justify-center space-x-2 pt-3 pb-5 lg:pt-4 lg:pb-6">
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                    </ul>
                    <h4 class="text-center text-lg lg:text-2xl text-lightBlack lg:leading-9 font-normal pb-2.5">
                        Nany Brugman
                    </h4>
                    <p class="text-center text-lightGray text-xs lg:text-base leading-7 lg:leading-9">
                        I am quite satisfied, because the skills I want or dream of can really be mastered
                    </p>
                </div>
            </swiper-slide>


           
            <swiper-slide>
                <div class="px-8 py-8 lg:py-0 lg:px-12 lg:pt-12 lg:pb-4">
                    <img class="m-auto" src="../images/alexa.png" alt="alexa.png">
                    <ul class="flex items-center justify-center space-x-2 pt-3 pb-5 lg:pt-4 lg:pb-6">
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                    </ul>
                    <h4 class="text-center text-lg lg:text-2xl text-lightBlack lg:leading-9 font-normal pb-2.5">
                        Alexa Nowan
                    </h4>
                    <p class="text-center text-lightGray text-xs lg:text-base leading-7 lg:leading-9">
                        I am quite satisfied, because the skills I want or dream of can really be mastered
                    </p>
                </div>
            </swiper-slide>

           

            <swiper-slide>
                <div class="px-8 py-8 lg:py-0 lg:px-12 lg:pt-12 lg:pb-4">
                    <img class="m-auto" src="../images/jason.png" alt="jason.png">
                    <ul class="flex items-center justify-center space-x-2 pt-3 pb-5 lg:pt-4 lg:pb-6">
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                    </ul>
                    <h4 class="text-center text-lg lg:text-2xl text-lightBlack lg:leading-9 font-normal pb-2.5">
                        Jason Bay
                    </h4>
                    <p class="text-center text-lightGray text-xs lg:text-base leading-7 lg:leading-9">
                        I am quite satisfied, because the skills I want or dream of can really be mastered
                    </p>
                </div>
            </swiper-slide>


            <swiper-slide>
                <div class="px-8 py-8 lg:py-0 lg:px-12 lg:pt-12 lg:pb-4">
                    <img class="m-auto" src="../images/nany.png" alt="nany.png">
                    <ul class="flex items-center justify-center space-x-2 pt-3 pb-5 lg:pt-4 lg:pb-6">
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                    </ul>
                    <h4 class="text-center text-lg lg:text-2xl text-lightBlack lg:leading-9 font-normal pb-2.5">
                        Nany Brugman
                    </h4>
                    <p class="text-center text-lightGray text-xs lg:text-base leading-7 lg:leading-9">
                        I am quite satisfied, because the skills I want or dream of can really be mastered
                    </p>
                </div>
            </swiper-slide>

            
            <swiper-slide>
                <div class="px-8 py-8 lg:py-0 lg:px-12 lg:pt-12 lg:pb-4">
                    <img class="m-auto" src="../images/alexa.png" alt="alexa.png">
                    <ul class="flex items-center justify-center space-x-2 pt-3 pb-5 lg:pt-4 lg:pb-6">
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                        <li>
                            <img class="w-3 h-3" src="../svg/star.svg" alt="star.svg">
                        </li>
                    </ul>
                    <h4 class="text-center text-lg lg:text-2xl text-lightBlack lg:leading-9 font-normal pb-2.5">
                        Alexa Nowan
                    </h4>
                    <p class="text-center text-lightGray text-xs lg:text-base leading-7 lg:leading-9">
                        I am quite satisfied, because the skills I want or dream of can really be mastered
                    </p>
                </div>
            </swiper-slide>


            </swiper>
        </div>

    </div>
  </section>
</template>

<style>

.my-swiper {
  padding: 0 0;
  position: relative;
}


.my-swiper .swiper-button-prev {
    width: 45px;
    height: 45px;
    background-color: white;
    border: 7px solid #F5F5F5;
    border-radius: 50%;
    transition: 0.4s all;
    position: absolute;
    top: 85%;
    left: 36%;
}

.my-swiper .swiper-slide-next{
    background-color: transparent !important;
    position: relative;
    
}

.my-swiper .swiper-slide-active{
    background-color: white !important;
    position: relative;
}

.my-swiper .swiper-slide-active::before{
    content: '';
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 100%;
    height: 6px;
    background-color: #245D51;
    border-radius: 10px;
}

.my-swiper .swiper-button-next {
    width: 45px;
    height: 45px;
    background-color: white;
    border: 7px solid #F5F5F5;
    border-radius: 50%;
    transition: 0.4s all;
    position: absolute;
    top: 85%;
    right: 36%;
}

.my-swiper .swiper-button-prev:hover {
    background-color: #CB8461;
}

.my-swiper .swiper-button-next:hover {
    background-color: #CB8461;
}


.my-swiper .swiper-button-prev:after {
    content: '';
    font-family: '';
    background-image: url("../images/prev.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 15px;
    height: 13px;
    
}

.my-swiper .swiper-button-next:after {
    content: '';
    font-family: '';
    background-image: url("../images/next.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 15px;
    height: 13px;
}

.my-swiper .swiper-button-prev:hover:after {
    background-image: url("../svg/prev-white.svg"); 
}

.my-swiper .swiper-button-next:hover:after {
    background-image: url("../svg/next-white.svg"); 
}

.my-swiper .swiper-slide-next {
    background-color: white !important;
}

.my-swiper .swiper-wrapper {
  overflow: visible;
  margin-bottom: 100px;
}

@media (min-width:375px) {
   
}

@media (min-width:768px) {

    .my-swiper .swiper-button-prev {
        left: 43%;
    }

    .my-swiper .swiper-button-next {
        right: 43%;
    }

}


@media (min-width: 992px) {

    .my-swiper .swiper-slide-active{
        background-color: transparent !important;
        position: relative;
    }

    .my-swiper .swiper-slide-active::before{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 0;
        background-color: transparent;
        border-radius: 0;
    }

    .my-swiper .swiper-slide-next{
        background-color: white !important;
        position: relative;
        
    }

    .my-swiper .swiper-slide-next::before{
        content: '';
        position: absolute;
        bottom: 2px;
        left: 0;
        width: 100%;
        height: 6px;
        background-color: #245D51;
        border-radius: 10px;
    }

    .my-swiper .swiper-button-prev:after{
        background-image: url("../svg/prev-icon.svg");
        width: 34px;
        height: 34px;
    }

    .my-swiper .swiper-button-next:after {
        background-image: url("../svg/next-icon.svg");
        width: 34px;
        height: 34px;
    }

    .my-swiper .custom-swiper {
        padding: 0 40px;
        margin: 0 50px;
    }

    .my-swiper .swiper-button-prev {
        width: 67px;
        height: 67px;
        top: 85%;
        left: 40%;
    }

    .my-swiper .swiper-button-next {
        width: 67px;
        height: 67px;
        top: 85%;
        right: 40%;
    }
}


@media (min-width:1280px) {

    .my-swiper .swiper-button-prev {
        left: 44%;
    }

    .my-swiper .swiper-button-next {
        right: 44%;
    }

}

</style>