export default function Certificates() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Certificates</h1>
          <p className="text-xl text-amber-100">Our Commitment to Quality and Safety</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Makhana Transport is committed to maintaining the highest standards of food safety
            and quality in our logistics operations. We are proud to be certified by the Food
            Safety and Standards Authority of India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-2xl shadow-2xl p-12 flex items-center justify-center border-4 border-amber-100">
            <div className="text-center">
              <div className="mb-6">
                <svg className="w-48 h-48 mx-auto text-amber-600" viewBox="0 0 200 200" fill="currentColor">
                  <circle cx="100" cy="100" r="90" fill="#FEF3C7" />
                  <path d="M100 30 L110 70 L150 70 L120 95 L130 135 L100 110 L70 135 L80 95 L50 70 L90 70 Z" fill="currentColor" />
                  <text x="100" y="170" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#92400E">FSSAI</text>
                  <text x="100" y="190" fontSize="12" textAnchor="middle" fill="#92400E">CERTIFIED</text>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">FSSAI Certified</h2>
              <p className="text-gray-600">Food Safety and Standards Authority of India</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What This Means</h3>
              <p className="text-gray-700 leading-relaxed">
                Our FSSAI certification ensures that we meet all regulatory requirements for
                food transportation and handling. This certification demonstrates our commitment
                to maintaining the highest standards of hygiene, safety, and quality throughout
                the entire logistics chain.
              </p>
            </div>

            <div className="bg-white border border-amber-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Quality Standards</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Temperature-controlled transportation systems</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Hygienic handling and storage practices</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Regular quality audits and inspections</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Trained personnel in food safety protocols</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Specialized packaging for moisture protection</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Your Trust, Our Priority</h3>
              <p className="text-amber-50">
                We continuously update our practices to exceed industry standards and provide
                you with the most reliable and safe transportation service for your valuable
                makhana products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
