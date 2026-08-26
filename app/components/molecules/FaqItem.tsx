'use client';

import { useState } from 'react';
import Icon from '@/app/components/atoms/Icon';

interface FaqItemProps {
  question: string;
  answer: string;
  className?: string;
}

export default function FaqItem({
  question,
  answer,
  className = '',
}: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border-b border-[var(--color-gray-200)] ${className}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-5 text-left cursor-pointer group"
        aria-expanded={isOpen}
      >
        <span className="font-[family-name:var(--font-sora)] text-base font-semibold text-[var(--color-black)] pr-4 group-hover:text-[var(--color-primary)] transition-colors duration-200">
          {question}
        </span>
        <span
          className={`shrink-0 text-[var(--color-gray-400)] transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <Icon name="chevronDown" size={20} />
        </span>
      </button>
      <div className={`faq-content ${isOpen ? 'is-open' : ''}`}>
        <p className="pb-5 text-sm leading-relaxed text-[var(--color-gray-600)]">
          {answer}
        </p>
      </div>
    </div>
  );
}
