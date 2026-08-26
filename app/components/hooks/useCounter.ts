'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Animated counter hook — counts from 0 to target value when element enters viewport.
 * Duration is ~2 seconds.
 */
export function useCounter(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      setCount(current);

      if (step >= steps) {
        setCount(target);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return { count, ref };
}
