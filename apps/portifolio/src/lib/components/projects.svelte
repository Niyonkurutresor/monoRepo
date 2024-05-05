<script>
	import ProjectCard from './projectCard.svelte';

	export let Projects = [
		{
			title: 'Project 1',
			picture: 'project1.jpg',
			description: 'This is the description of Project 1.',
			ratings: 4.5,
			tags: ['React', 'Node.js', 'MongoDB'],
			liveLink: 'https://example.com/project1',
			codeLink: 'https://github.com/example/project1'
		},
		{
			title: 'Project 2',
			picture: 'project2.jpg',
			description: 'This is the description of Project 2.',
			ratings: 4.2,
			tags: ['Vue.js', 'Express', 'PostgreSQL'],
			liveLink: 'https://example.com/project2',
			codeLink: 'https://github.com/example/project2'
		},
		{
			title: 'Project 3',
			picture: 'project3.jpg',
			description: 'This is the description of Project 3.',
			ratings: 4.8,
			tags: ['Angular', 'Laravel', 'MySQL'],
			liveLink: 'https://example.com/project3',
			codeLink: 'https://github.com/example/project3'
		},
		{
			title: 'Project 4',
			picture: 'project4.jpg',
			description: 'This is the description of Project 4.',
			ratings: 4.3,
			tags: ['React', 'Django', 'PostgreSQL'],
			liveLink: 'https://example.com/project4',
			codeLink: 'https://github.com/example/project4'
		},
		{
			title: 'Project 5',
			picture: 'project5.jpg',
			description: 'This is the description of Project 5.',
			ratings: 4.6,
			tags: ['Vue.js', 'Express', 'MongoDB'],
			liveLink: 'https://example.com/project5',
			codeLink: 'https://github.com/example/project5'
		},
		{
			title: 'Project 6',
			picture: 'project6.jpg',
			description: 'This is the description of Project 6.',
			ratings: 4.7,
			tags: ['Angular', 'Laravel', 'MySQL'],
			liveLink: 'https://example.com/project6',
			codeLink: 'https://github.com/example/project6'
		},
		{
			title: 'Project 7',
			picture: 'project7.jpg',
			description: 'This is the description of Project 7.',
			ratings: 4.9,
			tags: ['React', 'Django', 'PostgreSQL'],
			liveLink: 'https://example.com/project7',
			codeLink: 'https://github.com/example/project7'
		}
	];

	let showMoreProjects = false;
	const maxProjects = 6;
</script>

<section class="mt-[10vh] lg:mt-[15vh] w-full">
	<div class="mt-[10vh] w-full">
		<h1 class="text-4xl xl:text-6xl font-bold w-fit mx-auto mb-8">Projects</h1>
		<div
			class="px-8 py-8 w-full bg-gradient-to-tr from-blue-500 to-blue-300 text-white rounded-lg shadow-lg"
		>
			<div class="w-full mx-auto text-center">
				<p class="text-lg">
					Here's a selection of the projects I've worked on, showcasing my expertise in creating
					innovative and user-friendly software solutions.
				</p>
				<!-- projects -->
				<div class="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{#each Projects.slice(0, showMoreProjects ? Projects.length : maxProjects) as project}
						<ProjectCard cardData={project} />
					{:else}
						<p>No projects to display.</p>
					{/each}
				</div>
				{#if Projects.length > maxProjects}
					<button
						class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
						on:click={() => (showMoreProjects = !showMoreProjects)}
					>
						{showMoreProjects ? 'Show Less' : 'View More'}
					</button>
				{/if}
			</div>
		</div>
	</div>
</section>
