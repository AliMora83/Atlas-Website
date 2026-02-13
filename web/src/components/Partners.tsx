export default function Partners() {
    return (
        <section className="py-20 bg-white border-t">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-bold font-heading text-gray-800 mb-12">Organized in Partnership With</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {/* Partner 1 */}
                    <div className="flex flex-col items-center">
                        <div className="w-40 h-24 bg-gray-100 rounded mb-4 flex items-center justify-center text-gray-400">
                            [Ministry Logo]
                        </div>
                        <p className="font-semibold text-gray-700">Ministry of Education</p>
                        <p className="text-sm text-gray-500">Republic of Ghana</p>
                    </div>

                    {/* Partner 2 */}
                    <div className="flex flex-col items-center">
                        <div className="w-40 h-24 bg-gray-100 rounded mb-4 flex items-center justify-center text-gray-400">
                            [ICWE Logo]
                        </div>
                        <p className="font-semibold text-gray-700">ICWE GmbH</p>
                        <p className="text-sm text-gray-500">Germany</p>
                    </div>

                    {/* Partner 3 */}
                    <div className="flex flex-col items-center">
                        <div className="w-40 h-24 bg-gray-100 rounded mb-4 flex items-center justify-center text-gray-400">
                            [AU Logo]
                        </div>
                        <p className="font-semibold text-gray-700">African Union</p>
                        <p className="text-sm text-gray-500">Partner</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
