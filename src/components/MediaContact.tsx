export default function MediaContact() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-2xl mx-auto bg-primary text-white p-10 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold font-heading mb-6">Media Inquiries</h2>
                    <p className="mb-8 text-blue-100">
                        For interview requests, accreditation, or specific information not found on this page, please contact our PR team.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <a href="mailto:press@atlas-conference.com" className="bg-white text-primary font-bold px-8 py-3 rounded hover:bg-blue-50 transition-colors">
                            press@atlas-conference.com
                        </a>
                        <span className="font-medium text-blue-200">+49 30 12345679</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
