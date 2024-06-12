import { loginSchema } from '$lib/schema/loginSchema';
import type { ServerLoad } from '@sveltejs/kit';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate } from 'sveltekit-superforms/server';

export const load: ServerLoad = async (event) => {
	const form = await superValidate(event, zod(loginSchema));
	return {
		form
	};
};
