import type { SiteConfig } from './types';

export const siteConfig: SiteConfig = {
    author: 'Harmeet Rai',
    title: 'Harmeet Ra',
    description: 'Harmeet Rai\'s personal website',
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
