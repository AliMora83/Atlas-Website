/**
 * Shared TypeScript type definitions for components
 */

/**
 * Props for PDF viewer component
 */
export interface PDFViewerProps {
    /** URL to the PDF file to display */
    pdfUrl: string;
    /** Display name for the PDF file (defaults to "document.pdf") */
    fileName?: string;
}

/**
 * Common props that many components accept
 */
export interface BaseComponentProps {
    /** Additional CSS classes to apply */
    className?: string;
    /** Child elements */
    children?: React.ReactNode;
}

/**
 * Props for loading spinner component
 */
export interface LoadingSpinnerProps {
    /** Size of the spinner (defaults to "md") */
    size?: 'sm' | 'md' | 'lg';
    /** Optional message to display below spinner */
    message?: string;
}
