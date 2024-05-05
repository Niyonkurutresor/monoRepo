<script lang="ts">
	import { SliceText } from '$lib/helper/sliceText';

	export let cardData: {
		title: string;
		picture: string;
		description: string;
		ratings: number;
		tags: string[];
		liveLink?: string;
		codeLink?: string;
	};

	const { title, picture, tags, description, ratings, liveLink, codeLink } = cardData;
	const desc = SliceText(description, 150);
	const tit = SliceText(title, 30);
</script>

<div
	class="card-container w-[18rem] h-[27rem] min-h-fit bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
>
	<div class="w-full h-[50%]">
		<img class="w-full h-full object-cover" src={picture} alt={title} />
	</div>
	<div class="p-4">
		<h1 class="text-xl font-semibold text-gray-800 mb-2">{tit}</h1>
		<p class="text-sm text-gray-600 mb-2">{desc}</p>
		<div class="flex items-center mb-2">
			<span class="text-yellow-500 mr-1">
				{Array.from({ length: Math.round(ratings) }, (_, index) => '★')}
				{Array.from({ length: 5 - Math.round(ratings) }, (_, index) => '☆')}
			</span>
			<span class="text-gray-600">{ratings}/5</span>
		</div>
		<div class="flex flex-wrap">
			{#each tags as tag}
				<span class="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs mr-1 mb-1">{tag}</span
				>
			{/each}
		</div>
		<div class="flex justify-center mt-4">
			{#if liveLink}
				<a
					href={liveLink}
					target="_blank"
					rel="noopener noreferrer"
					class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 mr-2"
				>
					Live Demo
				</a>
			{/if}
			{#if codeLink}
				<a
					href={codeLink}
					target="_blank"
					rel="noopener noreferrer"
					class="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
				>
					View Code
				</a>
			{/if}
		</div>
	</div>
</div>
