// src/scripts/animations.js

// Import animation utilities from Framer Motion
import { animate, inView, stagger } from 'motion';

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
	if (!elements.length) return;

	elements.forEach((element, index) => {
		applyAnimation(element, animationType, index * staggerDelay);
	});
}

// Section-specific animation functions
const animateSections = {
	// Icon Card Group animation
	iconCardGroup: (selector = '.icon-card-container > .card', options = {}) => {
		inView(
			selector,
			(element) => {
				const index = parseFloat(element.dataset.cardIndex || 0);
				applyAnimation(element, 'fadeInUp', index * 0.15);

				// Animate the icon wrapper if it exists
				const iconWrapper = element.querySelector('.icon-wrapper');
				if (iconWrapper) {
					applyAnimation(iconWrapper, 'fadeInScale', index * 0.15 + 0.1);
				}

				// Return cleanup function if needed
				return (leaveInfo) => {
					// Optional: animate when leaving view
				};
			},
			{
				margin: options.margin || '-100px 0px -100px 0px',
				once: options.once !== undefined ? options.once : true,
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
		const elements = document.querySelectorAll(selector);
		inView(
			selector,
			(element, i) => {
				const index = Array.from(elements).indexOf(element);
				applyAnimation(element, 'fadeInUp', index * 0.1);

				return () => {
					// Cleanup function
				};
			},
			{
				margin: options.margin || '-100px 0px -100px 0px',
				once: options.once !== undefined ? options.once : true,
			}
		);
	},
};

// Initialize all animations
function initAnimations() {
	// Hook up event listener
	document.addEventListener('DOMContentLoaded', () => {
		// Initialize any animations that should run on page load
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
