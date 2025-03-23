// Import animation utilities from Framer Motion
import { animate, inView, stagger, scroll, hover } from 'motion';

// Animation presets object - reusable animation configurations
const animations = {
	// Fade in
	fadeIn: {
		animate: { opacity: [0, 1] },
		options: { duration: 0.3, ease: 'easeOut' },
	},

	// Fade Out
	fadeOut: {
		animate: { opacity: [1, 0] },
		options: { duration: 0.3, ease: 'easeOut' },
	},

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

	fontSizeDown: {
		animate: { fontSize: ['2.5rem', '2rem'] }, // Adjust this value to your desired smaller size
		options: { duration: 0.3, ease: 'easeOut' },
	},

	fontSizeUp: {
		animate: { fontSize: '2.5rem' }, // Adjust this value to match your original font size
		options: { duration: 0.3, ease: 'easeOut' },
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

	iconScaleDown: {
		animate: { width: '2.5rem', height: '2.5rem' },
		options: { duration: 0.3, ease: 'easeOut' },
	},
	iconScaleUp: {
		animate: { width: '3rem', height: '3rem' },
		options: { duration: 0.3, ease: 'easeOut' },
	},

	scaleUp: {
		animate: { scale: 1 },
		options: { duration: 0.3, ease: 'easeOut' },
	},
	revealOnHover: {
		animate: { opacity: [0, 1], y: [50, 0] },
		options: { duration: 0.3, ease: 'easeOut' },
	},
	hideOnHoverOut: {
		animate: { opacity: 0, y: 0 },
		options: { duration: 0.3, ease: 'easeOut' },
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
		let hasAnimated = false;
		inView(
			selector,
			(e) => {
				const heading = e.querySelector('h1');
				const subheading = e.querySelector('span');
				const description = e.querySelector('p');
				const button = e.querySelector('.button-group');
				const image = e.querySelector('.image-wrapper');
				if (!hasAnimated) {
					if (heading) applyAnimation(heading, 'fadeInUp', 0.2);
					if (subheading) applyAnimation(subheading, 'fadeInUp', 0);
					if (description) applyAnimation(description, 'fadeInUp', 0.4); // Adjusted delay for better sequence
					if (button) applyAnimation(button, 'fadeInUp', 0.6); // Adjusted delay for better sequence
					if (image) applyAnimation(image, 'fadeInUp', 0.2); // Adjusted delay for better sequence
				}

				return () => {
					hasAnimated = true;
				};
			},
			{
				margin: options.margin || '0px',
			}
		);
	},

	// [Section] Section Header - Text Animation - PAUSED - TBD
	sectionHeader: (selector = '.section-header', options = {}) => {
		let hasAnimated = false;
		inView(selector, (e) => {
			const topper = e.querySelector('h2');

			// Return cleanup function if needed
			return (leaveInfo) => {};
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
				const button = document.querySelector(
					`section:has(${selector}) .button`
				);
				// Apply stagger animation
				applyAnimation(cards, 'fadeInUp', stagger(0.2));

				// Apply button animation
				if (button)
					applyAnimation(button, 'fadeInUp', cards.length * 0.2 + 0.2); // Adjusted delay for better sequence

				// Return cleanup function if needed
				return (leaveInfo) => {
					hasAnimated = true;
				};
			}
		});
	},

	// [Card Group] What We Do - Icon Card Group animation using staggered animation & Button Animation
	offerCardGroup: (selector = '.offer-card-container', options = {}) => {
		let hasAnimated = false;
		inView(selector, (e) => {
			// run animation once
			if (!hasAnimated) {
				// Get all cards in the container
				const cards = document.querySelectorAll(`${selector} .card`);
				const button = document.querySelector(
					`section:has(${selector}) .button`
				);

				// Apply stagger animation
				if (cards) applyAnimation(cards, 'fadeInUp', stagger(0.2));

				// Apply button animation
				if (button)
					applyAnimation(button, 'fadeInUp', cards.length * 0.2 + 0.2); // Adjusted delay for better sequence

				// Return cleanup function if needed
				return (leaveInfo) => {
					hasAnimated = true;
				};
			}
		});
	},

	// [Card Group] Who It's For - Icon Card Group and Button Animation
	industryCardGroup: (selector = '.industry-card-container', options = {}) => {
		let hasAnimated = false;

		// Animate on View
		inView(selector, (info) => {
			// run animation once
			if (!hasAnimated) {
				// Get all cards in the container
				const cards = document.querySelectorAll(`${selector} .card`);
				const button = document.querySelector(
					`section:has(${selector}) .button`
				);

				// Apply stagger animation
				if (cards) applyAnimation(cards, 'fadeInUp', stagger(0.2));

				// Apply button animation
				if (button)
					applyAnimation(button, 'fadeInUp', cards.length * 0.2 + 0.2);

				// Set flag to avoid re-animation
				hasAnimated = true;

				// Return cleanup function if needed
				return () => {};
			}
		});

		// Animate on Hover
		const cards = document.querySelectorAll(`${selector} .card`);

		// Add hover event to each card individually
		cards.forEach((card) => {
			// Find elements within card
			const icon = card.querySelector('.icon-wrapper'); // Container for icon
			const titleElement = card.querySelector('.title'); // The actual title text element
			const description = card.querySelector('.text-body'); // description text
			const link = card.querySelector('.link'); // cta button text

			const backgroundContainer = card.querySelector('.bg-wrapper');
			const backgroundImg = backgroundContainer.querySelector('img');

			// Set initial states
			if (description) {
				description.style.opacity = '0';
				description.style.transform = 'translateY(20px)';
			}

			if (backgroundContainer) {
				backgroundContainer.style.opacity = '0';
			}

			if (backgroundImg) {
				description.style.opacity = '0';
				description.style.transform = 'translateY(100px)';
			}

			hover(card, (element) => {
				// Scale down icon and title
				if (icon) {
					animate(
						icon,
						animations.iconScaleDown.animate,
						animations.iconScaleDown.options
					);
				}

				// Reduce font size of title
				if (titleElement) {
					animate(
						titleElement,
						animations.fontSizeDown.animate,
						animations.fontSizeDown.options
					);
				}

				// Reveal description
				if (description) {
					animate(
						description,
						animations.revealOnHover.animate,
						animations.revealOnHover.options
					);
				}

				// change button color
				if (link) {
					link.style.color = 'var(--color-light-permanent)';
				}

				// add background overlay
				if (backgroundContainer) {
					animate(
						backgroundContainer,
						animations.fadeIn.animate,
						animations.fadeIn.options
					);
				}

				// add background image overlay
				if (backgroundImg) {
					animate(
						backgroundImg,
						{ opacity: [0, 1], y: [150, 0] },
						{
							duration: 0.4,
							ease: 'easeOut',
						}
					);
				}

				// Return cleanup function to reset when hover ends
				return () => {
					// Scale icon and title back up
					if (icon) {
						animate(
							icon,
							animations.iconScaleUp.animate,
							animations.iconScaleUp.options
						);
					}
					// Restore font size
					if (titleElement) {
						animate(
							titleElement,
							animations.fontSizeUp.animate,
							animations.fontSizeUp.options
						);
					}

					// Hide description
					if (description) {
						animate(
							description,
							animations.hideOnHoverOut.animate,
							animations.hideOnHoverOut.options
						);
					}

					// revert button color
					if (link) {
						link.style.color = 'var(--color-primary-blue)';
					}

					// remove background overlay
					if (backgroundContainer) {
						animate(
							backgroundContainer,
							animations.fadeOut.animate,
							animations.fadeOut.options
						);
					}

					// remove background image overlay
					if (backgroundImg) {
						animate(
							backgroundImg,
							animations.fadeOut.animate,
							animations.fadeOut.options
						);
					}
				};
			});
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
					animations.revealOnHover.animate,
					animations.revealOnHover.options
				);

				// Return cleanup function to reset when hover ends
				return () => {
					animate(
						imageWrapper,
						animations.hideOnHoverOut.animate,
						animations.hideOnHoverOut.options
					);
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
