import Hero from "@/components/Hero";
import KeyFacts from "@/components/KeyFacts";
import FeaturedSpeakers from "@/components/FeaturedSpeakers";
import ProgramHighlights from "@/components/ProgramHighlights";
import RegistrationPricing from "@/components/RegistrationPricing";
import Sponsors from "@/components/Sponsors";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <KeyFacts />

      {/* Theme Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-primary">
                Theme: Education in the AI Era
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                As artificial intelligence reshapes industries and societies globally, education stands at a pivotal crossroads. This year's theme explores how African nations can leverage AI to leapfrog traditional educational barriers, personalize learning at scale, and prepare the youth for a digital-first economy.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Join stakeholders from government, academia, and industry as we debate policies, showcase innovations, and chart a course for sustainable educational development across the continent.
              </p>
              <Link
                href="/about"
                className="text-primary font-semibold hover:text-secondary inline-flex items-center"
              >
                Learn More About The Theme &rarr;
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gray-200 rounded-lg h-[400px] w-full flex items-center justify-center text-gray-500 font-medium">
                [Modern Education Technology Concept Image]
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedSpeakers />
      <ProgramHighlights />
      <RegistrationPricing />
      <Sponsors />

      {/* Newsletter Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-heading mb-4">Stay Updated</h2>
          <p className="mb-8 text-blue-100 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest conference announcements, speaker reveals, and early bird offers.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-4 py-3 rounded text-gray-900 border-none focus:ring-2 focus:ring-secondary focus:outline-none"
            />
            <button className="bg-secondary text-white font-bold px-6 py-3 rounded hover:bg-opacity-90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
