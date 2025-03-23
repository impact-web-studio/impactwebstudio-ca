// Import animation utilities from Framer Motion
import { animate, inView, stagger, scroll, hover } from 'motion';

// Animation presets object - reusable animation configurations
const animations = {
	// Fade in from bottom
	fadeInUp: {
		animate: { opacity: [0, 1], y: [100, 0] },
		options: { duration: 0.5, ease: 'easeOut' },
	},

	// Fade in from bottom
	fadeInDown: {
		animate: { opacity: [0, 1], y: [-100, 0] },
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

// Function to apply animation types to es
function applyAnimation(e, animationType, delay = 0) {
	const animation = animations[animationType];
	if (!animation) return;

	return animate(e, animation.animate, {
		...animation.options,
		delay: delay,
	});
}

// Section-specific animation functions
const animateComponents = {
	// [Header] Navigation Bar Scroll Animation
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
			// Make sure to get the e correctly - add the proper CSS selector syntax
			const headere = document.querySelector(headerSelector);
			if (!headere) {
				console.warn(`Header e with selector "${headerSelector}" not found`);
				return;
			}

			// Set initial styles
			headere.style.transform = 'translateY(0px)';
			headere.style.width = '100%';
			headere.style.transition = 'all 0.5s ease-out';

			// Set up scroll animation
			scroll(
				(scrollPercentage) => {
					// Get scroll progress as an absolute value relative to the page height
					const scrollProgress =
						document.documentElement.scrollHeight * scrollPercentage;

					if (scrollProgress > 50) {
						animate(
							headere,
							{
								width: '90%',
								transform: 'translateY(2rem)',
								borderRadius: '1.25rem',
							},
							{ duration: 0.3, ease: 'easeOut' }
						);
					} else {
						animate(
							headere,
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
					target: document.documente,
				}
			);
		}
	},

	// [Section] Hero Animation
	heroSection: (selector = '.hero-section', options = {}) => {
		inView(
			selector,
			(e) => {
				const heading = e.querySelector('h1');
				const subheading = e.querySelector('span');
				const description = e.querySelector('p');
				const button = e.querySelector('.button-group');
				const image = e.querySelector('.image-wrapper');

				if (heading) applyAnimation(heading, 'fadeInUp', 0.2);
				if (subheading) applyAnimation(subheading, 'fadeInUp', 0);
				if (description) applyAnimation(description, 'fadeInUp', 0.4); // Adjusted delay for better sequence
				if (button) applyAnimation(button, 'fadeInUp', 0.6); // Adjusted delay for better sequence
				if (image) applyAnimation(image, 'fadeInUp', 0.2); // Adjusted delay for better sequence

				return () => {
					// Cleanup function
				};
			},
			{
				margin: options.margin || '0px',
				once: false, // Animation will run every time e comes into view
			}
		);
	},

	// [Section] Section Header - Text Animation - PAUSED - TBD
	sectionHeader: (selector = '.section-header', options = {}) => {
		inView(selector, (e) => {
			const topper = e.querySelector('h2');
			console.log(topper);

			// Return cleanup function if needed
			return (leaveInfo) => {};
		});
	},

	// [Card Group] What We Do - Icon Card Group animation using staggered animation
	offerCardGroup: (selector = '.offer-card-container', options = {}) => {
		let hasAnimated = false;
		inView(selector, (e) => {
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

	// [Card Group] What We Offer - Offer Card Group animation using staggered animation
	iconCardGroup: (selector = '.icon-card-container', options = {}) => {
		let hasAnimated = false;
		inView(selector, (e) => {
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

	// [Section] Portfolio Image Animation
	portfolioCard: (selector = '.portfolio-card', options = {}) => {
		// Use querySelectorAll to get all portfolio cards
		const cards = document.querySelectorAll(selector);

		// Add hover event to each card individually
		cards.forEach((card) => {
			hover(card, (e) => {
				// Find the image wrapper within this specific card
				const imageWrapper = e.querySelector('.image-wrapper');

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
		animateComponents.header();
		animateComponents.iconCardGroup();

		// Initialize icon card group animation

		// Initialize other animations as needed
		// animateComponents.heroSection();
		// animateComponents.featureGrid();

		console.log('Animation system initialized');
	});
}

// Export the animation system
export {
	animate,
	inView,
	applyAnimation,
	animateComponents,
	initAnimations,
	animations,
};
