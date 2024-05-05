<!-- <script lang="ts">
	import type { ActionData } from '../../$types';

	let isLoading: boolean = false;
	let form: ActionData;
</script>

<form
	use:enhance
	method="post"
	action="/signup?/signup"
	class=" flex flex-col gap-4 mt-8 w-[80%] md:w-[50%] mx-auto"
>
	<h1 class="w-fit mx-auto text-xl italic font-semibold">signupFrom</h1>

	<div>
		<input
			type="text"
			name="name"
			placeholder="user name"
			class="px-2 py-1 outline-none text-black w-full"
			bind:value={data?.name ?? ''}
			{...$constraints.name}
		/>
		{#if error && 'nameError' in error}
			<p class="w-fit italic text-red-500">{error?.nameError}</p>
		{/if}
	</div>

	<div>
		<input
			type="email"
			name="email"
			placeholder=" user email"
			class="px-2 py-1 outline-none text-black w-full"
		/>
		{#if error && 'emailError' in error}
			<p class="w-fit italic text-red-500">{error?.emailError}</p>
		{/if}
	</div>
	<div>
		<input
			type="text"
			name="location"
			placeholder=" location"
			class="px-2 py-1 outline-none text-black w-full"
		/>
		{#if error && 'locationError' in error}
			<p class="w-fit italic text-red-500">{error?.locationError}</p>
		{/if}
	</div>
	<div>
		<input
			type="password"
			name="password"
			placeholder=" password"
			class="px-2 py-1 outline-none text-black w-full"
		/>
		{#if error && 'passwordError' in error}
			<p class="w-fit italic text-red-500">{error?.passwordError}</p>
		{/if}
	</div>
	<button disabled={isLoading} type="submit" class=" bg-orange-400 px-4 py-2 rounded-sm">
		Submit
		{#if isLoading}{/if}
	</button>
</form> -->
