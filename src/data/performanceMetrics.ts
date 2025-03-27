export interface PerformanceMetricItem {
	metric: string;
	description: string;
}

const PerformanceMetric: PerformanceMetricItem[] = [
	{
		metric: '100%',
		description: 'satisfaction gauranteed',
	},
	{
		metric: '90+',
		description: 'PageSpeed score',
	},
	{
		metric: '<1s',
		description: 'load time',
	},
	{
		metric: '99.9%',
		description: 'uptime',
	},
];

export default PerformanceMetric;
