import { PlayCircle } from "lucide-react";
import heroBg from "/Images/hero-bg.svg";
import stripPattern from "/Images/strip-pattern.svg";
import mainMockup from "/Images/main-image.png";
import cardTopLeft from "/Images/top-left.png";
import cardMiddleRight from "/Images/middle-right.png";
import cardBottomLeft from "/Images/bottom-left.png";

export default function HeroSection() {
  return (
    <section className="pt-16 pb-16 lg:pt-32 lg:pb-20 relative overflow-hidden bg-background text-foreground">
      {/* Background Images */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt="Abstract background"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      <div className="absolute inset-x-0 top-0 lg:top-10 -z-5">
        <img
          src={stripPattern}
          alt="Strip pattern overlay"
          className="w-full h-10 lg:h-12 object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* LEFT COLUMN: Text Content and CTAs */}
        <div className="lg:pr-10 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter mb-4 sm:mb-6 text-primary-dark">
            The <span className="text-highlight-green">best</span> fundraising{" "}
            platform in <span className="text-highlight-green">Africa</span>
          </h1>
          <p className="text-lg sm:text-xl text-primary-dark mb-6 sm:mb-10 max-w-lg mx-auto lg:mx-0">
            Understanding the unique challenges of African SMEs and Startups,
            our innovative solutions streamline your journey to success.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            {/* Primary Button*/}
            <button
              className="bg-primary-blue text-white px-6 sm:px-8 py-3 rounded-xl font-semibold shadow-xl transition-all duration-300 hover:bg-primary-dark transform hover:-translate-y-0.5 text-sm sm:text-base cursor-pointer"
              aria-label="Get started with Koppoh"
            >
              Get Started with Koppoh
            </button>
            {/* Secondary Button */}
            <button
              className="flex items-center justify-center space-x-2 border-2 border-primary-blue text-primary-blue px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300 bg-white cursor-pointer text-sm sm:text-base"
              aria-label="Watch video guide on how to apply"
            >
              <PlayCircle size={20} className="w-4 h-4 sm:w-5 sm:h-5 " />
              <span>Watch how to apply</span>
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Illustration / Mockups */}
        <div className="relative w-full flex justify-center lg:justify-end">
          <div className="relative w-[80%] max-w-[500px] sm:max-w-[640px] lg:max-w-none aspect-[4/3] lg:aspect-[16/10]">
            {/* Main Large Mockup */}
            <div className="absolute inset-0 overflow-hidden p-2 sm:p-4 flex items-center justify-center">
              <img
                src={mainMockup}
                alt="Koppoh App Dashboard"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>

            {/* Floating Mockup Card - Top Left */}
            <div
              className="
                absolute
                top-10 sm:top-16 lg:top-12
                left-[-6%] lg:left-[-6%]
                z-30
                w-40 sm:w-60 lg:w-[260px]
              "
            >
              <div className="rounded-lg overflow-hidden p-1 sm:p-2 flex items-center justify-center h-20 sm:h-24">
                <img
                  src={cardTopLeft}
                  alt="Count of Investors Interest"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Floating Mockup Card - Middle Right */}
            <div
              className="
                absolute
                top-[33%]
                lg:top-[35%]
                right-[-6%] lg:right-[-6%]
                z-30
                w-40 sm:w-60 lg:w-[260px]
              "
            >
              <div className="rounded-xl overflow-hidden p-1 sm:p-2 flex items-center justify-center h-20 sm:h-24">
                <img
                  src={cardMiddleRight}
                  alt="Funded Applications"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Floating Mockup Card - Bottom Left */}
            <div
              className="
                absolute
                bottom-[-1%] sm:bottom-5 lg:bottom-[-2%]
                left-1/8 lg:left-1/6
                z-10
                w-40 sm:w-60 lg:w-[260px]
              "
            >
              <div className="rounded-xl overflow-hidden p-1 sm:p-2 flex items-center justify-center h-20 sm:h-24">
                <img
                  src={cardBottomLeft}
                  alt="Amount Raised"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}