'use client';

import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Download, Maximize2 } from 'lucide-react';
import type { PDFViewerProps } from '@/types/components';

/**
 * PDFViewer component for displaying PDF documents inline with download and fullscreen options.
 * 
 * @component
 * @example
 * ```tsx
 * <PDFViewer 
 *   pdfUrl="/documents/sample.pdf"
 *   fileName="Sample Document.pdf"
 * />
 * ```
 */
export default function PDFViewer({ pdfUrl, fileName = 'document.pdf' }: PDFViewerProps) {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleFullscreen = () => {
        window.open(pdfUrl, '_blank');
    };

    return (
        <div className="w-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            {/* Header with PDF name and action buttons */}
            <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-6 py-4">
                <div className="flex items-center gap-3">
                    <svg
                        className="w-6 h-6 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                    </svg>
                    <span className="font-medium text-gray-700">{fileName}</span>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={handleDownload}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        <Download className="w-4 h-4" />
                        Download
                    </button>
                    <button
                        onClick={handleFullscreen}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-secondary rounded-lg transition-colors"
                    >
                        <Maximize2 className="w-4 h-4" />
                        View Fullscreen
                    </button>
                </div>
            </div>

            {/* PDF Viewer */}
            <div className="h-[600px] overflow-auto">
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                    <Viewer
                        fileUrl={pdfUrl}
                        plugins={[defaultLayoutPluginInstance]}
                    />
                </Worker>
            </div>
        </div>
    );
}
