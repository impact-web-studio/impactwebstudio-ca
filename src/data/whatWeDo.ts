export interface WhatWeDoItem {
	icon: string;
	title: string;
	description: string;
}

const WhatWeDo: WhatWeDoItem[] = [
	{
		icon: 'mobile',
		title: 'mobile-first design',
		description:
			'Your website should look stunning everywhere. We craft sleek, modern websites built from the ground up for mobile users—because over 60% of your visitors are browsing on their phones.',
	},
	{
		icon: 'responsive',
		title: 'fully responsive',
		description:
			'Flawless performance on any device. Your website will automatically adapt to desktops, tablets, and mobile screens, ensuring a smooth and consistent experience. No more awkward layouts, cut-off text, or frustrating navigation — just a perfect fit every time.',
	},
	{
		icon: 'pageSpeedOptimized',
		title: 'page speed optimized',
		description:
			'A slow website costs you money. Every second of delay causes visitors to leave your site. We ensure your site loads blazing fast with optimized code, image compression, and best-in-class hosting—so you never lose a customer to slow load times.',
	},
	{
		icon: 'payment',
		title: 'accept online payments',
		description:
			'Get paid instantly, hassle-free. Make it easy for your clients to pay online with secure payment integration (Stripe, PayPal, and more). Whether you charge for appointments, deposits, or full services upfront, we’ve got you covered.',
	},
	{
		icon: 'seo',
		title: 'seo services',
		description:
			'Rank higher. Get found. Stay ahead. Your business deserves first-page visibility on Google. We optimize your site structure, content, and speed so that your website ranks higher and attracts more organic traffic.',
	},
	{
		icon: 'googlePPCAds',
		title: 'google ppc ads',
		description:
			'Supercharge your bookings with high-converting ads. Want more traffic? Our Google Ads experts can drive targeted visitors to your site — people already searching for your services. Get more leads, more bookings, and zero wasted ad spend.',
	},
	{
		icon: 'allInOne',
		title: 'all-in-one solution',
		description:
			'No more tech headaches—we handle everything for you. From design and hosting to security and updates, we take care of all the heavy lifting. Focus on running your business while we ensure your website stays fast, secure, and up to date.',
	},
	{
		icon: 'automation',
		title: 'workflow automation',
		description:
			'Spend less time on admin, more time on business. Integrate online booking, automated reminders, invoicing, and customer management into your site. Free up your time without neglecting your clients.',
	},
];

export default WhatWeDo;
