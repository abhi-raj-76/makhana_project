export default function Home() {
  return (
    <div className="bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Delivering Nature's Golden Treasure
            </h1>
            <div className="h-1 w-24 bg-amber-600"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Once a sacred offering reserved for royalty, makhana (fox nuts) is now celebrated
              as a global "super snack." This aquatic treasure, harvested from pristine ponds,
              is a powerhouse of protein, fiber, and magnesium, making it the perfect guilt-free
              crunch for the health-conscious.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We don't just transport a commodity; we deliver nature's delicate, golden-white
              pearls to fuel wellness and culinary innovation.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="bg-amber-100 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold text-amber-700">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
              <div className="bg-amber-100 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold text-amber-700">100%</div>
                <div className="text-sm text-gray-600">Secure</div>
              </div>
              <div className="bg-amber-100 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold text-amber-700">Pan-India</div>
                <div className="text-sm text-gray-600">Network</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-amber-200 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              <img
                src="/image.png"
                alt="Makhana"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Assured</h3>
            <p className="text-gray-600">
              Temperature-controlled vehicles and specialized packaging to maintain freshness and quality throughout transit.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Timely Delivery</h3>
            <p className="text-gray-600">
              Efficient routing and real-time tracking ensure your makhana reaches its destination on schedule, every time.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Pan-India Reach</h3>
            <p className="text-gray-600">
              Extensive network connecting Bihar's makhana heartland to markets across India with FTL and PTL services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
