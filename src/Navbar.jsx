import React from 'react';

function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div>
      {/* Logo Section */}
      <h1 className="font-bold text-5xl text-blue-900 text-left px-4">
        My Portfolio
      </h1>

      {/* Navigation Links */}
      <ul className="flex flex-col md:flex-row md:justify-end md:space-x-12 list-none fixed top-0 right-0 px-4 py-2 z-50 space-y-4 md:space-y-0">
        <li 
          className="btn btn-ghost btn-primary cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          About
        </li>
        <li 
          className="btn btn-ghost btn-primary cursor-pointer"
          onClick={() => scrollToSection('projects')}
        >
          Projects
        </li>
        <li 
          className="btn btn-ghost btn-primary cursor-pointer"
          onClick={() => scrollToSection('contacts')}
        >
          Contacts
        </li>
      </ul>
    </div>
  );
}

export default Navbar;