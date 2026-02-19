import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Programs",
      children: [
        { name: "1:1 Coaching", href: "/services/one-on-one" },
        { name: "Group Classes", href: "/services/group-classes" },
        {
          name: "12-Week Transformation",
          href: "/services/weight-loss-program",
        },
      ],
    },
    { name: "Results", href: "/results" },
    { name: "About Coach", href: "/about" },
    { name: "FAQs", href: "/faqs" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-pink-200 flex items-center justify-center">
            🌸
          </div>
          <h1 className="text-xl font-semibold tracking-wide text-gray-800">
            ELENA ROSSI
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.name} className="relative group">
                <div className="flex items-center gap-1 cursor-pointer text-gray-600 hover:text-black transition duration-300 text-sm font-medium">
                  {link.name}
                  <ChevronDown size={16} />
                </div>

                {/* Dropdown */}
                <div className="absolute top-8 left-0 bg-white shadow-xl rounded-xl py-4 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {link.children.map((sublink) => (
                    <Link
                      key={sublink.name}
                      to={sublink.href}
                      className="block px-6 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition"
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-600 hover:text-black transition duration-300 text-sm font-medium"
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            to="/book-call"
            className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold transition duration-300 shadow-md"
          >
            Book Free Call
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-gray-800"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-6 p-6">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.name}>
                <button
                  onClick={() =>
                    setMobileServicesOpen(!mobileServicesOpen)
                  }
                  className="flex items-center justify-between w-full text-gray-700 text-base font-semibold"
                >
                  {link.name}
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="flex flex-col gap-3 pl-4 mt-3">
                    {link.children.map((sublink) => (
                      <Link
                        key={sublink.name}
                        to={sublink.href}
                        onClick={() => {
                          setIsOpen(false);
                          setMobileServicesOpen(false);
                        }}
                        className="text-gray-600 hover:text-pink-500 transition"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 text-base font-medium hover:text-pink-500 transition"
              >
                {link.name}
              </Link>
            )
          )}

          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-pink-400 hover:bg-pink-500 text-white text-center py-3 rounded-full font-semibold transition"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}
    </header>
  );
}