// Import animation utilities from Framer Motion
import { animate, inView, stagger, scroll, hover } from 'motion';

// Animation presets object - reusable animation configurations
const animations = {
	// Fade in from bottom
	fadeInUp: {
		animate: { opacity: [0, 1], y: [100, 0] },
		options: { duration: 0.5, ease: 'easeOut' },
	},

	// Fade in with scale
	fadeInScale: {
		initial: { opacity: 0, scale: 0.9 },
		animate: { opacity: 1, scale: 1 },
		options: { duration: 0.4, ease: 'easeOut' },
	},

	// Slide in from left
	slideInLeft: {
		initial: { opacity: 0, x: -50 },
		animate: { opacity: 1, x: 0 },
		options: { duration: 0.5, ease: 'easeOut' },
	},

	// Slide in from right
	slideInRight: {
		initial: { opacity: 0, x: 50 },
		animate: { opacity: 1, x: 0 },
		options: { duration: 0.5, ease: 'easeOut' },
	},

	// Scale increase on hover
	scaleOnHover: {
		initial: { scale: 1 },
		animate: { scale: 1.1 },
		options: { duration: 0.5, ease: 'easeOut' },
	},
};

// Function to apply animation types to elements
function applyAnimation(element, animationType, delay = 0) {
	const animation = animations[animationType];
	if (!animation) return;

	return animate(element, animation.animate, {
		...animation.options,
		delay: delay,
	});
}

// Section-specific animation functions
const animateSections = {
	// [header] Header Navigation Bar animation
	header: (selector = 'header', options = {}) => {
		// Wait for DOM to be ready
		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', () =>
				initHeaderAnimation(selector)
			);
		} else {
			initHeaderAnimation(selector);
		}

		function initHeaderAnimation(headerSelector) {
			// Make sure to get the element correctly - add the proper CSS selector syntax
			const headerElement = document.querySelector(headerSelector);
			if (!headerElement) {
				console.warn(
					`Header element with selector "${headerSelector}" not found`
				);
				return;
			}

			// Set initial styles
			headerElement.style.transform = 'translateY(0px)';
			headerElement.style.width = '100%';
			headerElement.style.transition = 'all 0.5s ease-out';

			// Set up scroll animation
			scroll(
				(scrollPercentage) => {
					// Get scroll progress as an absolute value relative to the page height
					const scrollProgress =
						document.documentElement.scrollHeight * scrollPercentage;

					if (scrollProgress > 50) {
						animate(
							headerElement,
							{
								width: '90%',
								transform: 'translateY(2rem)',
								borderRadius: '1.25rem',
							},
							{ duration: 0.3, ease: 'easeOut' }
						);
					} else {
						animate(
							headerElement,
							{
								width: '100%',
								transform: 'translateY(0px)',
								borderRadius: '0px',
							},
							{ duration: 0.3, ease: 'easeOut' }
						);
					}
				},
				{
					target: document.documentElement,
				}
			);
		}
	},

	// [whatWeDo] Icon Card Group animation using staggered animation
	iconCardGroup: (selector = '.icon-card-container', options = {}) => {
		let hasAnimated = false;
		inView(selector, (info) => {
			// run animation once
			if (!hasAnimated) {
				// Get all cards in the container
				const cards = document.querySelectorAll(`${selector} .card`);

				// Apply stagger animation
				applyAnimation(cards, 'fadeInUp', stagger(0.2));

				// Return cleanup function if needed
				return (leaveInfo) => {
					hasAnimated = true;
				};
			}
		});
	},

	// Hero section animation
	heroSection: (selector = '.hero-section', options = {}) => {
		inView(
			selector,
			(element) => {
				const heading = element.querySelector('h1, h2');
				const subheading = element.querySelector('p');
				const button = element.querySelector('button, .button');

				if (heading) applyAnimation(heading, 'fadeInUp', 0);
				if (subheading) applyAnimation(subheading, 'fadeInUp', 0.2);
				if (button) applyAnimation(button, 'fadeInScale', 0.4);

				return () => {
					// Cleanup function
				};
			},
			{
				margin: options.margin || '0px',
				once: options.once !== undefined ? options.once : true,
			}
		);
	},
	portfolioCard: (selector = '.portfolio-card', options = {}) => {
		// Use querySelectorAll to get all portfolio cards
		const cards = document.querySelectorAll(selector);

		// Add hover event to each card individually
		cards.forEach((card) => {
			hover(card, (element) => {
				// Find the image wrapper within this specific card
				const imageWrapper = element.querySelector('.image-wrapper');

				// Apply scale animation to the image wrapper
				animate(
					imageWrapper,
					animations.scaleOnHover.animate,
					animations.scaleOnHover.options
				);

				// Return cleanup function to reset when hover ends
				return () => {
					animate(imageWrapper, { scale: 1 }, { duration: 0.3 });
				};
			});
		});
	},
};

// Initialize all animations
function initAnimations() {
	// Hook up event listener
	document.addEventListener('DOMContentLoaded', () => {
		// Initialize header animation
		animateSections.header();
		animateSections.iconCardGroup();

		// Initialize icon card group animation

		// Initialize other animations as needed
		// animateSections.heroSection();
		// animateSections.featureGrid();

		console.log('Animation system initialized');
	});
}

// Export the animation system
export {
	animate,
	inView,
	applyAnimation,
	animateSections,
	initAnimations,
	animations,
};
