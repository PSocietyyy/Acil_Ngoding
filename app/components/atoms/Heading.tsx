import { type ReactNode } from 'react';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4;
  children: ReactNode;
  className?: string;
}

export default function Heading({
  level = 2,
  children,
  className = '',
}: HeadingProps) {
  const styles: Record<number, string> = {
    1: 'text-4xl md:text-5xl lg:text-[4rem] font-extrabold leading-[1.1] tracking-tight',
    2: 'text-3xl md:text-4xl lg:text-[3rem] font-bold leading-[1.2] tracking-tight',
    3: 'text-xl md:text-2xl font-semibold leading-[1.35]',
    4: 'text-lg font-semibold leading-[1.4]',
  };

  const Tag = `h${level}` as const;

  return (
    <Tag
      className={`font-[family-name:var(--font-sora)] text-[var(--color-black)] ${styles[level]} ${className}`}
    >
      {children}
    </Tag>
  );
}
