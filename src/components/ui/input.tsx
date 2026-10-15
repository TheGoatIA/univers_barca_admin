import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid, ...props }, ref) => (
    <input
      ref={ref}
      aria-invalid={invalid || undefined}
      className={cn(
        'flex h-12 w-full rounded-md border-[1.5px] border-line-strong bg-surface-2 px-3.5 text-[15px] text-content placeholder:text-content-3 focus-visible:border-secondary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-secondary/20 disabled:opacity-50',
        invalid && 'border-error focus-visible:border-error focus-visible:ring-error/20',
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = 'Input';
