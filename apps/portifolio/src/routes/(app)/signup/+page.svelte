<script lang="ts">
	import { zod } from 'sveltekit-superforms/adapters';
	import type { ActionData, PageData } from '../$types';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import { singupScheama } from '$lib/schema/signup';

	export let data: PageData;
	const { form, errors, enhance, constraints, message, delayed } = superForm(data.form, {
		taintedMessage: 'Your data are not saved.',
		validators: zod(singupScheama)
	});
	$: console.log($errors);
	let isLoading: boolean = false;
</script>

<h1>hello</h1>
{#if $message}<h3>{$message}</h3>{/if}

<SuperDebug data={$form} />
<form
	use:enhance
	method="post"
	action=""
	class=" flex flex-col gap-4 mt-8 w-[80%] md:w-[50%] mx-auto"
>
	<h1 class="w-fit mx-auto text-xl italic font-semibold">signupFrom</h1>

	<div>
		<input
			type="text"
			name="name"
			placeholder="user name"
			class="px-2 py-1 outline-none text-black w-full"
			bind:value={$form.name}
		/>
		{#if $errors.name}
			<p class="w-fit italic text-red-500">{$errors.name}</p>
		{/if}
	</div>

	<div>
		<input
			type="email"
			name="email"
			placeholder=" user email"
			class="px-2 py-1 outline-none text-black w-full"
			bind:value={$form.email}
			{...$constraints.email}
		/>
		{#if $errors.email}
			<p class="w-fit italic text-red-500">{$errors.email ?? ''}</p>
		{/if}
	</div>
	<div>
		<input
			type="text"
			name="location"
			placeholder=" location"
			class="px-2 py-1 outline-none text-black w-full"
			bind:value={$form.location}
		/>
		{#if $errors.location}
			<p class="w-fit italic text-red-500">{$errors.location ?? ''}</p>
		{/if}
	</div>
	<div>
		<input
			type="password"
			name="password"
			placeholder=" password"
			class="px-2 py-1 outline-none text-black w-full"
			bind:value={$form.password}
		/>
		{#if $errors.password}
			<p class="w-fit italic text-red-500">{$errors.password ?? ''}</p>
		{/if}
	</div>
	<div>
		<input
			type="password"
			name="confirmPassword"
			placeholder=" confirmPassword"
			class="px-2 py-1 outline-none text-black w-full"
			bind:value={$form.confirmPassword}
		/>
		{#if $errors.confirmPassword}
			<p class="w-fit italic text-red-500">{$errors.confirmPassword ?? ''}</p>
		{/if}
	</div>
	<button disabled={isLoading} type="submit" class=" bg-orange-400 px-4 py-2 rounded-sm">
		Submit
		{#if $delayed}
			<span>...</span>
		{/if}
	</button>
</form>
