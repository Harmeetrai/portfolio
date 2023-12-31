import type { SiteConfig } from './types';

export const siteConfig: SiteConfig = {
    author: 'Harmeet Rai',
    title: 'Harmeet Rai',
    description: 'Harmeet Rai\'s personal website',
	date: {
		locale: "en-GB",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
    includeViewTransitions: true
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "Blog",
		path: "/posts/",
	},
];

export const social = {
    gitHub: "https://github.com/Harmeetrai",
    linkedIn: "https://www.linkedin.com/in/harmeet-rai-914386147/",
    email: "mailto:harmeetrai18@gmail.com",
};