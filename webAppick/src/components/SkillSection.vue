<script>

</script>

<template>
  <section class="w-full lg:py-24">
    <div class="w-11/12 xl:w-[1142px] m-auto ">
        <div class="w-full flex justify-between gap-36">
          	<div class="lg:w-[457px] h-[570px] flex flex-col justify-end relative">
              	<div class="bg-skill">
					<img class="absolute bottom-0 left-0 w-full h-auto" src="../images/skill-img.png" alt="skill.png">
					<a href="#" class="-rotate-3 absolute top-16 left-2 z-10 bg-purple-700 w-12 h-12 rounded-md flex items-center justify-center">
						<img src="../svg/play.svg">
					</a>
					<a href="#" class="-rotate-12 absolute bottom-52 -left-3 z-10 bg-cyan-400 w-12 h-12 rounded-md flex items-center justify-center">
						<img class="rotate-12" src="../svg/calendar.svg">
					</a>
					<a href="#" class="rotate-12 absolute top-28 right-3 z-10 bg-colorCarcol w-12 h-12 rounded-md flex items-center justify-center">
					<img src="../svg/pen.svg">
					</a>
					<div class="absolute bottom-14 right-6 rounded-md p-3 bg-whiteShadow w-56">
						<div class="flex space-x-2">
							<img class="w-10 h-10" src="../images/skill-designer.png" alt="skill.png">
							<div class="flex-col">
								<p class="text-lightBlack text-xs font-semibold">
									How to build a team
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
         <div class="lg:w-[535px]">
			<h1 class="text-5xl text-lightBlack font-bold leading-[72px] pb-9">
				Let us 
				<span class="text-colorPrimary relative">
					Skill Shoot
					<img class="absolute -bottom-2 left-0" src="../images/skill-underline.png" alt="skill-underline.png">
				</span> 
			</h1>
			<p class="text-base leading-9 font-normal text-lightGray pb-6">
				We are a company engaged in education with the aim of improving the skills of many people and so that younger people can reach the career paths they want.
			</p>
			<p class="text-base leading-9 font-normal text-lightGray pb-9">
				we have been around since 2019 with currently 100+ updated materials and 15K members who have joined.
			</p>
         </div>
        </div>
    </div>
  </section>
</template>


<style>
.bg-skill {
    background-image: url("../images/rectangle.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    /* position: relative; */
    width: 100%;
    height: 338px;
}
</style>