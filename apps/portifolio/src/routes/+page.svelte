<script lang="ts">
	import Button from '$lib/components/button.svelte';
	import myPic from '$lib/assets/myPic.jpg';
	import ProjectIworkedON from '$lib/components/projects.svelte';
	import Testimonials from '$lib/components/testimonials.svelte';
	import { AwardIcon, BriefcaseIcon, CodeIcon, UserCheckIcon } from 'svelte-feather-icons';
	import type { PageData } from './$types';
	import HireMe from '$lib/components/HireMe.svelte';
	import { fade } from 'svelte/transition';
	export let data: PageData;
	$: project = data.projects;
</script>

<div class=" h-fit mb-[10vh] w-full">
	<section
		in:fade
		class="mb-4 flex lg:px-16 lg:pt-[10vh] xl:pt-[10vh] flex-col gap-4 lg:gap-8 md:flex-row lg:justify-start w-full"
	>
		<!-- first section -->
		<div
			class="mt-8 lg:mt-0 flex flex-col gap-6 items-center md:text-start px-8 md:w-[60%] md:items-start lg:justify-center"
		>
			<h1 class=" text-4xl xl:text-6xl font-bold">Crafting Innovative Software Solutions</h1>
			<p class=" text-lg xl:text-2xl">
				Hi, I'm <b>NIYONKURU Tresor</b>, a <b>Software developer</b>. As a skilled software
				developer, I specialize in creating modern, responsive, and user-friendly applications that
				solve complex problems. Explore my portfolio to see the impact I've made for my clients.
			</p>
			<div class=" flex gap-6">
				<Button>Explore My Work</Button>
				<Button>Hire Me</Button>
			</div>
		</div>
		<div class=" md:w-[40%] flex items-center justify-center">
			<img src={myPic} class=" w-[60%]" alt="profile" />
		</div>
	</section>

	<section class="px-8 lg:px-20 mt-[10vh] lg:mt-[15vh]">
		<h1 class=" text-4xl xl:text-6xl font-bold w-fit mx-auto lg:mx-0">About Me</h1>
		<div
			class="mt-8 flex lg:pt-[10vh] xl:pt-[10vh] flex-col gap-4 lg:gap-8 md:flex-row lg:justify-start w-full"
		>
			<div
				class="md:order-2 order-1 flex flex-col gap-6 items-center md:text-start md:w-[50%] md:items-start lg:justify-center"
			>
				<h1 class="text-2xl xl:text-3xl font-bold">
					<span class="gradi">About Me</span>
				</h1>

				<p class="text-lg">
					As a passionate and experienced software developer, I take pride in crafting elegant,
					efficient, and user-centered solutions that drive real business impact. With a strong
					foundation in computer science and a keen eye for detail, I specialize in developing
					robust and scalable web and mobile applications using the latest technologies and best
					practices.
				</p>

				<div class="flex gap-6">
					<div class="bg-orange-300 flex items-center p-4 rounded-lg">
						<CodeIcon class="w-8 h-8" />
					</div>
					<div>
						<h2 class="mb-2 text-xl font-semibold capitalize">Versatile Skill Set</h2>
						<p>
							Proficient in a wide range of programming languages and frameworks, including
							JavaScript, React, Node.js, and Python. Experienced in full-stack development,
							database management, and cloud infrastructure.
						</p>
					</div>
				</div>

				<div class="flex gap-6">
					<div class="bg-orange-300 flex items-center p-4 rounded-lg">
						<UserCheckIcon class="w-8 h-8" />
					</div>
					<div>
						<h2 class="mb-2 text-xl font-semibold capitalize">Collaborative Approach</h2>
						<p>
							Skilled in working within cross-functional teams, I thrive on collaborating with
							designers, project managers, and stakeholders to deliver high-quality solutions that
							meet and exceed business requirements.
						</p>
					</div>
				</div>

				<div class="flex gap-6">
					<div class="bg-orange-300 flex items-center p-4 rounded-lg">
						<AwardIcon class="w-8 h-8" />
					</div>
					<div>
						<h2 class="mb-2 text-xl font-semibold capitalize">Continuous Learning</h2>
						<p>
							I am passionate about staying up-to-date with the latest industry trends and
							technologies. I consistently invest time in self-improvement, attending conferences,
							and participating in online courses and coding challenges to expand my knowledge and
							skills.
						</p>
					</div>
				</div>

				<div class="flex gap-6">
					<div class="bg-orange-300 flex items-center p-4 rounded-lg">
						<BriefcaseIcon class="w-8 h-8" />
					</div>
					<div>
						<h2 class="mb-2 text-xl font-semibold capitalize">Proven Track Record</h2>
						<p>
							Throughout my career, I have successfully delivered numerous projects for diverse
							clients, consistently demonstrating my ability to translate complex requirements into
							functional and visually appealing applications.
						</p>
					</div>
				</div>
			</div>
			<div class=" md:order-1 order-2 md:w-[40%] flex items-center justify-center">
				<img src={myPic} class=" w-[60%]" alt="profile" />
			</div>
		</div>
	</section>

	<!-- projects -->
	<ProjectIworkedON />
	<!-- Hire me -->
	<HireMe />
	<!-- testmonials -->
	<Testimonials />
</div>
