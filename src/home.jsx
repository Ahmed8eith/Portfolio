import React from 'react';
import { projects } from '.';
import portfolioImage from './assets/port.png';
import Navbar from './Navbar';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from './contact';

function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return (
    <div id="about" className="min-h-screen flex flex-col ">
      <Navbar />
      <div className="flex-grow px-4 md:px-8 lg:px-16 pt-12 container mx-auto">
        {/* Introduction Section */}
        <div  className="flex flex-col lg:flex-row justify-between items-center mb-16 space-y-8 lg:space-y-0">
          {/* Text Section */}
          <div className="space-y-4 max-w-xl">
            <header className="text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-red-800 font-bold">Ahmed Mohamed</h1>
              <h2 className="text-2xl md:text-3xl font-bold lg:text-4xl">Software Developer</h2>
            </header>
            <main>
              <p className=" text-left font-semibold text-base md:text-lg lg:text-2xl">
                A fresh website developer passionate about crafting responsive and user-friendly web applications.
                I primarily work with React and Tailwind CSS, and I have experience with HTML, CSS, JavaScript, and Python.
                I'm committed to advancing my skills, developing creative websites, and contributing to meaningful and impactful projects.
              </p>
              <div className="flex justify-start mt-4">
              <a 
                className="btn btn-outline btn-primary text-sm md:text-base lg:text-lg" 
                href="https://www.canva.com/design/DAGckqyCA6o/xmQa6cMxBqsMl9Cwt_63gA/view?utm_content=DAGckqyCA6o&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb75c29a776" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                My Resume
              </a>
              </div>
            </main>
          </div>

          {/* Image Section */}
          <div className="mt-8 lg:mt-0 lg:ml-12">
            <img src={portfolioImage} alt="portfolio" className="w-full max-w-xs md:max-w-sm lg:max-w-md" />
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="my-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold  mb-10 text-center">
            My Latest Projects
          </h1>
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
            <Slider {...sliderSettings}>
              {projects.map((project, index) => (
                <div key={index} className="px-2">
                  <div className="rounded-lg shadow-md overflow-hidden bg-white">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-36 md:h-48 lg:h-64 object-cover"
                      />
                    </a>
                    <div className="p-4 md:p-6">
                      <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-2 md:mb-4">{project.title}</h2>
                      <p className="text-sm md:text-lg text-gray-600 mb-4 md:mb-6">{project.description}</p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-500 text-white px-4 md:px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 text-sm md:text-base"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Contact Section */}
        <div >
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Home;