export interface PerformanceMetricItem {
	icon: string;
	title: string;
	description: string;
}

const PerformanceMetric: PerformanceMetricItem[] = [
	{
		icon: 'hourglass',
		title: 'speed = more conversions',
		description:
			'A faster site means higher engagement, lower bounce rates, and more leads.',
	},
	{
		icon: 'piggyBank',
		title: 'SEO & Ads Performance Boost',
		description:
			'Speed impacts Google rankings and ad costs—our sites help you rank higher and save money.',
	},
	{
		icon: 'speed',
		title: 'Fast Initial Load Times',
		description:
			'Most visitions leave if the page takes longer than 3s to load. Our sites are optimized to load in under 1s.',
	},
];

export default PerformanceMetric;
