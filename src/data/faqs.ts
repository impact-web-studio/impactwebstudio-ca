export interface FAQItem {
	question: string;
	answer: string;
}

export const GeneralFAQs: FAQItem[] = [
	{
		question: 'What is your refund policy?',
		answer:
			'We offer a 30-day money-back guarantee on eligible services. If you are not satisfied, we will issue a full refund within this period.',
	},
	{
		question: 'What is your cancellation policy?',
		answer:
			'Contracts can be canceled at any time, but depending on the plan, early termination fees may apply. Monthly packages require a minimum 12-month commitment.',
	},
	{
		question: 'Do you offer a risk-free guarantee?',
		answer:
			'Yes, for custom design and development projects, we offer an initial trial period. If you are unsatisfied within this period, we will issue a full refund.',
	},
	{
		question: 'What happens if I need additional work beyond the contract?',
		answer:
			'Additional work outside the agreed scope will be billed at our standard hourly rate or through a new service agreement.',
	},
	{
		question: 'Who owns the website after completion?',
		answer:
			'Once the project is paid in full, you retain full ownership of the website, including its design, code, and content.',
	},
];

export const DesignFAQs: FAQItem[] = [
	{
		question: 'What if I don’t like the design?',
		answer:
			'We provide multiple revision rounds to ensure satisfaction. If the final design does not meet your expectations, we offer a partial refund depending on the project stage.',
	},
	{
		question: 'How long does it take to design a website?',
		answer:
			'The design phase typically takes 2-4 weeks, depending on complexity, client feedback, and revisions.',
	},
	{
		question: 'Do you provide mobile-friendly designs?',
		answer:
			'Yes, all our designs are fully responsive and optimized for mobile, tablet, and desktop viewing.',
	},
	{
		question: 'Can you work with my existing branding?',
		answer:
			'Absolutely! We can design a website that aligns with your existing brand identity or help you refine your branding.',
	},
	{
		question: 'Do you use templates or create custom designs?',
		answer:
			'We hand-code all our designs from scratch to ensure a fully customized, high-performance experience.',
	},
];

export const DevelopmentFAQs: FAQItem[] = [
	{
		question: 'How long does it take to develop a website?',
		answer:
			'Development timelines vary, but a standard website typically takes 4-6 weeks, depending on features and complexity.',
	},
	{
		question: 'What technologies do you use?',
		answer:
			'We specialize in AstroJS, TailwindCSS, Vite, and fully hand-coded solutions to ensure speed, scalability, and maintainability.',
	},
	{
		question: 'Do you offer custom integrations?',
		answer:
			'Yes, we can integrate APIs, third-party services (like Stripe, PayPal, or CRMs), and automation solutions to enhance your website’s functionality.',
	},
	{
		question: 'Will my website be optimized for speed and security?',
		answer:
			'Yes, our stack (AstroJS + Vite + TailwindCSS) ensures ultra-fast load times, and we implement best practices for security hardening and performance optimization.',
	},
	{
		question: 'Do you offer ongoing maintenance and support?',
		answer:
			'Yes, we provide maintenance plans that include security updates, performance monitoring, and ongoing improvements.',
	},
];
