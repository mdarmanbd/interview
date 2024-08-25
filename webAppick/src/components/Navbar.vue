<script setup>
import { ref } from 'vue';

const colosMenu = ref(true);

const togolMenu = () => {
    colosMenu.value = !colosMenu.value;
}

const colosMobileMenu = () => {
    colosMenu.value = true;
}

</script>

<template>
    <header>
        <div class="w-full bg-colorPrimary">
            <div class="hidden sm:hidden md:flex md:w-11/12 lg:w-11/12 xl:w-container m-auto pt-4 lg:pt-6 items-center justify-between bg-colorPrimary">
                <a href="#">
                    <img class="w-28 lg:w-32 h-auto" src="../images/Logo.png">
                </a>
                <div class="">
                    <ul class="py-2 flex md:space-x-3 lg:space-x-8">
                        <li>
                            <a href="#" class="text-white text-base lg:text-lg capitalize">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-white text-base lg:text-lg capitalize opacity-50 duration-150 hover:opacity-100">
                                Course
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-white text-base lg:text-lg capitalize opacity-50 duration-150 hover:opacity-100">
                                Subscribe
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-white text-base lg:text-lg capitalize opacity-50 duration-150 hover:opacity-100">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-white text-base lg:text-lg capitalize opacity-50 duration-150 hover:opacity-100">
                                Testimoni
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="flex space-x-5">
                    <button class="text-base lg:text-lg text-white w-24 m-auto py-1.5 duration-150 rounded-md hover:bg-colorSecondary">
                        Login 
                    </button>
                    <button class="text-base lg:text-lg text-white bg-colorSecondary md:w-20 lg:w-40 m-auto py-1.5 duration-150 rounded-md">
                        Register
                    </button>
                </div>
            </div>

            <!---- Mobile menu start  ---->
            <div class="block md:hidden">
                <div class="flex w-11/12 m-auto items-center justify-between pt-4">
                    <img class="w-28 h-auto" src="../images/Logo.png">
                    <img @click="togolMenu()" src="../svg/humburger.svg">
                </div>
                <div :class="[colosMenu ? 'left-[-100%]' : 'left-0']" class="fixed top-0 h-screen duration-300 w-full bg-blackShow z-20">
                    <div class="bg-colorPrimary w-10/12 h-screen px-5">
                        <div class="flex items-center justify-between py-4">
                            <img class="w-28 h-auto" src="../images/Logo.png">
                            <img @click="colosMobileMenu()" class=" " src="../svg/close.svg">
                        </div>
                        <div class="">
                            <ul class="space-y-4 ">
                                <li>
                                    <a href="#" class="text-white text-base capitalize">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-white text-base capitalize">
                                        Course
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-white text-base capitalize">
                                        Subscribe
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-white text-base capitalize">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="text-white text-base capitalize">
                                        Testimoni
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!---- Mobile menu end  ---->
        </div>
    </header>
</template>


<style scoped>


</style>
