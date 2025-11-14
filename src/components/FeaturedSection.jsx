import { CheckCircle2, ArrowRight } from "lucide-react";
import smartMatchMockup from "/Images/smart-connect.svg";
import guidedFundraiseMockup from "/Images/guided-fundraise.svg";

export default function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-center text-primary-dark">
          Secure the funding you need!
        </h2>
        <p className="text-lg sm:text-xl text-center text-primary-dark max-w-2xl mx-auto">
          We streamline your fundraising journey with products and services designed to ensure the success of your business.
        </p>
      </div>

      {/* Circular Pattern Background - Hidden on small screens, visible on medium+ */}
      <div
        className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-[1200px] bg-center opacity-60 z-10 bg-[url('/Images/bg-circles.png')]"
      ></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-12 gap-8">
          {/* Feature 1: Smart Connect */}
          <div className="smartconnect-card bg-white col-span-12 md:col-span-9 rounded-3xl shadow-features-card">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-8">
                <div className="px-6 md:p-12">
                  <p className="text-2xl font-semibold md:text-[40px] text-primary-dark leading-tight">SmartMatch</p>
                  <p className="text-primary-dark leading-8 mt-4">
                    Instantly connect with multiple investors ready to support your vision. If you have a compelling pitch deck and a solid value proposition, our smart investor match & data tool is your quickest path to securing funding.
                  </p>
                  <div className="flex flex-col mt-6 gap-6">
                    <div className="flex items-center gap-4">
                      <CheckCircle2 className="text-highlight-green" size={24} />
                      <p className="text-primary-dark">Increase response rates from investors by 40%</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <CheckCircle2 className="text-highlight-green" size={24} />
                      <p className="text-primary-dark">Save 80% of your time and energy in applying</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <CheckCircle2 className="text-highlight-green" size={24} />
                      <p className="text-primary-dark">Connect with a database over 3000 active investors</p>
                    </div>
                    <button className="w-fit rounded-lg flex items-center gap-2 p-3 text-base text-green-accent-500 leading-8 hover:bg-green-100 transition cursor-pointer">
                      <p className="font-semibold">Get started with SmartMatch</p>
                      <ArrowRight size={16} className="text-green-accent-500" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-img col-span-12 md:col-span-4 h-full">
                <div className="h-full flex items-end justify-center md:justify-end p-6 md:p-0">
                  <img src={smartMatchMockup} alt="SmartMatch Mockup" className="max-h-80 md:max-h-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Spacing */}
          <div className="col-span-12 md:col-span-3"></div>

          {/* Feature 2: Guided Fundraise */}
          <div className="col-span-12 md:col-span-3"></div>

          <div className="get-funds-card bg-white col-span-12 md:col-span-9 rounded-3xl shadow-features-card mt-8 md:mt-20">
            <div className="grid grid-cols-12 gap-6">
              <div className="card-img col-span-12 md:col-span-4 h-full order-2 md:order-1">
                <div className="h-full flex items-end justify-center md:justify-start p-6 md:p-0">
                  <img src={guidedFundraiseMockup} alt="Guided Fundraise Mockup" className="max-h-80 md:max-h-full" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 order-1 md:order-2">
                <div className="px-6 md:p-12">
                  <p className="text-2xl font-semibold md:text-[40px] text-primary-dark leading-tight">Guided Fundraise</p>
                  <p className="text-primary-dark leading-8 mt-4">
                    Receive tailored guidance and support to ensure you're investor-ready. If you need help refining your pitch or preparing your documents, our guided fundraise service is designed for you.
                  </p>
                  <div className="flex flex-col mt-6 gap-6">
                    <div className="flex items-center gap-4">
                      <CheckCircle2 className="text-highlight-green" size={24} />
                      <p className="text-primary-dark">Improve your pitch deck quality by 150% with expert review</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <CheckCircle2 className="text-highlight-green" size={24} />
                      <p className="text-primary-dark">Personalized support for document preparation and insights</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <CheckCircle2 className="text-highlight-green" size={24} />
                      <p className="text-primary-dark">Connect with investor through direct introductions</p>
                    </div>
                    <button className="w-fit rounded-lg flex items-center gap-2 p-3 text-base text-green-accent-500 leading-8 hover:bg-green-100 transition cursor-pointer">
                      <p className="font-semibold">Get Started With Guided Fundraise</p>
                      <ArrowRight size={16} className="text-green-accent-500" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}