// import { fail, type Actions, type ServerLoad } from '@sveltejs/kit';
// import { superValidate } from 'sveltekit-superforms/server';
// import { zod } from 'sveltekit-superforms/adapters';
// import { singupScheama } from '$lib/schema/signup';
// import { sign } from '$lib/helper/jwt';
// import { db } from '$lib/db.server';
// import { generate } from '$lib/helper/bcrypt';
// export const load: ServerLoad = async (event) => {
// 	const form = await superValidate(event, zod(singupScheama), { id: 'signup' });
// 	return {
// 		form
// 	};
// };
// export const actions: Actions = {
// 	default: async ({ request, locals, cookies }) => {
// 		const form = await superValidate(request, zod(singupScheama), { id: 'signup' });
// 		if (!form.valid) {
// 			return fail(400, { form });
// 		}
// 		const { name, email, location, password } = form.data;
// 		const HashedPassword = await generate(password);
// 		const user = await db.user.create({
// 			data: { name, email, location, password: HashedPassword, picture: '' }
// 		});
// 		const jwtToken = (await sign({ id: user.id })) as string;
// 		cookies.set('token', jwtToken, {
// 			httpOnly: true,
// 			maxAge: 24 * 60 * 60 * 1000,
// 			path: '/',
// 			sameSite: 'strict'
// 		});
// 		locals.user = { id: user.id, name, email, location };
// 		return { form };
// 	}
// };
