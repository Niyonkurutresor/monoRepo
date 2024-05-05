import type { ServerLoad } from '@sveltejs/kit';

const Projects = [
	{
		title: 'first project',
		description:
			'this project is an ecommerce project that should help user to levelup the working conditions',
		picture: 'https://cloudinary/niyonkuru/iejf2302ruw/i3jfsr2984832',
		ratings: 5
	}
];

export const load: ServerLoad = () => {
	return {
		Projects
	};
};
