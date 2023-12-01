export type SiteConfig = {
    author: string;
    title: string;
    description: string;
    date: {
		locale: string | string[] | undefined;
		options: Intl.DateTimeFormatOptions;
	};
    includeViewTransitions: boolean;
};

export type SiteMetadata = {
    title: string;
    description?: string;
}

export type PaginationLink = {
	url: string;
	text?: string;
	srLabel?: string;
};
