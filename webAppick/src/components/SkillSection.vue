<script>

</script>

<template>
  <section class="w-full lg:py-24 lg:pt-44">
    <div class="w-full lg:w-11/12 xl:w-[1142px] m-auto">
        <div class="w-full flex justify-between gap-36">
          	<div class="hidden lg:flex flex-col justify-end lg:w-[457px] h-[570px] relative">
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
         <div class="w-full py-12 pl-12 pr-7 lg:pr-0 lg:pl-0 lg:py-0 lg:w-[535px]">
			<h1 class="text-xl lg:text-5xl text-lightBlack font-bold lg:leading-[72px] pb-5 lg:pb-9">
				Let us 
				<span class="text-colorPrimary relative">
					Skill Shoot
					<img class="absolute -bottom-2 left-0" src="../images/skill-underline.png" alt="skill-underline.png">
				</span> 
			</h1>
			<p class="text-xs lg:text-base leading-7 lg:leading-9 font-normal text-lightGray pb-2.5 lg:pb-6">
				We are a company engaged in education with the aim of improving the skills of many people and so that younger people can reach the career paths they want.
			</p>
			<p class="text-xs lg:text-base leading-7 lg:leading-9 font-normal text-lightGray pb-8 lg:pb-9">
				we have been around since 2019 with currently 100+ updated materials and 15K members who have joined.
			</p>
			<div class="grid grid-cols-2 gap-5 lg:gap-8">
				<div class="flex items-center space-x-2.5 lg:space-x-4">
					<img class="bg-lightPink rounded-full w-7 h-7 lg:w-12 lg:h-12 p-1.5 lg:p-3" src="../svg/people.svg" alt="people.svg">
					<h2 class="text-xs lg:text-base font-semibold leading-8 lg:leading-9 text-lightBlack">
						15k People Join
					</h2>
				</div>
				<div class="flex items-center space-x-2.5 lg:space-x-4">
					<img class="bg-lightPink rounded-full w-7 h-7 lg:w-12 lg:h-12 p-1.5 lg:p-3" src="../svg/selectPerson.svg" alt="selectPerson.svg">
					<h2 class="text-xs lg:text-base font-semibold leading-8 lg:leading-9 text-lightBlack">
						Trusted Mentor
					</h2>
				</div>
				<div class="flex items-center space-x-2.5 lg:space-x-4">
					<img class="bg-lightPink rounded-full w-7 h-7 lg:w-12 lg:h-12 p-1.5 lg:p-3" src="../svg/camera.svg" alt="camera.svg">
					<h2 class="text-xs lg:text-base font-semibold leading-8 lg:leading-9 text-lightBlack">
						30+ Free Videos
					</h2>
				</div>
				<div class="flex items-center space-x-2.5 lg:space-x-4">
					<img class="bg-lightPink rounded-full w-7 h-7 lg:w-12 lg:h-12 p-1.5 lg:p-3" src="../svg/playSkill.svg" alt="playSkill.svg">
					<h2 class="text-xs lg:text-base font-semibold lg:leading-9 text-lightBlack">
						100+ Premium Videos
					</h2>
				</div>
			</div>
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