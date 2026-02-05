import type { LoadingSpinnerProps } from '@/types/components';

/**
 * LoadingSpinner component displays a rotating spinner with an optional message.
 * 
 * @component
 * @example
 * ```tsx
 * <LoadingSpinner size="lg" message="Loading content..." />
 * ```
 */
export default function LoadingSpinner({
    size = 'md',
    message
}: LoadingSpinnerProps) {
    const sizeClasses = {
        sm: 'h-8 w-8',
        md: 'h-12 w-12',
        lg: 'h-16 w-16'
    };

    return (
        <div className="flex items-center justify-center">
            <div className="text-center">
                <div
                    className={`animate-spin rounded-full border-b-2 border-primary mx-auto mb-4 ${sizeClasses[size]}`}
                    role="status"
                    aria-label="Loading"
                />
                {message && (
                    <p className="text-gray-600">{message}</p>
                )}
            </div>
        </div>
    );
}
