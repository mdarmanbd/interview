<script setup>
    

</script>

<template>
   <section class="w-full bg-colorPrimary">
        <div class="w-11/12 xl:w-container bg-colorPrimary m-auto pt-12 ">
            <div class="grid lg:grid-cols-2 lg:gap-5 xl:gap-24">
                <div class="text-center lg:text-start relative">
                    <h3 class="text-white text-3xl lg:text-5xl xl:text-6xl font-semibold leading-[42px] lg:leading-[80px] xl:leading-[90px]">
                        There is 
                        <span class="relative">
                            always 
                            <img class="absolute left-0 top-10 lg:top-16 xl:top-20" src="../images/underline.png" alt="underline.png">
                        </span> 
                        something new for us to learn
                    </h3>
                    <p class="pt-2 lg:pt-0 text-xs lg:text-lg text-white font-normal pb-8 leading-8 lg:leading-9 opacity-60">
                        we have created more than 100+ materials on various things that 
                        will help your career, with mentors who are experienced in their fields.
                    </p>
                    <div class="block lg:flex items-center space-x-5">
                        <div class="pb-8 lg:pb-0">
                            <button class="flex items-center justify-center w-52 m-auto py-3 text-base lg:text-xl font-semibold lg:font-bold text-white bg-colorSecondary rounded-md">
                                Start Journey
                               <img class="pl-4" src="../svg/angle-arrow.svg">
                            </button>
                        </div>
                        <ul class="flex items-center justify-center lg:justify-start space-x-4 pb-12 lg:pb-0">
                            <li>
                                <a href="#">
                                    <img src="../svg/instagram.svg">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="../svg/twitter.svg">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="../svg/discord.svg">
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="lg:hidden">
                        <a href="#" class="rotate-12 absolute -top-6 left-0 z-10 bg-colorCarcol w-9 h-9 rounded-md flex items-center justify-center">
                            <img src="../svg/pen.svg">
                        </a>

                        <a href="#" class="-rotate-12 absolute bottom-24 -left-2 z-10 bg-cyan-400 w-9 h-9 rounded-md flex items-center justify-center">
                            <img class="rotate-12" src="../svg/calendar.svg">
                        </a>

                        <a href="#" class="rotate-6 absolute bottom-8 right-0 z-10 bg-purple-700 w-9 h-9 rounded-md flex items-center justify-center">
                            <img src="../svg/play.svg">
                        </a>
                    </div>
                </div>
                <div class="hidden lg:block pt-10">
                   <div class="w-96 m-auto">
                    <div class="bg-hero">
                        <a href="#" class="rotate-12 absolute top-11 left-3 z-10 bg-colorCarcol w-12 h-12 rounded-md flex items-center justify-center">
                            <img src="../svg/pen.svg">
                        </a>
                        <a href="#" class="-rotate-6 absolute top-36 right-10 z-10 bg-purple-700 w-12 h-12 rounded-md flex items-center justify-center">
                            <img src="../svg/play.svg">
                        </a>
                        <a href="#" class="-rotate-12 absolute bottom-12 right-0 z-10 bg-cyan-400 w-12 h-12 rounded-md flex items-center justify-center">
                            <img class="rotate-12" src="../svg/calendar.svg">
                        </a>
                        <div class="absolute top-60 -left-24 rounded-md p-3 bg-whiteShadow w-56">
                            <div class="flex space-x-2">
                               <img class="w-10 h-10" src="../images/ui-designer.png" alt="ui.png">
                               <div class="flex-col">
                                    <p class="text-lightBlack text-xs font-semibold">
                                        Learn basic ui ux design
                                    </p>
                                    <small class="block text-[10px] text-lightBlack opacity-70">
                                        Today at 12 PM
                                    </small>
                                    <button class="mt-2 text-xs font-semibold text-white w-24 m-auto pt-1.5 pb-2 rounded-md bg-pink-500 leading-5">
                                        Join Now
                                    </button>
                               </div>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
   </section>
</template>


<style scoped>
.bg-hero{
    background-image: url("../images/hero-img.png");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width: 100%;
    height: 541px;
}


</style>
