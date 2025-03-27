export interface PortfolioItem {
	image: string;
	title: string;
	description: string;
	url: string;
}

const Portfolio: PortfolioItem[] = [
	{
		image: 'blkowned.ca.png',
		title: 'blk owned',
		description:
			'BLK Owned is a non-profit startup in the Hamilton Area that empowers and elevates black owned businesses across the GTA.',
		url: 'https://blkowned.ca/',
	},
	{
		image: 'hendersonhomeimprovements.ca.png',
		title: 'henderson home improvements',
		description:
			'Henderson Home Improvements is a construction company servicing the GTA.',
		url: 'https://hendersonhomeimprovements.ca/',
	},
	// {
	// 	image: 'hendersonhomeimprovements.ca.png',
	// 	title: 'henderson home improvements',
	// 	description:
	// 		'Henderson Home Improvements is a construction company servicing the GTA.',
	// 	url: 'https://hendersonhomeimprovements.ca/',
	// },
];

export default Portfolio;
