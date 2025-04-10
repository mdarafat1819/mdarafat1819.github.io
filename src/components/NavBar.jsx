import './NavBar.css';
import { useState } from 'react';

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <ul className={`navbar__menu ${isMobileMenuOpen ? 'navbar__menu--active' : ''}`}>
        <li className="navbar__item"><a href="index.html" className="navbar__link active">Home</a></li>
        <li className="navbar__item"><a href="index.html" className="navbar__link">About</a></li>
        <li className="navbar__item"><a href="index.html" className="navbar__link">Experience</a></li>
        <li className="navbar__item"><a href="index.html" className="navbar__link">Blog</a></li>
        <li className="navbar__item"><a href="index.html" className="navbar__link">Contact</a></li>
      </ul>
      <div className="navbar__toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    </nav>
  );
}

export default NavBar;
