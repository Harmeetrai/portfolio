import type { SiteConfig } from './types';

export const siteConfig: SiteConfig = {
    author: 'Harmeet Rai',
    title: 'Harmeet Ra',
    description: 'Harmeet Rai\'s personal website',
    includeViewTransitions: true
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "About",
		path: "/about/",
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