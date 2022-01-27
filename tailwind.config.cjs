module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	content: [],
	theme: {
		extend: {
			colors: {
				'bg-gray': '#D9DCD9',
				'bg-primary': '#332B28',
				'bg-secondary': '#9A7860',
				'bg-accent': '#C8A584',
				'pr-accent': '#FDDCC4',
			},
		},
	},
	plugins: []
};
