export default function About() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">About Makhana Transport</h1>
          <p className="text-2xl text-amber-100">Your Trusted Partner in Makhana Logistics</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <div className="bg-amber-50 border-l-4 border-amber-600 p-8 rounded-r-lg mb-12">
            <p className="text-xl text-gray-800 leading-relaxed">
              Makhana Transport is a dedicated logistics company born from a deep understanding
              of the unique needs of the makhana supply chain. We specialize exclusively in the
              safe and timely domestic transport of this precious cargo. Our mission is to be
              the most reliable link between farmers, processors, and markets all across India,
              ensuring the superior quality and freshness of your makhana is preserved on every
              kilometer of its journey.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-2 h-10 bg-amber-600 mr-4"></span>
              Our Story: Built on Expertise & Reliability
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our journey began with a simple goal: to solve the logistical challenges faced by
              the makhana industry. We recognized that this isn't just another commodity—it's a
              delicate, value-added product that demands specialized care.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We have built our entire operation around this understanding, developing tailored
              solutions for road transport, temperature control, and secure packaging to protect
              your product from moisture, damage, and delays.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-2 h-10 bg-amber-600 mr-4"></span>
              Why Choose Makhana Transport?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-amber-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Product Specialists</h3>
                    <p className="text-gray-600">
                      We exclusively understand the handling, storage, and transit requirements of
                      makhana, ensuring it stays crisp and fresh.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-amber-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Pan-India Network</h3>
                    <p className="text-gray-600">
                      We provide reliable Full Truckload (FTL) and Part Truckload (PTL) services,
                      connecting major makhana-producing regions like Bihar to every corner of the country.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-amber-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Guaranteed Care</h3>
                    <p className="text-gray-600">
                      Our fleet includes temperature-controlled and airtight vehicles, and we use
                      specialized packaging to safeguard your goods from farm to market.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-amber-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Commitment to Timeliness</h3>
                    <p className="text-gray-600">
                      We know that time is critical. Our efficient routing and tracking systems are
                      designed for on-time delivery, every time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white rounded-2xl p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-amber-50 leading-relaxed">
                  To empower the growth of the makhana industry within India by providing safe,
                  efficient, and specialized logistics solutions that our clients can depend on.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg text-amber-50 leading-relaxed">
                  To be the nation's most trusted and leading name in domestic makhana transport,
                  recognized for our unwavering commitment to quality and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
