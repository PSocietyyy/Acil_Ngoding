'use client';

import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll-triggered animations using IntersectionObserver.
 * Adds 'is-visible' class to elements with animation CSS classes when they enter viewport.
 */
export function useScrollAnimation(threshold: number = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    );

    // Observe the container and all animated children
    const animatedElements = element.querySelectorAll(
      '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right'
    );

    animatedElements.forEach((el) => observer.observe(el));

    // Also observe the container itself if it has animation class
    if (
      element.classList.contains('animate-on-scroll') ||
      element.classList.contains('animate-on-scroll-left') ||
      element.classList.contains('animate-on-scroll-right')
    ) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
