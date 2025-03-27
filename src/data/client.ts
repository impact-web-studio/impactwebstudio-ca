export interface CompanyInfoItem {
	field: string;
	value: string;
	link?: string;
	icon: string;
}

export const CompanyInfo: CompanyInfoItem[] = [
	{
		field: 'Email',
		value: 'info@impactwebstudio.ca',
		link: 'mailto:info@impactwebstudio.ca',
		icon: 'mail',
	},
	{
		field: 'WhatsApp',
		value: '+1 (647) 767-8840',
		link: 'https://wa.me/16477678840',
		icon: 'whatsapp',
	},
	{
		field: 'Hours',
		value: '24/7',
		icon: 'clock',
	},
	{
		field: 'Location',
		value: 'Canada',
		icon: 'location',
	},
];
