import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { CircleArrowRight, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Github } from 'lucide-react';
import { scroller } from 'react-scroll';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const linkStyle = (path) => "hover:text-gray-300";

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  const images = [
    'ujcampus1.jpg',
    'ujcampus2.jpg',
    'ujcampus3.jpg',
    'ujcampus4.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // change image every 10 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <header className="bg-uniDark text-uniLight font-semibold py-4">
        <nav className="flex justify-between items-center w-[90%] mx-auto">
          <div className="flex items-center space-x-6">
            <Link to="/">
              <div className='flex mx-auto my-auto gap-2 justify-center'>
                <img src="/public/logos/map-marker.svg" alt="" className='my-auto w-8' />
                <h1 className="text-3xl font-bold text-uniLight my-auto">
                  UniGuide
                </h1>
              </div>
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <ul className="hidden md:flex space-x-8">
              <li>
                <button onClick={() => scrollToSection('home')} className={`linkStyle("/") text-uniWhite`}>
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('aboutus')} className={`linkStyle("/aboutus") hover:text-uniWhite`}>
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contactus')} className={`linkStyle("/contactus") hover:text-uniWhite`}>
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/login"
              className="px-4 py-2 rounded hover:bg-autoCream hover:text-uniWhite transition duration-300"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="bg-uniLight text-uniWhite px-5 py-2 rounded transition duration-300 hover:bg-cyan-600"
            >
              Sign Up
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={onToggleMenu}
              className="text-3xl focus:outline-none"
            >
              {menuOpen ? <>&#x2715;</> : <>&#9776;</>}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="md:hidden bg-autoPurple text-white py-4">
            <ul className="space-y-4 text-center">
              <li>
                <button onClick={() => scrollToSection('home')} className={linkStyle("/")}>
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('aboutus')} className={linkStyle("/aboutus")}>
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contactus')} className={linkStyle("/contactus")}>
                  Contact Us
                </button>
              </li>
              <li>
                <Link
                  to="/login"
                  className="px-4 py-2 rounded hover:bg-autoCream hover:text-autoPurple transition duration-300"
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="bg-uniLight text-uniWhite px-5 py-2 rounded transition duration-300"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      <header className="relative bg-gray-800 text-white">
        <img
          src={images[currentImageIndex]}
          alt="Slideshow"
          className="w-full h-48 sm:h-64 md:h-96 lg:h-120 object-cover transition-opacity duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="text-center font-bold">
            <div className="flex mx-auto my-auto gap-2 justify-center">
              <h1 className="text-3xl sm:text-5xl font-bold my-auto">
                Welcome to UniGuide
              </h1>
            </div>
            <div className="text-lg sm:text-2xl pb-10">your online campus navigation</div>
            <Link to="/map">
              <button className="flex mx-auto p-2 px-4 gap-2 justify-center bg-uniLight my-auto rounded-3xl hover:bg-uniDark">
                <div className="font-medium">Explore Campus</div>
                <CircleArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </header>

      <section id="aboutus" className='bg-uniWhite min-h-96 flex flex-col items-center mx-auto my-auto gap-2 justify-center px-12'>
        <div>
          <h1 className="text-3xl font-bold text-uniBlue my-auto">
            About Us
          </h1>
          <p className='w-full sm:w-1/2 text-lg text-slate-800'>UniGuide is a user-friendly app designed specifically for new and returning students to help them effortlessly explore and navigate their university campus.
            Our app aims to make your campus life easier, stress free, and more enjoyable</p></div>

      </section>

      <h1 className="text-3xl font-bold text-center pt-8">
        Our Gallery
      </h1>
      <section className='flex sm:flex-row flex-col gap-8 items-center justify-center py-6 px-8'>
        <div>
          <img src="ujcampus3.jpg" alt="" className='w-96 rounded-xl' />
        </div>
        <div>
          <img src="ujcampus2.jpg" alt="" className='w-96 rounded-xl' />
        </div>
        <div>
          <img src="ujcampus5.jpg" alt="" className='w-96 rounded-xl' />
        </div>
      </section>

      <footer id="contactus" className="bg-uniDark text-uniWhite py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex flex-col space-y-2">
              <h2 className="font-bold text-lg mb-4">Contact Us</h2>
              <div className="flex items-center space-x-2">
                <MapPin className="w-6 h-6 text-uniWhite" />
                <span>University of Jos, Barakin Naraguta 930105, Jos, Plateau, Nigeria.</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-6 h-6 text-uniWhite" />
                <span>+234 *** *** ****</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-6 h-6 text-uniWhite" />
                <span>uniguide.ng@gmail.com</span>
              </div>
              <div className="flex space-x-4 pt-3">
                <a href="#" className="hover:text-white">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-white">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-white">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-white">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-sm pt-14">
            <ul className="disc-none">
              <li className='disc-none'>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Acceptable use Policy</li>
              <li>Cancellation Policy</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 text-center text-sm">
          <p className='font-medium'><span className='font-bold'>&copy; UniGuide </span>2024 All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Home;
