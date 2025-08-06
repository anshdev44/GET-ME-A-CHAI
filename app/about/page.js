import React from "react";

// A reusable card component for each feature (This component is unchanged)
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start gap-4 rounded-2xl border border-slate-700 bg-slate-800 p-8 transition-transform duration-300 ease-in-out hover:-translate-y-2">
      {/* Icon Wrapper */}
      <div className="rounded-full bg-slate-700 p-3">{icon}</div>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
};

// The main page component with corrected alignment
const page = () => {
  return (
    // Use a <main> tag for semantics. Control padding and vertical spacing here.
    <main className="flex flex-col items-center px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* Single container to enforce consistent max-width and centering for all sections */}
      <div className="w-full max-w-7xl mx-auto space-y-24">

        {/* --- About Section --- */}
        <section className="flex flex-col items-center gap-8 text-center">
          {/* Responsive heading to prevent bad wrapping on small screens */}
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            About Get Me a Chai
          </h1>
          {/* Constrain paragraph width for better readability */}
          <p className="max-w-3xl text-lg text-slate-400 sm:text-xl">
            Buy Me a Chai is a crowdfunding platform designed to help creators get
            direct support from their fans and followers. Whether you are an
            artist, writer, developer, or content creator, this platform allows
            you to receive funds effortlessly while connecting with your
            supporters.
          </p>
        </section>

        {/* --- Features Section --- */}
        <section>
          {/* Header Text for Features */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              Support Creativity and Innovation
            </h2>
            <p className="text-lg text-slate-400">
              Our platform provides the tools and features to help you connect
              with your audience and get the support you deserve.
            </p>
          </div>

          {/* Grid Container for Feature Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9.5 9 2 2 4-4" />
                </svg>
              }
              title="Easy Customization"
              description="Personalize your page to match your brand. Upload a cover image, choose a theme color, and write a compelling story."
            />
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              }
              title="Direct Support"
              description="Receive payments directly from your fans. No complicated payout schedules—money goes straight to your account."
            />
            <FeatureCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              }
              title="Transparent Fees"
              description="We believe in transparency. Our platform has a small, clear fee structure, so you always know exactly what you earn."
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;