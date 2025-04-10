import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav id="navbar" className="fixed top-0 left-0 w-full bg-cust text-green-900 shadow-md py-4 z-50 transition-transform duration-300">
        <div className="container mx-auto flex justify-between items-center px-6">
          <a href="#home" className="flex items-center space-x-2">
            <img src="https://raw.githubusercontent.com/IsratJahanR/portfolio/main/static/images/icon.jpg" alt="Logo" className="h-12 w-12 rounded-full" />
            <h1 className="text-2xl font-bold text-black md:text-left italic">Israts' site</h1>
          </a>

          {/* Hamburger Menu */}
          <button
            id="menu-toggle"
            className="md:hidden text-green-900 text-3xl focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>

          <ul className={`md:flex space-x-6 absolute md:static bg-cust w-full md:w-auto left-0 top-full md:top-auto flex-col md:flex-row shadow-md md:shadow-none p-4 md:p-0 ${isMobileMenuOpen ? '' : 'hidden'}`}>
            {['home', 'about', 'education', 'skills', 'projects', 'research', 'problem-solving', 'blogs', 'contact'].map(section => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  id={`nav-${section}`}
                  className={`nav-link block py-2 px-1 hover:text-green-500 ${activeSection === section ? 'active' : ''}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Floating Social Links */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 space-y-4 p-3 bg-opacity-90 rounded-r-lg shadow-lg z-50 hidden md:block">
        {['github', 'linkedin', 'facebook', 'instagram'].map(platform => (
          <a
            key={platform}
            href={`https://www.${platform}.com/IsratJahanR`}
            target="_blank"
            className="block p-3 text-black text-2xl hover:bg-gray-300 rounded"
          >
            <i className={`fa-brands fa-${platform}`} />
          </a>
        ))}
      </div>

      {/* Content Sections */}
      <section id="home">
        {/* Home section content */}
      </section>
      <section id="about">
        {/* About section content */}
      </section>
      <section id="education">
        {/* Education section content */}
      </section>
      <section id="skills">
        {/* Skills section content */}
      </section>
      <section id="projects">
        {/* Projects section content */}
      </section>
      <section id="research">
        {/* Research section content */}
      </section>
      <section id="problem-solving">
        {/* Problem-solving section content */}
      </section>
      <section id="contact">
        {/* Contact section content */}
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-cust text-green-900 py-4 shadow-md">
        <div className="text-center text-xs text-gray-700 mt-2">
          <div className="md:hidden flex justify-center space-x-4">
            {['github', 'linkedin', 'facebook', 'instagram'].map(platform => (
              <a
                key={platform}
                href={`https://www.${platform}.com/IsratJahanR`}
                target="_blank"
                className="p-3 text-black text-2xl hover:bg-gray-300 rounded"
              >
                <i className={`fa-brands fa-${platform}`} />
              </a>
            ))}
          </div>

          <div className="text-center text-xs text-gray-700 mt-2">
            © 2025 Israt Jahan Reshma. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Navbar;
