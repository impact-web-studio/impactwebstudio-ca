export interface PricingItem {
	plan: string;
	basePrice: string;
	secondaryPrice: string;
	offers: {
		[key: string]: boolean;
	}[];
}

const Pricing: PricingItem[] = [
	{
		plan: 'Lump Sum',
		basePrice: '$3500',
		secondaryPrice: '+$25/mo hosting',
		offers: [
			{ 'design and development': true },
			{ 'Includes Website Hosting': true },
			{ '5 Page Setup (+$100/page after 5)': true },
			{ 'Unlimited Edits': true },
			{ '[Optional] Blog Add-on (+$250)': true },
			{ '24/7 Support': false },
			{ 'lifetime updates': false },
		],
	},
	{
		plan: 'Monthly',
		basePrice: '$175',
		secondaryPrice: '/mo',
		offers: [
			{ 'design and development': true },
			{ 'Includes Website Hosting': true },
			{ '5 Page Setup (+$100/page after 5)': true },
			{ 'Unlimited Edits': true },
			{ '[Optional] Blog Add-on (+$250)': true },
			{ '24/7 Support': true },
			{ 'lifetime updates': true },
		],
	},
	{
		plan: 'E-commerce',
		basePrice: '$8500',
		secondaryPrice: 'starting',
		offers: [
			{ 'Custom Shopify Store': true },
			{ 'Unlimited App Configuration': true },
			{ 'Shipping Integration': true },
			{ 'Shopify Tutorial Walkthrough': true },
			{ 'Fully Editable In Shopify CMS': true },
			{ '24/7 Support': false },
			{ 'lifetime updates': false },
		],
	},
];

export default Pricing;
