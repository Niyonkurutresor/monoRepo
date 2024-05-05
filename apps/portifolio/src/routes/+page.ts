import type { Load } from '@sveltejs/kit';

export const load: Load = ({ data }) => {
	return {
		title: 'home',
		projects: data
	};
};
