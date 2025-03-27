export interface NavigationLinkItem {
	text: string;
	url: string;
}

export const NavigationLinks: NavigationLinkItem[] = [
	{ text: 'Home', url: '/' },
	{ text: 'About', url: '/about' },
	// { text: 'Services', url: '/services' },
	// { text: 'Portfolio', url: '/portfolio' },
	{ text: 'Pricing', url: '/pricing' },
	{ text: 'Contact', url: '/contact' },
];

export const CtaLink: NavigationLinkItem = { text: 'Contact', url: '/contact' };
