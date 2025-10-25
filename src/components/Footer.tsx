export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-center">
            <p className="text-sm text-gray-300">
              &copy; {currentYear} Makhana Transport. All rights reserved.
            </p>
          </div>
          <div className="text-center text-sm text-gray-400">
            <p>Developed by <span className="text-amber-500 font-medium">Your Name</span></p>
            <p className="mt-1">Contact: developer@example.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
