// Import animation utilities from Framer Motion
import { animate, inView, stagger, scroll } from 'motion';

// Animation presets object - reusable animation configurations
const animations = {
	// Fade in from bottom
	fadeInUp: {
		initial: { opacity: 0, y: 50 },
		animate: { opacity: 1, y: 0 },
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
};

// Function to apply animation types to elements
function applyAnimation(element, animationType, delay = 0) {
	const animation = animations[animationType];
	if (!animation) return;

	return animate(element, animation.animate, {
		...animation.options,
		delay,
	});
}

// Function for staggered animations on multiple elements
function applyStaggeredAnimation(elements, animationType, staggerDelay = 0.1) {
	const animation = animations[animationType];
	if (!animation || !elements.length) return;

	return animate(elements, animation.animate, {
		...animation.options,
		delay: stagger(staggerDelay),
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
							{ duration: 0.5, ease: 'easeOut' }
						);
					} else {
						animate(
							headerElement,
							{
								width: '100%',
								transform: 'translateY(0px)',
								borderRadius: '0px',
							},
							{ duration: 0.5, ease: 'easeOut' }
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
	iconCardGroup: (selector = '.what-we-do-section', options = {}) => {
		inView(
			selector,
			(info) => {
				// Get all cards in the container
				const cards = document.querySelectorAll(`${selector} .card`);

				// Apply staggered animation to all cards
				applyStaggeredAnimation(Array.from(cards), 'fadeInUp', 0.15);

				// Animate the icon wrappers with a slight delay
				const iconWrappers = document.querySelectorAll(
					`${selector} .icon-wrapper`
				);
				if (iconWrappers.length) {
					setTimeout(() => {
						applyStaggeredAnimation(
							Array.from(iconWrappers),
							'fadeInScale',
							0.1
						);
					}, 100);
				}

				// Return cleanup function if needed
				return (leaveInfo) => {
					// Optional: animate when leaving view
				};
			},
			{
				margin: options.margin || '-100px 0px -100px 0px',
				once: options.once !== undefined ? options.once : true,
				amount: 'all', // Important: detect all elements at once
			}
		);
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

	// Feature grid animation
	featureGrid: (selector = '.feature-grid > *', options = {}) => {
		inView(
			selector,
			(info) => {
				// Get all features
				const features = document.querySelectorAll(selector);

				// Apply staggered animation
				applyStaggeredAnimation(Array.from(features), 'fadeInUp', 0.1);

				return () => {
					// Cleanup function
				};
			},
			{
				margin: options.margin || '-100px 0px -100px 0px',
				once: options.once !== undefined ? options.once : true,
				amount: 'all', // Important: detect all elements at once
			}
		);
	},
};

// Initialize all animations
function initAnimations() {
	// Hook up event listener
	document.addEventListener('DOMContentLoaded', () => {
		// Initialize header animation
		animateSections.header();

		// Initialize icon card group animation
		animateSections.iconCardGroup();

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
	applyStaggeredAnimation,
	animateSections,
	initAnimations,
	animations,
};
