<script lang="ts">
	import { page } from '$app/stores';
	import Button from './button.svelte';
	$: Them = $page.data.Them;
</script>

<nav class=" hidden md:flex justify-between w-[80%] min-w-fit">
	<ul class=" w-[50%] flex justify-between gap-2 min-w-fit font-semibold items-center">
		<a href="/">
			<li>Home</li>
		</a>
		<a href="/">
			<li>About</li>
		</a>
		<a href="/">
			<li>Projects</li>
		</a>
		<a href="/">
			<li>Contact</li>
		</a>
	</ul>

	<div class=" flex gap-4 text-lg font-semibold">
		<button
			class=" w-fit px-4 py-1 border-blue-500 border-[2px] rounded-lg hover:bg-gradient-to-tl hover:from-blue-300 hover:to-blue-500 duration-300"
		>
			Sign in
		</button>

		<Button>Hire me</Button>
	</div>
</nav>
